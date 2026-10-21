/**  ██╗██╗                                                                 ██╗██╗
 *   ██║╚═╝  ████████╗ ██████    ██████╗UOTES  ██████╗ ██████╗ ███╗   ███╗  ╚═╝██║
 *   ██║     ╚══██╔══╝ ██╔═██╗I ██╔═══██╗     ██╔════╝██╔═══██╗████╗ ████║     ██║
 *   ██║        ██║H   █████╔╝B ██║   ██║     ██║     ██║   ██║██╔████╔██║     ██║
 *   ██║        ██║E   ██║ ██╗L ██║  █ █║     ██║     ██║   ██║██║╚██╔╝██║     ██║
 *   ██║        ██║    ██████║E ╚█████ ██╗ ██╗╚██████╗╚██████╔╝██║ ╚═╝ ██║     ██║
 *   ██║██╗     ╚═╝      ╚═══╝S  ╚═══════╝ ╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝  ██╗██║
 *   ╚═╝╚═╝                                                                 ╚═╝╚═╝
 * TheBiblesQuotes Project
 * © 2025 BadNintendo - Protection Module
 * All rights reserved.
 * Unauthorized copying of this file, via any medium, is strictly prohibited.
 * 
 * USAGE:
 * This software is provided 'as-is', without express or implied warranty. The authors are
 * not liable for damages arising from its use.
 * 
 * You may use this software for personal and commercial purposes under the following conditions:
 * 1. Do not misrepresent the origin of the software; do not claim it as your own.
 * 2. Altered versions must be marked as such and not misrepresented as the original.
 * 3. This notice must remain intact in all source distributions. */
const rateLimit = require('express-rate-limit');
const session = require('express-session');
const compression = require('compression');
const QPRx2025 = require('./QPRx2025');
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');

const {
	checkAllKeepSession,
	updateSession,
	checKeepSession,
	keepSession
} = require('./middleware');

const { htmlColors, headerData } = require('./misc');

/** Array of allowed sub domains.
 * @type {Array<string>} */
const allowedSubDomains = ['live'];

/** Destroys the user's session and clears the session cookie.
 * @param {Object} req - The HTTP request object. Used to access the session and its data.
 * @param {Object} res - The Express response object used for error handling responses. */
const destroySession = (req, res) => {
	if (req.session && req.cookies['thebiblesquotes.sid']) {
		req.session.destroy(err => {
			if (err) console.warn('\x1b[36mSession destroy \x1b[31merror:', err, `\x1b[0m`);
			res.clearCookie('thebiblesquotes.sid');
		});
	}
};

/** Creates or regenerates a secure session and injects CSRF protection metadata.
 * @param {import('express').Request} req - The incoming Express request object (must include a session).
 * @param {import('express').Response} res - The Express response object used for error handling responses.
 * @param {boolean} [rememberme=true] - Optional flag: if true, creates a 30-day session; otherwise, a 6-hour one. */
const csrfCreation = async (req, rememberme = true) => {
	return new Promise((resolve, reject) => {
		req.session.regenerate((err) => {
			if (err) {
				logError(err, { context: 'Session Regeneration' });
				return reject(new Error('Session regeneration failed.'));
			}
			QPRx2025.init(Math.floor(Math.random() * 1e6));
			req.session.cookie.maxAge = rememberme ? 30 * 24 * 60 * 60 * 1000 : 6 * 60 * 60 * 1000;
			req.session.uuid = req.session.uuid || QPRx2025.generateUUID();
			req.session.csrfToken = QPRx2025.generateCharacters(24);
			req.session.save();
		});
	});
};

/** Sets up session-related metadata before routing logic kicks in.
 * Adds sessionId, validation, host flags, CSRF, and hosting status to req.
 * @param {Object} req - The HTTP request object. Contains session, cookies, body, and query parameters.
 * @param {Object} res - The HTTP response object. Used to send error responses if validation fails.
 * @param {Function} next - Callback to continue to the next middleware or route handler. */
const setupSession = (req, res, next) => {
	req.csrf = req.session.csrfToken;
	if (!req.csrf) return;
	QPRx2025.init(Math.floor(Math.random() * 9e4) + 1e4);
	const sid = req.query.session ? +req.query.session : Math.floor(100000 + QPRx2025.QuantumPollsRelay(900000));
	const sessions = checkAllKeepSession();
	const expires = new Date(Date.now() + 3600000);
	const fp = headerData(req);
	req.sessionId = sid;
	req.check = sessions[sid] || false;
	const match = (s) => s?.uuid === req.uuid || (s?.ip === req.ip && QPRx2025.customHash(fp, process.env.HASHUSERSALT || 10, s?.hashed));
	const isHosting = Object.entries(sessions).some(([id, s]) => (match(s) && (req.check ? id == sid : true)));
	const update = (s) => {
		s.expires = expires;
		s.hostInactive = false;
		s.ip = req.ip;
		if (s.hashed) s.hashed = req.session.hashed = QPRx2025.customHash(fp, process.env.HASHUSERSALT || 10);
		req.session.hosting = true;
		updateSession(sid, s);
	};
	if (req.check && match(req.check)) update(req.check);
	else if (req.hasHostFlag) {
		if (!req.check && !isHosting) {
			const hashed = QPRx2025.customHash(fp, process.env.HASHUSERSALT || 10);
			req.sessionValidated = keepSession({
				session: sid,
				entry: { session: sid, uuid: req.uuid, results: false, hostInactive: false, ip: req.ip, hashed, expires }
			});
			req.session.hashed = hashed;
			req.session.hosting = true;
		} else if (req.check && match(req.check)) update(req.check);
		else req.session.hosting = false;
	} else req.session.hosting = false;
	next();
};

