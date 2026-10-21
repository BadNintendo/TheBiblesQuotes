/**  ██╗██╗                                                                 ██╗██╗
 *   ██║╚═╝  ████████╗ ██████    ██████╗UOTES  ██████╗ ██████╗ ███╗   ███╗  ╚═╝██║
 *   ██║     ╚══██╔══╝ ██╔═██╗I ██╔═══██╗     ██╔════╝██╔═══██╗████╗ ████║     ██║
 *   ██║        ██║H   █████╔╝B ██║   ██║     ██║     ██║   ██║██╔████╔██║     ██║
 *   ██║        ██║E   ██║ ██╗L ██║  █ █║     ██║     ██║   ██║██║╚██╔╝██║     ██║
 *   ██║        ██║    ██████║E ╚█████ ██╗ ██╗╚██████╗╚██████╔╝██║ ╚═╝ ██║     ██║
 *   ██║██╗     ╚═╝      ╚═══╝S  ╚═══════╝ ╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝  ██╗██║
 *   ╚═╝╚═╝                                                                 ╚═╝╚═╝
 * TheBiblesQuotes Project
 * © 2025 BadNintendo -  App Startup Application
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
 * 3. This notice must remain intact in all source distributions.
 */
require('dotenv').config();
const fs = require('fs');
const http = require('http');
const path = require('path');
const https = require('https');
const express = require('express');
const socketIo = require('socket.io');
const { json, urlencoded, static } = express;
const sharedsession = require('express-socket.io-session');
const { setupWebSocket } = require('./modules/sockets');
const { routes, defined } = require('./modules/routes');

const {
	liveTriggerMiddleware,
	sessionMiddleware,
	applyMiddlewares,
	secureMiddleware,
} = require('./modules/protection');

const HTTP_PORT = process.env.HTTP_PORT || 80;
const HTTPS_PORT = process.env.HTTPS_PORT || 443;

const app = express();

app.use(secureMiddleware(defined));
app.use(sessionMiddleware);

const httpsOptions = {
	key: fs.readFileSync('./server.key', 'utf8'),
	cert: fs.readFileSync('./server.crt', 'utf8')
	//key: fs.readFileSync('/home/ubuntu/ssl/privkey.pem'),
	//cert: fs.readFileSync('/home/ubuntu/ssl/fullchain.pem')

};

const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpsOptions, app);

httpServer.keepAliveTimeout = 0;
httpsServer.keepAliveTimeout = 0;

const io = socketIo(httpServer, {
	transports: ['websocket'],
	allowUpgrades: true,
	pingInterval: 5000,
	pingTimeout: 10000,
	cors: { origin: '*' },
});

const ioHttps = socketIo(httpsServer, {
	transports: ['websocket'],
	allowUpgrades: true,
	pingInterval: 5000,
	pingTimeout: 10000,
	cors: { origin: '*' }
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(static(path.join(__dirname, 'public')));

applyMiddlewares(app, json, urlencoded);

io.use(sharedsession(sessionMiddleware, { autoSave: true }));
ioHttps.use(sharedsession(sessionMiddleware, { autoSave: true }));

app.use(liveTriggerMiddleware(setupWebSocket, io, sharedsession, sessionMiddleware));
routes(app);

httpServer.listen(HTTP_PORT, '0.0.0.0', () => console.log(`\x1b[31mHTTP Server listening on port \x1b[36m${HTTP_PORT}\x1b[0m`));
httpsServer.listen(HTTPS_PORT, '::', () => console.log(`\x1b[31mHTTPS Server listening on port \x1b[36m${HTTPS_PORT}\x1b[0m`));

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
 *⠀⠀⠀⠀⠀⠀⠀⠀			⠀⠀All rights⠀ ⠹⣿⣿⡿⠃ reserved
 */