/** Validate the CSRF token for requests.
 * This function ensures that the CSRF token is properly set and matches between the session, cookies, and request body/query.
 * @param {Object} req - The HTTP request object. Contains session, cookies, body, and query parameters.
 * @param {Object} res - The HTTP response object. Used to send error responses if validation fails.
 * @param {Function} next - Callback to continue to the next middleware or route handler. */
function csrfValidation (req, res, next) {
	try {
		const sess = req.session;
		const uuid = sess.uuid;
		if ((!sess && !uuid) || (!req.sessionID && !uuid)) {
			return res.status(401).render('error', {
				errorNum: 401,
				errorMessage: 'Session Missing',
				errorDescription: 'Session ID is invalid or expired. Please refresh as Host.',
				action: 'Return to Home Page',
				actionLink: '/'
			});
		}
		const sessionCsrfToken = sess.csrfToken;
		const requestCsrfToken = (req.body?._csrf || req.query?._csrf || false);
		if (!sessionCsrfToken ) {
			QPRx2025.init(Math.floor(Math.random() * 1e6));
			req.session.csrfToken = QPRx2025.generateCharacters(24)
			return next();
		}
		if (requestCsrfToken && (requestCsrfToken !== sessionCsrfToken)) {
			destroySession(req, res);
			return res.status(403).render('error', {
				errorNum: 403,
				errorMessage: 'CSRF Token Mismatch',
				errorDescription: 'Potential CSRF detected. Your session has been cleared.',
				action: 'Return to Home Page',
				actionLink: '/'
			});
		}
		return next();
	} catch (error) {
		console.error('CSRF validation error:', error);
		return res.status(500).render('error', {
			errorNum: 500,
			errorMessage: 'Server Error',
			errorDescription: 'An error occurred during CSRF validation.',
			action: 'Return to Home Page',
			actionLink: '/'
		});
	}
}

/** Configures secure session handling for legitimate traffic.
 * - Uses environment-based secret for encryption.
 * - Prevents resaving unchanged sessions.
 * - Avoids saving uninitialized sessions.
 * - Sets cookie attributes for security and domain scoping. */
const gatedSessionMiddleware = session({
	secret: process.env.SESSION_SECRET || 'tbq',
	resave: false,
	saveUninitialized: false,
	cookie: {
		path: '/',
		httpOnly: true,
		maxAge: 7 * 24 * 60 * 60 * 1000,
		sameSite: 'lax',
		secure: true,
		domain: '.thebiblesquotes.com'
	},
	name: 'thebiblesquotes.sid',
});

/** Applies gated session middleware only for non-bot traffic.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Callback to pass control. */
const sessionMiddleware = (req, res, next) => {
	const ua = (req.normalizedUA || (typeof req.get === 'function' ? req.get('User-Agent') : '') || '').toLowerCase();
	if (botConfigs.has(ua)) {
		return next();
	}
	return gatedSessionMiddleware(req, res, next);
};

/** Blocks bot traffic with HTTP 403 Forbidden.
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - Callback to pass control. */
const botSkipper = (req, res, next) => {
	const ua = (req.normalizedUA || (typeof req.get === 'function' ? req.get('User-Agent') : '') || '').toLowerCase();
	if (botConfigs.has(ua)) {
		return res.sendStatus(403);
	}
	return next();
};

/** Express middleware to provide an error results page.
 * @param {object} req - Express request object
 * @param {object} res - Express response object */
function errorPage(res, req) {
	const errorNum = res.statusCode !== 200 ? res.statusCode : 404;
	const langType = req.query?.lang === 'es' ? 'es' : 'en';
	const errorMap = {
		404: { action: 'Return to Home Page',	actionLink: '/', },
		403: { action: 'Go Back', 				actionLink: req.get('Referrer') || '/', },
		500: { action: 'Try Again Later', 		actionLink: '/', }
	};
	const { action, actionLink } = errorMap[errorNum] || errorMap[500];
	return res.status(errorNum).render('error', { errorNum, action, actionLink, langType });
}

/** Express middleware to prevent setting session configuration with excess web scrappers & bots.
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {function} next - Express next middleware callback */
function secureMiddleware(defined) {
	return (req, res, next) => {
		if (!['GET', 'POST'].includes(req.method)) return res.status(405).end();
		const fullUrl = (`${req.protocol}://${req.get('host')}${req.originalUrl}`).toLowerCase();
		req.normalizedUA = (req.headers['user-agent'] || '').trim().toLowerCase();
		if (shouldSkipSession(req)) return res.sendStatus(403);
		else if (forbiddenExts.some(ext => req.path.endsWith(ext))) return res.sendStatus(403);
		//else if (!defined.has(req.path) && req.method === 'GET' && !req.path.includes('.')) return errorPage(res, req);
		else if (!defined.has(req.path)) return errorPage(res, req);
		else if (fullUrl?.includes('127.0.0.1') || fullUrl?.includes('192.168.1.') || fullUrl?.includes('75.143.110.55') || fullUrl?.includes('148.113.194.77')) return next();
		else if (!fullUrl?.includes('thebiblesquotes.com')) return res.sendStatus(403);
		return next();
	};
}

// List of URL patterns commonly associated with debugging tools, admin panels, or known exploit surfaces
const blacklistPatterns = [/\/\?XDEBUG_SESSION_START=/, /\/cgi-bin\//, /\/druid\//, /\/luci\//, /\/hudson/, /\/actuator\/gateway\//, /\/jquery\/uploader\//];
// List of file extensions that indicate server-side script targets, often probed by bots or scanners
//const forbiddenExts = ['.php', '.asp', '.aspx', '.jsp', '.cgi'];

const forbiddenExts = [
	'.php', '.asp', '.aspx', '.jsp', '.cgi', '.pl', '.cfm', '.rb', '.py', '.sh',
	'.env', '.ini', '.config', '.yaml', '.yml', '.bak', '.old', '.backup',
	'.exe', '.dll', '.bin', '.dat', '.msi', '.bat', '.cmd',
	'.java', '.cs', '.cpp', '.h', '.go', '.ts', '.vue', '.ejs', '.twig', '.pug',
	'.swf', '.jar', '.zip', '.tar', '.gz', '.rar',
	'.md', '.log', '.html', '.htm', '.shtml', '.xhtml',
	'.db', '.sqlite', '.ldb', '.json', '.xml', '.rss'
];

/** Stateless legitimacy gate to determine whether a request should bypass session allocation
 * @param {object} req 
 * @returns {Boolean} true/false */
const shouldSkipSession = (req) => {
    const ua = (req.normalizedUA || '').toLowerCase();
	//if (botConfigs.has(ua)) return true;
	if (/curl|wget|scrapy|httpclient|python-requests|axios|libwww|postmanruntime|java/.test(ua)) return true;
	else if (blacklistPatterns.some(rx => rx.test(req.url))) return true;
    return false;
};

/** Security Middleware (used separately)
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 * @returns  */
function securityMiddleware (req, res, next) {
	const safeKeys = ['htmlSnippet', 'trustedEmbed'];
	req.body = sanitizeRecursive(req.body || {}, safeKeys);
	req.query = sanitizeRecursive(req.query || {}, safeKeys);
	req.params = sanitizeRecursive(req.params || {}, safeKeys);
	next();
}

/** Rate limit settings for users and bots.
 * @type {Object} */
const rateLimitConfig = {
	defaultUser: { 					windowMs: 60 * 60 * 1000, max: 150 },	// Regular users
	defaultBot: {					 windowMs: 60 * 60 * 1000, max: 150 },	// Unknown bots
	bots: {
		'AwarioSmartBot': {			windowMs: 15 * 60 * 1000, max: 5 },    //Spammer Bot
		'Twitterbot': { 			windowMs: 15 * 60 * 1000, max: 80 },	// Twitter
		'Pinterest': { 				windowMs: 15 * 60 * 1000, max: 80 },	// Pinterest
		'Slackbot': { 				windowMs: 15 * 60 * 1000, max: 80 },	// Slack
		'LinkedInBot': { 			windowMs: 15 * 60 * 1000, max: 80 },	// LinkedIn
		'WhatsApp': { 				windowMs: 15 * 60 * 1000, max: 80 },	// WhatsApp
		'TikTokBot': { 				windowMs: 15 * 60 * 1000, max: 80 },	// TikTok
		'Discordbot': { 			windowMs: 15 * 60 * 1000, max: 80 },	// Discord
		'TelegramBot': { 			windowMs: 15 * 60 * 1000, max: 80 },	// Telegram
		'Redditbot': { 				windowMs: 15 * 60 * 1000, max: 80 },	// Reddit
		'Snapchat': { 				windowMs: 15 * 60 * 1000, max: 80 },	// Snapchat
		'facebookexternalhit': { 	windowMs: 15 * 60 * 1000, max: 100 },	// Facebook
		'Googlebot': { 				windowMs: 60 * 60 * 1000, max: 200 },	// Google Search
		'Bingbot': { 				windowMs: 60 * 60 * 1000, max: 200 },	// Bing Search
		'YandexBot': { 				windowMs: 60 * 60 * 1000, max: 200 },	// Yandex Search
		'DuckDuckBot': { 			windowMs: 60 * 60 * 1000, max: 200 },	// DuckDuckGo
		'Baiduspider': { 			windowMs: 60 * 60 * 1000, max: 200 },	// Baidu Search
		'Sogou': { 					windowMs: 60 * 60 * 1000, max: 200 },	// Sogou Search
		'Exabot': { 				windowMs: 60 * 60 * 1000, max: 200 },	// Exalead
		'Yahoo! Slurp': { 			windowMs: 60 * 60 * 1000, max: 200 },	// Yahoo Search
		'AhrefsBot': { 				windowMs: 60 * 60 * 1000, max: 200 },	// Ahrefs SEO Tool
		'SEMrushBot': { 			windowMs: 60 * 60 * 1000, max: 200 },	// SEMrush SEO Tool
		'MJ12bot': { 				windowMs: 60 * 60 * 1000, max: 200 },	// Majestic SEO Tool
		'DotBot': { 				windowMs: 60 * 60 * 1000, max: 200 },	// Moz SEO Tool
		'SiteAnalyzerBot': { 		windowMs: 60 * 60 * 1000, max: 200 },	// SiteAnalyzer SEO Tool
		'Mediapartners-Google': { 	windowMs: 60 * 60 * 1000, max: 200 },	// Google Adsense Crawler
		'AdsBot-Google': { 			windowMs: 60 * 60 * 1000, max: 200 },	// Google AdsBot
		'Applebot': { 				windowMs: 60 * 60 * 1000, max: 200 },	// Apple Search Engine
		'Google Favicon': { 		windowMs: 60 * 60 * 1000, max: 200 },	// Google Favicon bot
		'W3C_Validator': { 			windowMs: 60 * 60 * 1000, max: 200 },	// W3C Validator Bot
		'UptimeRobot': { 			windowMs: 60 * 60 * 1000, max: 200 },	// Uptime Monitoring Bot
		'PingdomBot': { 			windowMs: 60 * 60 * 1000, max: 200 },	// Pingdom Monitoring Bot
		'PhantomJS': { 				windowMs: 60 * 60 * 1000, max: 200 },	// SEO Monitoring (Headless Browser)
		'Feedfetcher-Google': { 	windowMs: 60 * 60 * 1000, max: 200 },	// Google Feed Fetcher
		'Flipboard': { 				windowMs: 60 * 60 * 1000, max: 200 },	// Flipboard Feed Crawler
		'AppleNewsBot': { 			windowMs: 60 * 60 * 1000, max: 200 },	// Apple News Bot
		'Feedly': { 				windowMs: 60 * 60 * 1000, max: 200 },	// Feedly RSS Reader Bot
		'Bloglovin': { 				windowMs: 60 * 60 * 1000, max: 200 },	// Bloglovin RSS Reader
		'PaperLiBot': { 			windowMs: 60 * 60 * 1000, max: 200 },	// Paper.li Feed Fetcher
		'Google-Site-Verification': { windowMs: 60 * 60 * 1000, max: 200 },	// Google Site Verification
		'Google-PageSpeedInsights': { windowMs: 60 * 60 * 1000, max: 200 },	// Google PageSpeed Insights
		'Google-Structured-Data-Testing-Tool': { windowMs: 60 * 60 * 1000, max: 200 },	// Google Structured Data Testing Tool
		'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)': { windowMs: 60 * 60 * 1000, max: 200 },	// IE Headless Bots
		'archive.org_bot': {           windowMs: 60 * 60 * 1000, max: 200 }, // Internet Archive Bot
		'Twitterbot/1.0': {            windowMs: 15 * 60 * 1000, max: 80 },  // Alternative Twitter Bot
		'FacebookBot': {              windowMs: 15 * 60 * 1000, max: 100 }, // Facebook Bot variant
		'Yahoo! Slurp China': {       windowMs: 60 * 60 * 1000, max: 200 }, // Yahoo CN Bot
		'Barkrowler': {               windowMs: 60 * 60 * 1000, max: 200 }, // Common research bot
		'QwantBot': {                 windowMs: 60 * 60 * 1000, max: 200 }, // Qwant Search Bot
		'SeznamBot': {                windowMs: 60 * 60 * 1000, max: 200 }, // Seznam.cz Bot
		'coccocbot-web': {            windowMs: 60 * 60 * 1000, max: 200 }, // Cốc Cốc (Vietnamese search engine)
		'YoudaoBot': {                windowMs: 60 * 60 * 1000, max: 200 }, // Youdao Search Engine Bot
		'Google Web Preview': {       windowMs: 60 * 60 * 1000, max: 200 }, // Preview engine used by Google
		'Google-InspectionTool': {    windowMs: 60 * 60 * 1000, max: 200 }, // Page inspection bot
		'MauiBot': {                  windowMs: 60 * 60 * 1000, max: 200 }, // SEO crawler
		'ZoominfoBot': {              windowMs: 60 * 60 * 1000, max: 200 }, // Business crawler
		'NetcraftSurveyAgent': {      windowMs: 60 * 60 * 1000, max: 200 }, // Site uptime & tech profile
		'Veoozbot': {                 windowMs: 60 * 60 * 1000, max: 200 }, // News feed aggregator
		'Embedly': {                  windowMs: 60 * 60 * 1000, max: 200 }, // Embedding engine used by many apps
		'ShowyouBot': {               windowMs: 60 * 60 * 1000, max: 200 }, // Feed crawler for Showyou
		'rogerbot': {                 windowMs: 60 * 60 * 1000, max: 200 }, // SEO crawler (Moz legacy bot)
		'MetaInspector': {            windowMs: 60 * 60 * 1000, max: 200 }, // Node.js-based metadata parser
	},
};

const botConfigs = new Map([
	['defaultbot', rateLimitConfig.defaultBot],
	...Object.entries(rateLimitConfig.bots).map(([name, cfg]) => [name.toLowerCase(), cfg])
]);

//const botConfigs = new Map(Object.entries(rateLimitConfig.bots).map(([name, cfg]) => [name.toLowerCase(), cfg]));
const uaCache = new Map();

/** Determine rate limit config based on User-Agent 
 * @param {Object} req - Request object. */
const resolveRateLimitConfig = (req) => {
	const ua = (req.normalizedUA || req.get('User-Agent') || '').toLowerCase();
	if (uaCache.has(ua)) return uaCache.get(ua);
	if (botConfigs.has(ua)) return botConfigs.get(ua);
	if (shouldSkipSession(req)) return botConfigs.get('defaultbot');
	for (const [name, cfg] of botConfigs) {
		if (ua.includes(name)) {
			uaCache.set(ua, cfg);
			return cfg;
		}
	}
	const fallback = (ua.includes('bot') || ua.includes('spider')) ? rateLimitConfig.defaultBot : rateLimitConfig.defaultUser;
	uaCache.set(ua, fallback);
	return fallback;
};

/** Rate limiter to limit the number of requests from a single IP address.
 * @type {Object} */
const limiter = rateLimit({
	keyGenerator: req => req.ip,
	skip: req => {
		req.rateLimitConfig = resolveRateLimitConfig(req);
		return false; // Always enforce, just inject config
	},
	max: req => req.rateLimitConfig.max,
	windowMs: req => req.rateLimitConfig.windowMs,
	handler: (_req, res) => {
		res.status(429).json({
			success: false,
			message: 'Too many attempts',
			remainingAttempts: 0
		});
	},
	standardHeaders: true,
	legacyHeaders: false
});

/** Rate limiter to limit the number of requests from a single IP address.
 * - Window: 10 minutes
 * - Maximum requests: 500
 * - Message on exceeding rate limit: 'Too many requests from this IP, please try again later.'
 * @type {Object} */
const limiterAPI = rateLimit({
	windowMs: 10 * 60 * 1000,
	max: 50,
	message: 'Too many requests from this IP, please try again later.',
	keyGenerator: (req) => req.ip,
	standardHeaders: true,
	legacyHeaders: false
});

/** Enhanced input sanitizer for search-friendly contexts.
 * Preserves meaningful characters while mitigating malicious input risks.
 * @param {string} input - Input string to sanitize.
 * @returns {string} - Sanitized input string. */
const sanitizeInput = (input) => {
	if (typeof input !== 'string') throw new TypeError('Input must be a string.');
	return input
		.trim()
		.replace(/<script.*?>.*?<\/script>/gi, '') // Strip script tags
		.replace(/<(?:!--[\s\S]*?--|[^>]+)>/g, '') // Strip other HTML tags but not content
		.replace(/javascript:/gi, '')
		.replace(/vbscript:/gi, '')
		.replace(/eval\((.*?)\)/gi, '')
		.replace(/expression\((.*?)\)/gi, '')
		.replace(/on\w+=["'].*?["']/gi, '') // Remove inline handlers
		.replace(/style=["'].*?["']/gi, '')
		.replace(/[\u200B-\u200D\uFEFF]/g, '') // Remove invisible chars
		.replace(/[\x00-\x1F\x7F-\x9F]/g, '') // Control characters
		.replace(/[\\]/g, '') // Strip backslashes
		// Instead of stripping quotes, encode them for HTML contexts
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
};

/** Recursively sanitizes all string values in an object, except those listed in the whitelist.
 * Handles nested objects and arrays. This helps neutralize potentially dangerous input
 * such as HTML or script injections before further processing or rendering.
 * @param {Object} obj - The input object containing data to sanitize.
 * @param {string[]} whitelist - Array of property names to skip during sanitization.
 * @returns {Object} - A new object with sanitized string values (deep modified). */
const sanitizeRecursive = (input, whitelist = []) => {
	if (typeof input === 'string') return sanitizeInput(input);
	if (Array.isArray(input)) return input.map(item => sanitizeRecursive(item, whitelist));
	if (input && typeof input === 'object') {
		return Object.entries(input).reduce((acc, [key, val]) => {
			acc[key] = whitelist.includes(key) ? val : sanitizeRecursive(val, whitelist);
			return acc;
		}, {});
	}
	return input;
};

/** Sanitize all string properties in request body.
* @param {Object} req - Request object.
* @param {Object} res - Response object.
* @param {Function} next - Next function. */
function sanitizeInputs(req, res, next) {
	const safeKeys = ['htmlSnippet', 'trustedEmbed'];
	req.body = sanitizeRecursive(req.body || {}, safeKeys);
	req.query = sanitizeRecursive(req.query || {}, safeKeys);
	req.params = sanitizeRecursive(req.params || {}, safeKeys);
	next();
}


/** Express middleware to set session configuration based on host context.
 * Assigns a cookie domain and UUID if the request appears to originate from 'host'.
 * @param {object} req - Express request object
 * @param {object} res - Express response object
 * @param {function} next - Express next middleware callback */
function liveSessions(req, res, next) {
	const sess = req.session;
	req.uuid = req.session.uuid = sess?.uuid || QPRx2025.generateUUID();
	req.hasHostFlag = (req.params.host === 'host' || req.query.host === 'host' || typeof req.query.host !== 'undefined');
	if (req.hasHostFlag && sess && sess.cookie) req.session.cookie.domain = `.thebiblesquotes.com`;
	next();
};

// ─── Flag to ensure WebSocket setup occurs only once ───
let liveNamespaceInitialized = false;

/** Express middleware that initializes WebSocket on '/live' path or subdomain.
 * @param {Object} req - Express request object; checks for live route or subdomain
 * @param {Object} res - Express response object (unused)
 * @param {Function} next - Callback to continue middleware chain
 * @param {Function} setupWebSocket - Handler function to initialize Socket.IO logic
 * @param {Object} io - Primary Socket.IO server instance
 * @param {Object} ioHttps - Secondary HTTPS Socket.IO instance (optional usage)
 * @param {Function} sharedsession - Session share middleware between Socket.IO and HTTP
 * @param {Function} sessionMiddleware - Express session middleware for HTTP layer */
function liveTriggerMiddleware(setupWebSocket, io, sharedsession, sessionMiddleware) {
	return (req, res, next) => {
		if (!liveNamespaceInitialized && (req.originalUrl?.startsWith('/live') || req.subdomains?.includes('live'))) {
			setupWebSocket(io, sharedsession, sessionMiddleware);
			liveNamespaceInitialized = true;
		}
		next();
	};
}

/** Require a specific subdomain.
 * @param {string} subdomain - The required subdomain name to check for.
 * @returns {Function} - Returns an Express middleware function. */
function requireSubdomain(subdomain) {
	return (req, res, next) => {
		const trueOrFalse = (req.originalUrl?.startsWith('/directory') || req.originalUrl?.startsWith('/live') || req.subdomains?.includes('live'));
		if (subdomain == 'live' && trueOrFalse) return next();
		else return next('route');
	};
}

/** Skip subdomains.
 * @returns {Function} - Returns an Express middleware function. */
function skipSubDomain() {
	return function (req, res, next) {
		const subdomains = req.subdomains;
		const isSubdomain = subdomains && subdomains.some(subdomain => allowedSubDomains.includes(subdomain));
		if (isSubdomain) return next('route');
		else return next();
	};
}

/** Checks if the given value is a string of digits only.
 * @param {string} value - The input string to validate.
 * @returns {boolean} - Returns true if the value contains only digits, false otherwise. */
const isDigit = value => /^\d+$/.test(value);

/** Validate that the provided value is a valid alphanumeric string.
 * @param {string} str - The string to validate.
 * @returns {boolean} - True if valid, false otherwise. */
const validateAlphanumeric = (str) => /^[a-zA-Z0-9-_]+$/.test(str);

/** Validate that the provided value
 * @param {Object} src - The src object containing properties to validate.
 * @returns {boolean} - True if all validations pass, false otherwise. */
const validateSearch = (src) => /^[a-zA-Z0-9 ,;:$#-_]{3,35}$/.test(src);

/** Validate that the provided value
 * @param {Object} src - The src object containing properties to validate.
 * @returns {boolean} - True if all validations pass, false otherwise. */
const validateKeyword = (src) => /^[#$][a-zA-Z0-9 ,;:$#-_]+$/.test(src);

/** Validate that the provided value is a valid version string.
 * @param {string} src - The version string to validate.
 * @returns {boolean} - True if valid, false otherwise. */
const validateVersion = (src) => /^[a-zA-Z,%2C]+$/.test(src);

/** Validate that the provided value is a valid UUID or Socket ID.
 * @param {string} uuid - The UUID or Socket ID string to validate.
 * @returns {boolean} - True if valid, false otherwise. */
const validateUUID = (uuid) =>  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid) || /^[a-zA-Z0-9_-]{20,}$/i.test(uuid);

/** Validates if a given CSS value is supported for a property.
 * @param {string} property - Key or CSS property name from config (e.g. 'color', 'height')
 * @param {string} value - CSS value to be tested (e.g. '#fff', '10px', 'block')
 * @returns {boolean} - Returns true if the value matches expected type or allowed list */
const isValidCSSValue = (property, value) => {
	if (!(property in cssProperties)) return false;
	const rule = cssProperties[property];
	if (typeof rule === 'string') {
		switch (rule) {
			case 'color': return isColorValue(value);       // matches hex, RGB, or named color
			case 'length': return isLengthValue(value);     // pixel/em/rem/vw/vh/percent
			case 'number': return isNumber(value);          // decimal/floating point
			case 'integer': return isInteger(value);        // whole number
			default: return false;
		}
	}
	if (Array.isArray(rule)) return rule.includes(value);
	return false; // fallback for unexpected formats
};

/** CONFIG: CSS Property Registry
 * Maps shorthand or official CSS props to value type or enum list */
const cssProperties = {
	txt: 'color',               // alias for text color
	bg: 'color',                // alias for background color
	color: 'color',             // any valid color format
	backgroundColor: 'color',   // same as 'color'
	width: 'length',            // accepts unit-based length
	height: 'length',           // same as 'width'
	display: [                  // valid display options
		'block', 'inline', 'flex', 'grid', 'none', 'inline-block'
	],
	fontWeight: [               // font weight styles or numeric scale
		'normal', 'bold', 'bolder', 'lighter',
		'100', '200', '300', '400', '500', '600', '700', '800', '900'
	],
	position: [                 // positioning strategies
		'static', 'relative', 'absolute', 'fixed', 'sticky'
	],
	opacity: 'number',          // decimal 0–1
	zIndex: 'integer',          // stacking priority
	margin: 'length',           // unit-based spacing
	padding: 'length',          // unit-based spacing
	borderRadius: 'length',     // unit-based rounding
	visibility: [               // show/hide toggles
		'visible', 'hidden', 'collapse'
	],
	textAlign: [                // text alignment modes
		'left', 'right', 'center', 'justify', 'start', 'end'
	]
};

/** Checks if value is a valid hex color.
 * @param {string} v - e.g. '#fff' or '#ffffff'
 * @returns {boolean} */
const isHex = v => /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(v);

/** Checks if value matches 'rgb(r, g, b)' format.
 * @param {string} v - RGB style string
 * @returns {boolean} */
const isRGB = v => /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/.test(v);

/** Checks if value is a recognized HTML color name.
 * @param {string} v - e.g. 'red', 'aqua', 'navy'
 * @returns {boolean} */
const isNamedColor = v => htmlColors.includes(v.toLowerCase());

/** Checks if value is a valid CSS color format.
 * @param {string} v
 * @returns {boolean} */
const isColorValue = v => isHex(v) || isRGB(v) || isNamedColor(v);

/** Validates unit-based length values.
 * @param {string} v - e.g. '10px', '2em', '50%'
 * @returns {boolean} */
const isLengthValue = v => /^-?\d+(\.\d+)?(px|em|rem|vw|vh|%)$/.test(v);

/** Checks numeric (decimal) values.
 * @param {string} v
 * @returns {boolean} */
const isNumber = v => /^-?\d+(\.\d+)?$/.test(v);

/** Validates whole integer values.
 * @param {string} v
 * @returns {boolean} */
const isInteger = v => /^-?\d+$/.test(v);

/** Validates data object against a ruleset of single-arg validators.
 * @param {Object} data - Incoming payload with named properties
 * @param {Object} rules - Map of keys to validation functions (accepts one arg)
 * @returns {boolean} - Returns true only if all validations pass
 * Note: Does not return error names — just a boolean pass/fail */
const validateParams = (data, rules) => Object.entries(rules).every(([key, validator]) => (typeof validator === 'function') ? validator(data[key]) : false);

/** Extended validator allowing fallback to 2-arg format (property, value).
 * @param {Object} data - Incoming payload with named values
 * @param {Object} rules - Map of keys to validation functions, accepting 1 or 2 args
 * @returns {boolean} - Returns true only if every rule passes one of the formats
 * Fallback allows flexible validation depending on function arity */
const validateParamsCSS = (data, rules) =>
	Object.entries(rules).every(([key, validator]) => {
		const value = data[key];
		const basicValid = validator(value);                  // test single-arg first
		const backupValid = ((validator.length === 2)            // if validator supports 2 args
			? ((typeof validator === 'function') ? validator(data[key]) : false)                           // try fallback with property name
			: false);
		return basicValid || backupValid;                     // pass if either is valid
	});

/** Determines whether a session should be initialized.
 * @param {Object|undefined} stored - Existing session state; may be undefined if none
 * @param {Object} socket - Incoming socket data with hosting flag
 * @returns {boolean} - True if no stored session and socket is hosting */
function shouldInitializeSession(stored, socket) {
	return stored === undefined && socket.hosting; // no prior session; socket intends to host
}

/** Checks if current socket is host and has matching stored session UUID.
 * @param {Object} stored - Previously stored session with UUID
 * @param {Object} socket - Active socket, must match UUID and be hosting
 * @returns {boolean} - True if socket is hosting and UUID matches stored */
function isHostWithStoredResults(stored, socket) {
	return (stored?.uuid === socket?.uuid || stored?.hashed == socket?.hashed) && socket?.hosting;
}

/** Decides whether the session should be overwritten due to lack of UUID.
 * @param {Object} stored - Current session data (may lack UUID)
 * @param {Object} socket - Incoming socket, acting as host
 * @returns {boolean} - True if no UUID in stored session and socket is hosting */
function shouldOverwriteSession(stored, socket) {
	return !stored?.uuid && socket.hosting;
}
/** Middleware to enforce HTTPS by redirecting insecure traffic.
 * @param {*} req - Express request object
 * @param {*} res - Express response object
 * @param {*} next - Express next middleware function
 * @returns {void} */
function forwardTraffic(req, res, next) {
	if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
		return res.redirect(`https://${req.get('host')}${req.url}`);
	}
	next();
}

/** Apply middlewares to the Express app.
 * @param {Object} app - The Express app instance. */
const applyMiddlewares = (app, json, urlencoded) => {
	app.use(securityMiddleware);
	app.use(limiter);
	app.use(morgan('dev'));
	app.use(forwardTraffic);
	app.use(compression());
	app.use(xss());
	app.use(hpp());
	app.use(sanitizeInputs);
	app.use(helmet());
	app.set('trust proxy', 1);
	app.use(helmet.contentSecurityPolicy({
		contentSecurityPolicy: true,
		directives: {
			defaultSrc: ["'self'"],
			scriptSrc: ["'self'"],
			styleSrc: ["'self'", 'https:'],
			imgSrc: ["'self'", 'data:', 'https:'],
			connectSrc: ["'self'", 'wss:'],
			fontSrc: ["'self'", 'https:'],
			objectSrc: ["'none'"],
			mediaSrc: ["'self'"],
			frameSrc: ["'self'"]
		}
	}));
	app.set('subdomain offset', 2);
	app.use(json({ limit: '5mb' }));
	app.use(urlencoded({ limit: '5mb', extended: true }));
};

module.exports = {
	shouldInitializeSession,
	isHostWithStoredResults,
	shouldOverwriteSession,
	liveTriggerMiddleware,
	validateAlphanumeric,
	sessionMiddleware,
	validateParamsCSS,
	shouldSkipSession,
	requireSubdomain,
	secureMiddleware,
	applyMiddlewares,
	validateKeyword,
	validateVersion,
	isValidCSSValue,
	validateParams,
	csrfValidation,
	destroySession,
	forbiddenExts,
	sanitizeInput,
	validateSearch,
	skipSubDomain,
	validateUUID,
	liveSessions,
	csrfCreation,
	setupSession,
	headerData,
	limiterAPI,
	botSkipper,
	QPRx2025,
	isDigit
};

/**⠀___⠀⠀TBQ⠀Project⠀⠀⠀⠀           ⣴⠚⢳⣦⠀⠀⠀⠀⠀⠀⠀
 *⠀⠀‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾⠀  ⠀⠀       ⣼⣷⠾⠛⢻⣷⡄⠀⠀⠀⠀⠀⠀
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀      ⢰⣿⣇⣠⣤⣸⣿⣧⠀⠀⠀⠀⠀⠀
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⠀⠀⠀  ⠀⠀⠀⠀⢠⡿⠋⠁_ _⠈⠙⣿⣆⠀⠀⠀© 2025 BadNintendo⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀   ⠀⠀⠀⠀  ⠀⠀⠀ ⠀⢾⡆⠀        ⣸⡿⠀⠀‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀     ⠀ ⠀⢠⣿⣷⠀ ____  ⢸⣿⣿⡄⠀⠀⠀⠀
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⠀  ⠀⠀⠀⠀⣾⠿⢿⡇⣿KJV|⢰⡿⠿⣷⡄⠀⠀⠀⠀
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⠀  ⠀⠀⠀⠸⣿⣶⣾⠃⣿⣀⣀|⠘⣷⣶⣿⠇⠀⠀ 
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⠀⠀ ⠀ ⠀⠀⠀⠉⢹⣷⠀⠀⠀⠀⣾⡏⠉⠀⠀⠀⠀⠀
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⠀ ⠀ ⠀⠀⠀⠀⢸⣿⣧⣀⣀⣼⣿⡇⠀⠀⠀⠀⠀⠀
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⠀⠀  ⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀    ⠀⠀  ⠀⠀⠀⠀⠸⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀
 *⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ⠀⠀    ⠀ ⠀⠀⠀⠀⢻⣿⣿⣿⣿⣿⠇
 *⠀⠀⠀⠀⠀⠀⠀⠀			⠀⠀All rights⠀ ⠹⣿⣿⡿⠃ reserved */