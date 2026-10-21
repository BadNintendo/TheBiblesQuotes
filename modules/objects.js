/**  ██╗██╗                                                                 ██╗██╗
 *   ██║╚═╝  ████████╗ ██████    ██████╗UOTES  ██████╗ ██████╗ ███╗   ███╗  ╚═╝██║
 *   ██║     ╚══██╔══╝ ██╔═██╗I ██╔═══██╗     ██╔════╝██╔═══██╗████╗ ████║     ██║
 *   ██║        ██║H   █████╔╝B ██║   ██║     ██║     ██║   ██║██╔████╔██║     ██║
 *   ██║        ██║E   ██║ ██╗L ██║  █ █║     ██║     ██║   ██║██║╚██╔╝██║     ██║
 *   ██║        ██║    ██████║E ╚█████ ██╗ ██╗╚██████╗╚██████╔╝██║ ╚═╝ ██║     ██║
 *   ██║██╗     ╚═╝      ╚═══╝S  ╚═══════╝ ╚═╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝  ██╗██║
 *   ╚═╝╚═╝                                                                 ╚═╝╚═╝
 * TheBiblesQuotes Project
 * © 2025 BadNintendo - OBJECTS Module
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

const dailyVerses = {
	// January
	"01-01": ["Genesis 1:1", "John 1:1"], // Beginning of creation
	"01-02": ["Psalm 23:1", "John 10:11"], // Trust in God's provision
	"01-03": ["John 3:16", "Romans 5:8"], // God's love for the world
	"01-04": ["Proverbs 3:5-6", "Isaiah 26:3"], // Guidance for the new year
	"01-05": ["Isaiah 40:31", "Psalm 27:14"], // Renewal of strength
	"01-06": ["Philippians 4:13", "2 Corinthians 12:9"], // Strength through Christ
	"01-07": ["Romans 8:28", "Genesis 50:20"], // God works all things for good
	"01-08": ["Matthew 5:16", "Philippians 2:15"], // Shine your light
	"01-09": ["Joshua 1:9", "Deuteronomy 31:6"], // Strength and courage
	"01-10": ["Psalm 46:1", "Nahum 1:7"], // God is our refuge
	"01-11": ["2 Corinthians 5:17", "Ephesians 4:24"], // New beginnings
	"01-12": ["Hebrews 11:1", "Romans 10:17"], // Faith in the unseen
	"01-13": ["Romans 12:2", "Ephesians 4:23"], // Renewal of the mind
	"01-14": ["Psalm 37:4", "Matthew 6:33"], // Delighting in the Lord
	"01-15": ["James 1:5", "Proverbs 2:6"], // Seeking wisdom
	"01-16": ["John 15:5", "Galatians 2:20"], // Remaining in Christ
	"01-17": ["1 Peter 5:7", "Philippians 4:6"], // Casting anxieties on God
	"01-18": ["Colossians 3:23", "1 Corinthians 10:31"], // Working for the Lord
	"01-19": ["Psalm 121:2", "Isaiah 41:13"], // Help comes from the Lord
	"01-20": ["Matthew 7:7", "Luke 11:9"], // Ask and receive
	"01-21": ["2 Timothy 1:7", "Romans 8:15"], // Spirit of power
	"01-22": ["Ephesians 2:10", "Titus 2:14"], // Created for good works
	"01-23": ["Psalm 19:14", "Colossians 4:6"], // Words and thoughts honoring God
	"01-24": ["Romans 15:13", "Hebrews 6:19"], // Abounding in hope
	"01-25": ["1 John 4:19", "John 13:34"], // Love because God first loved
	"01-26": ["Jeremiah 29:11", "Romans 8:28"], // Future and hope
	"01-27": ["Philippians 1:6", "Hebrews 12:2"], // God's continued work in us
	"01-28": ["Isaiah 41:10", "Deuteronomy 31:8"], // Do not fear
	"01-29": ["Luke 1:37", "Matthew 19:26"], // Nothing is impossible with God
	"01-30": ["Psalm 34:8", "1 Peter 2:3"], // Taste and see that the Lord is good
	"01-31": ["Romans 5:8", "Ephesians 2:4-5"], // God’s love while we were sinners

	// February
	"02-01": ["Proverbs 16:3", "Psalm 37:5"], // Commit plans to the Lord
	"02-02": ["Psalm 27:1", "Isaiah 60:19"], // God is our light and salvation
	"02-03": ["1 Corinthians 10:31", "Colossians 3:17"], // Do all for God’s glory
	"02-04": ["Matthew 6:33", "Luke 12:31"], // Seek God's kingdom first
	"02-05": ["Romans 10:9", "Acts 16:31"], // Confessing and believing
	"02-06": ["Philippians 4:6-7", "1 Peter 5:7"], // Anxiety and peace of God
	"02-07": ["James 4:8", "Hebrews 10:22"], // Draw near to God
	"02-08": ["Psalm 16:8", "Psalm 73:23"], // Keeping God ever before us
	"02-09": ["Matthew 11:28", "Isaiah 40:29"], // Rest for the weary
	"02-10": ["Isaiah 26:3", "Philippians 4:7"], // Peace in trusting God
	"02-11": ["Hebrews 4:12", "Jeremiah 23:29"], // Power of God's Word
	"02-12": ["Psalm 55:22", "1 Peter 5:7"], // Cast burdens on the Lord
	"02-13": ["2 Corinthians 12:9", "Isaiah 40:31"], // Strength in weakness
	"02-14": ["1 Corinthians 13:4-7", "Romans 12:10"], // Love on Valentine’s Day
	"02-15": ["Psalm 91:4", "Deuteronomy 33:27"], // Protection under His wings
	"02-16": ["John 8:12", "Psalm 119:105"], // Jesus is the light of the world
	"02-17": ["Romans 12:12", "1 Thessalonians 5:16"], // Joy, patience, and prayer
	"02-18": ["Ephesians 6:10", "Isaiah 41:10"], // Strength in the Lord
	"02-19": ["Psalm 119:105", "Proverbs 6:23"], // Lamp unto our feet
	"02-20": ["Colossians 3:15", "John 14:27"], // Let peace rule in hearts
	"02-21": ["Matthew 28:19-20", "Mark 16:15"], // Great Commission
	"02-22": ["Psalm 42:11", "Romans 15:13"], // Hope in God
	"02-23": ["Romans 14:8", "Galatians 2:20"], // Living for the Lord
	"02-24": ["Isaiah 43:2", "Psalm 23:4"], // Walking through trials
	"02-25": ["Philippians 2:3", "Micah 6:8"], // Humility over selfishness
	"02-26": ["1 Thessalonians 5:16-18", "Philippians 4:4"], // Rejoicing always
	"02-27": ["Romans 8:37", "1 John 5:4"], // More than conquerors
	"02-28": ["2 Peter 1:3", "Ephesians 1:3"], // Everything for life and godliness
	"02-29": ["Deuteronomy 31:6", "Joshua 1:9"], // Be strong and courageous

	// March
	"03-01": ["Psalm 91:1", "Psalm 32:7"], // Dwelling in God's shelter
	"03-02": ["Romans 8:28", "Genesis 50:20"], // God works all things for good
	"03-03": ["Hebrews 11:6", "James 2:26"], // Faith that pleases God
	"03-04": ["Colossians 3:2", "Philippians 4:8"], // Setting our minds on eternal things
	"03-05": ["Proverbs 4:23", "Luke 6:45"], // Guarding our hearts
	"03-06": ["Isaiah 40:31", "Psalm 27:14"], // Strength renewed by waiting on the Lord
	"03-07": ["John 14:27", "Philippians 4:7"], // Christ’s peace beyond worldly troubles
	"03-08": ["Ephesians 6:11", "2 Corinthians 10:4"], // Putting on the armor of God
	"03-09": ["1 Peter 5:8", "James 4:7"], // Staying vigilant and resisting the enemy
	"03-10": ["Psalm 37:7", "Lamentations 3:25"], // Resting patiently in the Lord
	"03-11": ["Matthew 6:34", "Philippians 4:6"], // Trusting God, not worrying about tomorrow
	"03-12": ["James 1:3", "Romans 5:3"], // Trials produce endurance
	"03-13": ["2 Corinthians 5:7", "Hebrews 11:1"], // Walking by faith, not sight
	"03-14": ["John 16:33", "1 John 5:4"], // Overcoming the world in Christ
	"03-15": ["Philippians 4:19", "Matthew 6:31-32"], // God provides for our needs
	"03-16": ["Romans 12:12", "1 Thessalonians 5:16-18"], // Rejoicing in hope, being patient in trials
	"03-17": ["Psalm 46:10", "Exodus 14:14"], // Being still before God
	"03-18": ["Matthew 5:9", "Romans 12:18"], // Blessed are the peacemakers
	"03-19": ["Hebrews 12:1", "Philippians 3:14"], // Running the race with endurance
	"03-20": ["Jeremiah 17:7-8", "Psalm 1:3"], // Trusting the Lord like a rooted tree
	"03-21": ["Romans 5:3-5", "James 1:12"], // Perseverance leads to hope
	"03-22": ["Colossians 1:11", "Isaiah 41:10"], // Strengthened for endurance and patience
	"03-23": ["John 10:10", "Galatians 2:20"], // Abundant life in Christ
	"03-24": ["Matthew 22:37-39", "1 Corinthians 13:13"], // The greatest commandments: love
	"03-25": ["Psalm 121:1-2", "Isaiah 40:29"], // Our help comes from the Lord
	"03-26": ["Ephesians 2:8-9", "Titus 3:5"], // Salvation by grace through faith
	"03-27": ["Proverbs 18:10", "Psalm 91:2"], // Safety in the Lord’s name
	"03-28": ["Psalm 139:23-24", "Jeremiah 17:10"], // Asking God to search our hearts
	"03-29": ["Romans 8:1", "John 3:18"], // No condemnation in Christ
	"03-30": ["2 Corinthians 3:17", "Galatians 5:1"], // Freedom in the Spirit
	"03-31": ["Isaiah 41:13", "Deuteronomy 31:6"], // God helps His people

	// April
	"04-01": ["Proverbs 1:7", "Psalm 111:10"], // Wisdom starts with fearing the Lord
	"04-02": ["John 12:46", "Isaiah 9:2"], // Jesus brings light to the world
	"04-03": ["Psalm 27:14", "Isaiah 40:31"], // Waiting on the Lord
	"04-04": ["James 4:10", "1 Peter 5:6"], // Humbling ourselves before God
	"04-05": ["1 Corinthians 15:58", "Galatians 6:9"], // Remaining steadfast in our faith
	"04-06": ["Hebrews 13:5", "Deuteronomy 31:6"], // God never leaves or forsakes us
	"04-07": ["Romans 14:8", "Philippians 1:21"], // Whether we live or die, we belong to the Lord
	"04-08": ["Psalm 119:9", "John 17:17"], // Keeping our way pure through God's word
	"04-09": ["John 11:25", "Romans 6:5"], // Jesus is the resurrection and the life
	"04-10": ["Matthew 28:6", "Luke 24:6"], // He is risen! (Easter theme)
	"04-11": ["Romans 6:4", "Colossians 2:12"], // Walking in new life in Christ
	"04-12": ["Psalm 100:2", "Colossians 3:23"], // Serving the Lord with gladness
	"04-13": ["Isaiah 53:5", "1 Peter 2:24"], // Jesus bore our sins for healing
	"04-14": ["Philippians 1:9-10", "1 Corinthians 13:2"], // Abounding in love and discernment
	"04-15": ["Psalm 34:4", "Nahum 1:7"], // Seeking the Lord and finding deliverance
	"04-16": ["Matthew 5:8", "Psalm 24:3-4"], // Blessed are the pure in heart
	"04-17": ["John 13:34", "1 John 4:7"], // Loving one another as Christ loves us
	"04-18": ["Ephesians 4:32", "Colossians 3:13"], // Forgiving just as Christ forgave us
	"04-19": ["Psalm 150:6", "Revelation 5:13"], // Let everything that has breath praise the Lord
	"04-20": ["Hebrews 10:24-25", "1 Thessalonians 5:11"], // Encouraging one another in faith
	"04-21": ["Romans 15:7", "Galatians 6:2"], // Accepting one another as Christ accepted us
	"04-22": ["Colossians 3:14", "1 Corinthians 13:13"], // Love binds everything together in harmony
	"04-23": ["2 Timothy 2:15", "Proverbs 4:7"], // Doing our best to present ourselves before God
	"04-24": ["Isaiah 26:4", "Psalm 125:1"], // Trusting in the Lord forever
	"04-25": ["Psalm 23:6", "Lamentations 3:22-23"], // Surely goodness and mercy will follow us
	"04-26": ["Matthew 7:24-25", "1 Corinthians 3:11"], // Building our lives on the solid foundation of Christ
	"04-27": ["John 3:30", "Galatians 2:20"], // He must increase, we must decrease
	"04-28": ["Romans 8:37", "1 John 5:4"], // We are more than conquerors in Christ
	"04-29": ["Psalm 62:5", "Isaiah 26:3"], // Finding rest and hope in God
	"04-30": ["1 Peter 3:15", "Colossians 4:6"], // Always being prepared to share our hope

	// May
	"05-01": ["Ecclesiastes 3:1", "Ecclesiastes 3:11"], // Everything in its season
	"05-02": ["Psalm 118:24", "Psalm 16:11"], // Rejoicing in today
	"05-03": ["Galatians 6:9", "2 Thessalonians 3:13"], // Perseverance in doing good
	"05-04": ["Joshua 24:15", "Deuteronomy 30:19"], // Choosing to serve the Lord
	"05-05": ["2 Corinthians 5:17", "Romans 6:4"], // New creation in Christ
	"05-06": ["Psalm 37:5", "Proverbs 3:6"], // Committing your way to the Lord
	"05-07": ["Proverbs 17:17", "John 15:13"], // A friend loves at all times
	"05-08": ["Ephesians 3:20", "Jeremiah 29:11"], // God does more than we imagine
	"05-09": ["Matthew 11:30", "1 John 5:3"], // Christ’s yoke is easy
	"05-10": ["Isaiah 43:1", "Isaiah 49:16"], // Called by name and redeemed
	"05-11": ["Romans 15:13", "Romans 5:5"], // Overflowing hope by the Spirit
	"05-12": ["John 14:6", "Acts 4:12"], // Jesus is the way, truth, life
	"05-13": ["Psalm 119:105", "2 Timothy 3:16"], // God's word guides our path
	"05-14": ["James 1:17", "Malachi 3:10"], // Every good gift is from God
	"05-15": ["1 Peter 4:8", "Colossians 3:14"], // Love covers a multitude of sins
	"05-16": ["Matthew 6:21", "Luke 12:34"], // Where your treasure is, your heart will be
	"05-17": ["Isaiah 26:3", "Philippians 4:7"], // Perfect peace in trust
	"05-18": ["Colossians 3:23", "1 Corinthians 10:31"], // Working for the Lord
	"05-19": ["Proverbs 3:5-6", "Psalm 37:7"], // Trusting God fully
	"05-20": ["Hebrews 10:23", "2 Corinthians 1:20"], // Holding fast to faith
	"05-21": ["Psalm 16:11", "Nehemiah 8:10"], // Joy in God's presence
	"05-22": ["Romans 12:10", "1 Corinthians 13:4-7"], // Devotion in love
	"05-23": ["1 John 4:16", "Romans 8:39"], // God is love
	"05-24": ["Isaiah 41:10", "Deuteronomy 31:6"], // Fear not, God is with you
	"05-25": ["Matthew 5:14", "Philippians 2:15"], // You are the light of the world
	"05-26": ["Psalm 23:4", "Isaiah 41:13"], // Comfort through the valley
	"05-27": ["Philippians 4:8", "Colossians 3:2"], // Focus on what is true, noble, pure
	"05-28": ["Romans 8:38-39", "John 10:28"], // Nothing separates us from God’s love
	"05-29": ["Psalm 46:1", "Nahum 1:7"], // God is our refuge and strength
	"05-30": ["1 Thessalonians 5:11", "Hebrews 10:24"], // Encourage and build up each other
	"05-31": ["2 Timothy 1:7", "Romans 8:15"], // Spirit of power, love, and self-control
 
	// June
	"06-01": ["Psalm 121:7-8", "Isaiah 41:10"], // God watches over us
	"06-02": ["Romans 5:3-5", "James 1:2-4"], // Suffering produces perseverance
	"06-03": ["Ephesians 6:10", "Joshua 1:9"], // Be strong in the Lord
	"06-04": ["John 15:7", "Psalm 37:4"], // Abiding in God
	"06-05": ["1 Corinthians 6:19-20", "Romans 12:1"], // Your body is a temple
	"06-06": ["Proverbs 16:9", "Jeremiah 29:11"], // The Lord directs our steps
	"06-07": ["Psalm 32:8", "Isaiah 30:21"], // God instructs and teaches us
	"06-08": ["Philippians 2:4", "Galatians 6:2"], // Looking out for others
	"06-09": ["Matthew 28:19-20", "Acts 1:8"], // The Great Commission
	"06-10": ["James 5:16", "1 Thessalonians 5:17"], // The power of prayer
	"06-11": ["Psalm 34:17-18", "2 Corinthians 1:3-4"], // God is near the brokenhearted
	"06-12": ["Romans 15:5", "Hebrews 10:24-25"], // Encouragement and unity
	"06-13": ["Isaiah 55:11", "Matthew 24:35"], // God's Word accomplishes His purpose
	"06-14": ["Hebrews 12:2", "Colossians 3:1-2"], // Fixing our eyes on Jesus
	"06-15": ["Psalm 9:10", "Nahum 1:7"], // Trusting in God's faithfulness
	"06-16": ["Matthew 19:26", "Luke 1:37"], // With God, all things are possible
	"06-17": ["Jeremiah 29:13", "Deuteronomy 4:29"], // Seeking God with all our heart
	"06-18": ["Romans 8:14", "Galatians 5:25"], // Led by the Spirit of God
	"06-19": ["Colossians 3:14", "1 Corinthians 13:13"], // Love binds everything in perfect unity
	"06-20": ["Psalm 51:10", "Ezekiel 36:26"], // A clean heart before God
	"06-21": ["Galatians 5:22-23", "John 15:5"], // The fruits of the Spirit
	"06-22": ["Ephesians 2:10", "Titus 2:14"], // Created for good works
	"06-23": ["1 John 4:18", "Romans 8:38-39"], // Perfect love casts out fear
	"06-24": ["Psalm 19:14", "Colossians 4:6"], // Words and thoughts pleasing to God
	"06-25": ["John 8:12", "Psalm 27:1"], // Jesus is the light of the world
	"06-26": ["Romans 12:2", "2 Corinthians 5:17"], // Transformed by renewing our minds
	"06-27": ["Philippians 1:6", "Hebrews 13:21"], // God completes what He starts
	"06-28": ["Isaiah 40:8", "Matthew 5:18"], // God's Word stands forever
	"06-29": ["Psalm 119:2", "Jeremiah 15:16"], // Blessed are those who seek God
	"06-30": ["2 Corinthians 12:9", "Philippians 4:13"], // Strength in our weakness

	// July
	"07-01": ["Psalm 100:2", "Psalm 95:2"], // Serve the Lord with gladness
	"07-02": ["Romans 8:31", "Psalm 118:6"], // If God is for us, who can be against us?
	"07-03": ["Matthew 5:16", "Philippians 2:15"], // Let your light shine
	"07-04": ["John 8:36", "Galatians 5:1"], // Freedom in Christ (Independence Day theme)
	"07-05": ["Colossians 3:12", "Ephesians 4:32"], // Clothe yourselves in compassion
	"07-06": ["Proverbs 3:5-6", "Isaiah 26:3"], // Trust in the Lord completely
	"07-07": ["Psalm 16:8", "Psalm 73:23"], // Keeping God always before us
	"07-08": ["Philippians 4:6-7", "John 14:27"], // Peace that transcends understanding
	"07-09": ["Isaiah 40:29", "2 Corinthians 12:9"], // Strength for the weary
	"07-10": ["Matthew 6:33", "Luke 12:31"], // Seek first the Kingdom of God
	"07-11": ["Romans 12:10", "1 Peter 3:8"], // Be devoted in love
	"07-12": ["James 1:12", "2 Timothy 4:8"], // Blessed are those who persevere
	"07-13": ["Psalm 119:11", "Joshua 1:8"], // Hide God's word in your heart
	"07-14": ["John 10:11", "Hebrews 13:20"], // Jesus, the Good Shepherd
	"07-15": ["1 Peter 5:7", "Psalm 55:22"], // Cast your anxieties on Him
	"07-16": ["Ephesians 5:8", "1 John 1:7"], // Walk as children of the light
	"07-17": ["Romans 15:4", "2 Timothy 3:16"], // Encouragement through Scripture
	"07-18": ["Psalm 91:4", "Deuteronomy 32:11"], // God's protection under His wings
	"07-19": ["Hebrews 11:1", "2 Corinthians 5:7"], // Faith in what we do not see
	"07-20": ["Matthew 7:7", "Jeremiah 29:13"], // Ask, seek, knock
	"07-21": ["Romans 10:17", "Hebrews 4:12"], // Faith comes by hearing the Word
	"07-22": ["John 15:5", "Galatians 2:20"], // Remaining in Christ
	"07-23": ["Isaiah 26:4", "Psalm 125:1"], // Trust in the Lord forever
	"07-24": ["Psalm 37:4", "Matthew 6:21"], // Delight in the Lord
	"07-25": ["Ephesians 6:10", "2 Timothy 2:1"], // Be strong in the Lord
	"07-26": ["Matthew 11:28", "Psalm 23:3"], // Rest for the weary
	"07-27": ["Psalm 46:1", "Nahum 1:7"], // God is our refuge and strength
	"07-28": ["Romans 8:38-39", "John 10:28"], // Nothing can separate us from God’s love
	"07-29": ["Philippians 1:6", "Hebrews 12:2"], // God completes what He starts
	"07-30": ["2 Corinthians 5:7", "Hebrews 11:6"], // Walk by faith, not by sight
	"07-31": ["John 3:30", "Galatians 6:14"], // He must increase, we must decrease

	// August
	"08-01": ["Psalm 118:6", "Hebrews 13:6"], // The Lord is with us, we won’t be afraid
	"08-02": ["Romans 12:2", "Ephesians 4:23"], // Be transformed by renewing your mind
	"08-03": ["1 Corinthians 15:58", "Galatians 6:9"], // Stay steadfast in faith
	"08-04": ["Hebrews 12:11", "Proverbs 3:11-12"], // Discipline leads to righteousness
	"08-05": ["Psalm 23:1", "John 10:11"], // The Lord is my shepherd
	"08-06": ["Ephesians 2:10", "Titus 3:8"], // Created for good works
	"08-07": ["John 15:13", "1 John 3:16"], // No greater love than laying down one's life
	"08-08": ["Isaiah 41:10", "Deuteronomy 31:6"], // Fear not, God strengthens you
	"08-09": ["Romans 5:8", "1 John 4:9"], // Christ's love while we were sinners
	"08-10": ["Matthew 5:9", "Hebrews 12:14"], // Blessed are the peacemakers
	"08-11": ["Colossians 3:15", "Philippians 4:7"], // Let God's peace rule in your heart
	"08-12": ["Psalm 46:10", "Exodus 14:14"], // Be still and know that He is God
	"08-13": ["Philippians 4:13", "2 Corinthians 12:9"], // Strength through Christ
	"08-14": ["James 4:8", "Psalm 73:28"], // Draw near to God
	"08-15": ["Psalm 121:1-2", "Isaiah 40:29"], // Our help comes from the Lord
	"08-16": ["John 16:33", "Romans 8:37"], // Jesus has overcome the world
	"08-17": ["2 Timothy 1:7", "Joshua 1:9"], // Spirit of power, love, and self-control
	"08-18": ["Psalm 19:14", "Philippians 4:8"], // Words and heart pleasing to God
	"08-19": ["Romans 8:28", "Genesis 50:20"], // God works all things for good
	"08-20": ["Matthew 7:24-25", "Luke 6:47-48"], // Build your life on Christ
	"08-21": ["Ephesians 6:12", "2 Corinthians 10:4"], // Our battle is spiritual
	"08-22": ["Proverbs 18:10", "Psalm 91:2"], // Strong tower in the Lord's name
	"08-23": ["Psalm 9:10", "Nahum 1:7"], // Trusting in God's faithfulness
	"08-24": ["Isaiah 55:11", "Matthew 24:35"], // God's Word accomplishes His purpose
	"08-25": ["Philippians 1:9-10", "1 Thessalonians 3:12"], // Abound in love and discernment
	"08-26": ["Romans 12:12", "James 1:2-3"], // Joy in hope, patience in trials
	"08-27": ["Psalm 34:8", "1 Peter 2:3"], // Taste and see that the Lord is good
	"08-28": ["Hebrews 13:5", "Deuteronomy 31:8"], // God will never leave or forsake us
	"08-29": ["John 14:27", "Isaiah 26:3"], // Peace beyond worldly troubles
	"08-30": ["Romans 14:8", "Philippians 1:21"], // Whether we live or die, we belong to the Lord
	"08-31": ["Psalm 150:6", "Revelation 5:13"], // Let everything that has breath praise the Lord

	// September
	"09-01": ["Psalm 27:1", "Isaiah 60:19"], // The Lord is my light and salvation
	"09-02": ["Romans 15:13", "1 Thessalonians 1:5"], // Overflowing hope through the Spirit
	"09-03": ["Philippians 4:8", "Colossians 3:2"], // Thinking on what is true and good
	"09-04": ["Isaiah 40:31", "Psalm 103:5"], // Strength renewed by waiting on the Lord
	"09-05": ["John 16:33", "1 John 5:4"], // Jesus has overcome the world
	"09-06": ["Psalm 46:10", "Exodus 14:14"], // Be still and know that He is God
	"09-07": ["Matthew 5:14", "John 8:12"], // You are the light of the world
	"09-08": ["Proverbs 18:10", "Psalm 91:2"], // Strong tower in the Lord's name
	"09-09": ["Hebrews 10:24-25", "1 Thessalonians 5:11"], // Encouraging one another in faith
	"09-10": ["Psalm 37:4", "John 15:7"], // Delight yourself in the Lord
	"09-11": ["2 Corinthians 1:3-4", "Psalm 34:18"], // Comfort in times of distress
	"09-12": ["Ephesians 3:20", "Jeremiah 29:11"], // God does immeasurably more than we imagine
	"09-13": ["Psalm 121:1-2", "Isaiah 41:13"], // Our help comes from the Lord
	"09-14": ["John 15:5", "Galatians 2:20"], // Remaining in Christ
	"09-15": ["Romans 8:38-39", "Ephesians 2:4-5"], // Nothing separates us from God’s love
	"09-16": ["Philippians 4:19", "Matthew 6:33"], // God supplies all our needs
	"09-17": ["Matthew 7:7", "Luke 11:9"], // Ask, seek, knock
	"09-18": ["Isaiah 41:10", "Deuteronomy 31:6"], // Fear not, God is with you
	"09-19": ["James 1:17", "Psalm 145:9"], // Every good gift is from God
	"09-20": ["Psalm 19:14", "Colossians 4:6"], // Words and thoughts pleasing to God
	"09-21": ["Romans 12:10", "John 13:34"], // Love one another with devotion
	"09-22": ["Matthew 6:21", "Luke 12:34"], // Where your treasure is, there your heart will be
	"09-23": ["Colossians 3:15", "Philippians 4:7"], // Let God’s peace rule in your heart
	"09-24": ["Psalm 23:4", "Isaiah 43:2"], // Comfort through life's valleys
	"09-25": ["John 10:11", "Hebrews 13:20"], // Jesus, the Good Shepherd
	"09-26": ["Philippians 1:6", "2 Timothy 1:12"], // God completes what He starts
	"09-27": ["Romans 14:8", "Galatians 2:20"], // Whether we live or die, we belong to the Lord
	"09-28": ["Isaiah 26:3", "John 14:27"], // Perfect peace through trust
	"09-29": ["Hebrews 13:5", "Deuteronomy 31:8"], // God will never leave or forsake us
	"09-30": ["Psalm 34:8", "Nahum 1:7"], // Taste and see that the Lord is good

	// October
	"10-01": ["Proverbs 3:5-6", "Isaiah 26:3"], // Trust in the Lord with all your heart
	"10-02": ["Psalm 100:4", "Colossians 3:16"], // Enter His gates with thanksgiving
	"10-03": ["Philippians 2:3", "James 4:10"], // Humility over selfishness
	"10-04": ["Matthew 11:28", "Psalm 55:22"], // Rest for the weary
	"10-05": ["Hebrews 11:6", "James 1:6"], // Faith that pleases God
	"10-06": ["Romans 8:28", "Genesis 50:20"], // God works all things for good
	"10-07": ["Psalm 121:7-8", "Deuteronomy 31:8"], // God watches over us always
	"10-08": ["Ephesians 6:12", "2 Corinthians 10:4"], // Our battle is spiritual
	"10-09": ["John 14:27", "Philippians 4:7"], // Christ’s peace beyond worldly troubles
	"10-10": ["2 Corinthians 12:9", "Isaiah 40:29"], // Strength in our weakness
	"10-11": ["Isaiah 55:11", "Matthew 24:35"], // God's word accomplishes His purpose
	"10-12": ["Romans 5:8", "John 15:13"], // Christ's love for us while we were sinners
	"10-13": ["Matthew 5:9", "Romans 12:18"], // Blessed are the peacemakers
	"10-14": ["Colossians 3:14", "1 Corinthians 13:13"], // Love binds everything in perfect harmony
	"10-15": ["Psalm 46:1", "Nahum 1:7"], // God is our refuge and strength
	"10-16": ["John 8:12", "Psalm 27:1"], // Jesus is the light of the world
	"10-17": ["Philippians 1:9-10", "1 Thessalonians 3:12"], // Abound in love and discernment
	"10-18": ["Romans 12:2", "Ephesians 4:23"], // Transformed by renewing our minds
	"10-19": ["Isaiah 41:13", "Psalm 37:24"], // God helps His people
	"10-20": ["Psalm 19:1", "Romans 1:20"], // The heavens declare God's glory
	"10-21": ["Galatians 5:22-23", "John 15:5"], // The fruits of the Spirit
	"10-22": ["Ephesians 2:10", "Titus 2:14"], // Created for good works
	"10-23": ["1 John 4:18", "Romans 8:15"], // Perfect love casts out fear
	"10-24": ["Psalm 119:2", "Jeremiah 29:13"], // Blessed are those who seek God
	"10-25": ["John 3:30", "Galatians 2:20"], // He must increase, we must decrease
	"10-26": ["Romans 8:37", "1 John 5:4"], // We are more than conquerors in Christ
	"10-27": ["Philippians 4:13", "Isaiah 40:31"], // Strength through Christ
	"10-28": ["Psalm 62:5", "Matthew 11:29"], // Finding rest and hope in God
	"10-29": ["Isaiah 40:8", "Matthew 24:35"], // God's Word stands forever
	"10-30": ["Matthew 7:24-25", "1 Corinthians 3:11"], // Build your life on the solid foundation of Christ
	"10-31": ["Psalm 150:6", "Revelation 5:13"], // Let everything that has breath praise the Lord

	// November
	"11-01": ["Colossians 3:17", "1 Corinthians 10:31"], // Do everything in Jesus’ name
	"11-02": ["Romans 8:28", "Genesis 50:20"], // God works all things for good
	"11-03": ["Psalm 95:2", "Psalm 100:4"], // Come before God with thanksgiving
	"11-04": ["Ephesians 6:10", "2 Timothy 2:1"], // Be strong in the Lord
	"11-05": ["Matthew 5:16", "Philippians 2:15"], // Let your light shine before others
	"11-06": ["Isaiah 40:31", "Psalm 27:14"], // Strength through waiting on the Lord
	"11-07": ["Philippians 4:19", "Matthew 6:33"], // God supplies all our needs
	"11-08": ["Psalm 118:6", "Hebrews 13:6"], // The Lord is with us, we won’t be afraid
	"11-09": ["John 15:7", "1 John 5:14"], // Abiding in God brings answered prayers
	"11-10": ["Romans 12:12", "James 1:12"], // Joy in hope, patience in trials
	"11-11": ["Joshua 1:9", "Deuteronomy 31:6"], // Be strong and courageous
	"11-12": ["Psalm 23:4", "Isaiah 41:10"], // Comfort through life’s valleys
	"11-13": ["Hebrews 10:23", "Romans 4:20"], // Holding fast to faith
	"11-14": ["Matthew 6:21", "Luke 12:34"], // Where your treasure is, your heart will be
	"11-15": ["Psalm 100:4", "Psalm 95:6"], // Enter His gates with thanksgiving
	"11-16": ["John 10:11", "Hebrews 13:20"], // Jesus, the Good Shepherd
	"11-17": ["Philippians 1:9-10", "Colossians 1:9"], // Love and discernment
	"11-18": ["Romans 14:8", "2 Corinthians 5:15"], // Whether we live or die, we belong to the Lord
	"11-19": ["Isaiah 41:10", "Deuteronomy 31:8"], // Fear not, God strengthens you
	"11-20": ["Psalm 121:1-2", "Psalm 46:1"], // Our help comes from the Lord
	"11-21": ["Romans 15:13", "2 Thessalonians 3:16"], // Overflowing hope through the Spirit
	"11-22": ["Colossians 3:15", "Philippians 4:7"], // Let God's peace rule in your heart
	"11-23": ["Psalm 37:4", "Psalm 16:11"], // Delight in the Lord
	"11-24": ["1 Thessalonians 5:18", "Ephesians 5:20"], // Give thanks in all circumstances
	"11-25": ["James 4:8", "Hebrews 10:22"], // Draw near to God
	"11-26": ["Matthew 11:28", "Psalm 55:22"], // Rest for the weary
	"11-27": ["Philippians 4:6-7", "John 14:27"], // Peace that surpasses understanding
	"11-28": ["Psalm 34:8", "Psalm 119:103"], // Taste and see that the Lord is good
	"11-29": ["Hebrews 13:5", "Deuteronomy 31:6"], // God will never leave or forsake us
	"11-30": ["Psalm 46:1", "Nahum 1:7"], // God is our refuge and strength

	// December
	"12-01": ["John 8:12", "Matthew 5:14"], // Jesus is the light of the world; We are the light of the world
	"12-02": ["Isaiah 9:6", "Micah 5:2"], // Prophecy of Jesus' birth; Bethlehem prophecy
	"12-03": ["Luke 2:11", "Matthew 1:23"], // Christ the Savior is born; Emmanuel, God with us
	"12-04": ["Romans 5:8", "1 John 4:9"], // God’s love while we were sinners; God sent His Son
	"12-05": ["John 3:16", "Romans 8:32"], // God's love for the world; God did not spare His own Son
	"12-06": ["Philippians 4:4", "Psalm 118:24"], // Rejoice in the Lord always; This is the day the Lord has made
	"12-07": ["2 Corinthians 9:15", "James 1:17"], // Thanks be to God for His gift; Every good and perfect gift is from above
	"12-08": ["Matthew 1:21", "Acts 4:12"], // Jesus saves us from our sins; Salvation is found in no one else
	"12-09": ["Psalm 100:2", "Colossians 3:23"], // Serve the Lord with gladness; Work heartily for the Lord
	"12-10": ["Isaiah 7:14", "Luke 1:35"], // Virgin birth prophecy; The Holy Spirit will come upon Mary
	"12-11": ["Romans 15:13", "John 16:33"], // Joy, peace, and hope in Christ; Jesus has overcome the world
	"12-12": ["Luke 1:37", "Jeremiah 32:27"], // Nothing is impossible with God; God is the Lord of all flesh
	"12-13": ["Psalm 119:105", "2 Timothy 3:16"], // God's Word is our guiding light; All Scripture is God-breathed
	"12-14": ["Galatians 4:4-5", "John 1:12"], // God sent His Son to redeem us; Those who receive Him become children of God
	"12-15": ["Hebrews 13:8", "Revelation 1:8"], // Jesus is the same yesterday, today, forever; Alpha and Omega
	"12-16": ["Matthew 6:33", "Psalm 37:4"], // Seek first the Kingdom of God; Delight in the Lord
	"12-17": ["Romans 12:10", "John 13:34"], // Love one another with devotion; A new commandment to love one another
	"12-18": ["John 14:27", "Philippians 4:7"], // Christ’s peace beyond worldly troubles; Peace that surpasses understanding
	"12-19": ["Psalm 23:1", "John 10:11"], // The Lord is my shepherd; Jesus is the Good Shepherd
	"12-20": ["Colossians 3:17", "1 Corinthians 10:31"], // Do all in Jesus’ name; Do everything for the glory of God
	"12-21": ["Isaiah 40:29", "2 Corinthians 12:9"], // Strength for the weary; God's grace is sufficient
	"12-22": ["Psalm 46:10", "Exodus 14:14"], // Be still and know He is God; The Lord will fight for you
	"12-23": ["John 1:14", "Philippians 2:7"], // The Word became flesh; Jesus took the form of a servant
	"12-24": ["Luke 2:10", "Isaiah 52:7"], // Good news of great joy; How beautiful are the feet of those who bring good news
	"12-25": ["Luke 2:11", "John 3:16"], // Christmas – Christ the Savior is born!; God's love for the world
	"12-26": ["Matthew 2:11", "Psalm 95:6"], // Worship the newborn King; Come, let us worship and bow down
	"12-27": ["Isaiah 9:6", "Luke 1:32"], // Jesus: Wonderful Counselor, Prince of Peace; Jesus will reign on David’s throne
	"12-28": ["John 3:30", "Philippians 3:8"], // He must increase, we must decrease; Counting all things as loss for Christ
	"12-29": ["Romans 8:37", "1 John 5:4"], // More than conquerors in Christ; Victory through faith
	"12-30": ["Psalm 119:2", "Matthew 5:6"], // Blessed are those who seek God; Blessed are those who hunger for righteousness
	"12-31": ["2 Corinthians 5:17", "Revelation 21:5"], // A new creation for the new year!; Behold, I make all things new
};


const wordReplacements = [
	{ KJV: "Thee", NKJV: "You", "2025": "You" },
	{ KJV: "Thou", NKJV: "You", "2025": "Thou" },
	{ KJV: "Thy", NKJV: "Your", "2025": "Thy" },
	{ KJV: "Thine", NKJV: "Yours", "2025": "Yours" },
	{ KJV: "Suffer", NKJV: "Permit", "2025": "Pain" },
	{ KJV: "Wist", NKJV: "Knew", "2025": "Known" },
	{ KJV: "Begat", NKJV: "Was the father of", "2025": "Begat" },
	{ KJV: "Let", NKJV: "Prevent", "2025": "Let" },
	{ KJV: "Draught", NKJV: "Draft", "2025": "Draft" },
	{ KJV: "Diverse", NKJV: "Various", "2025": "Diverse" },
	{ KJV: "Peradventure", NKJV: "Perhaps", "2025": "Maybe" },
	{ KJV: "Concupiscence", NKJV: "Lust", "2025": "Concupiscence" },
	{ KJV: "Quickened", NKJV: "Made alive", "2025": "Quickened" },
	{ KJV: "Verily", NKJV: "Truly", "2025": "Verily" },
	{ KJV: "Hath", NKJV: "Has", "2025": "Has" },
	{ KJV: "Withal", NKJV: "Besides", "2025": "Besides" },
	{ KJV: "Oft", NKJV: "Often", "2025": "Often" },
	{ KJV: "Eschew", NKJV: "Avoid", "2025": "Eschew" },
	{ KJV: "Froward", NKJV: "Perverse", "2025": "Froward" },
	{ KJV: "Churl", NKJV: "Rude person", "2025": "Churl" },
	{ KJV: "Similitude", NKJV: "Likeness", "2025": "Likeness" },
	{ KJV: "Smite", NKJV: "Strike", "2025": "Smite" },
	{ KJV: "Succour", NKJV: "Help", "2025": "Succour" },
	{ KJV: "Gainsay", NKJV: "Contradict", "2025": "Gainsay" },
	{ KJV: "Betimes", NKJV: "Early", "2025": "Betimes" },
	{ KJV: "Trode", NKJV: "Trod", "2025": "Trode" },
	{ KJV: "Broided", NKJV: "Braided", "2025": "Broided" },
	{ KJV: "Prating", NKJV: "Chattering", "2025": "Prating" },
	{ KJV: "Wantonness", NKJV: "Lustful indulgence", "2025": "Wantonness" }
];


const htmlColorswCaps = [
	"AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond",
	"Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue",
	"Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki",
	"DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue",
	"DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DodgerBlue", "FireBrick",
	"FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Green",
	"GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush",
	"LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray",
	"LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue",
	"LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue",
	"MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise",
	"MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace",
	"Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise",
	"PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown",
	"RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue",
	"SlateBlue", "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise",
	"Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
];

const htmlColors = [
	"aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond",
	"blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue",
	"cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki",
	"darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue",
	"darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick",
	"floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green",
	"greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush",
	"lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray",
	"lightgreen", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue",
	"lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue",
	"mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise",
	"mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace",
	"olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise",
	"palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown",
	"royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue",
	"slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise",
	"violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"
];

/* This a an randomly select a verse according to day of the year Array with Objects */
const alternativeVerses = {
	"January": {
		1: ["Genesis 1:1", "Psalm 1:1"],
		2: ["Proverbs 2:6", "Romans 2:7"],
		3: ["John 3:16", "Psalm 3:3"],
		4: ["Matthew 4:4", "Exodus 4:12"],
		5: ["James 5:16", "Psalm 5:3"],
		6: ["Isaiah 6:8", "Hebrews 6:19"],
		7: ["Joshua 7:13", "Mark 7:7"],
		8: ["Philippians 1:6", "Ecclesiastes 8:12"],
		9: ["Colossians 3:23", "Luke 9:24"],
		10: ["Psalm 10:17", "Matthew 10:32"],
		11: ["2 Corinthians 11:14", "John 11:25"],
		12: ["Hebrews 12:2", "Romans 12:21"],
		13: ["Isaiah 40:31", "James 1:12"],
		14: ["Exodus 14:14", "Hebrews 13:6"],
		15: ["1 John 4:18", "Psalm 15:2"],
		16: ["Matthew 16:24", "Luke 16:10"],
		17: ["Romans 8:28", "Proverbs 17:22"],
		18: ["Ephesians 2:8", "Philippians 4:13"],
		19: ["Colossians 3:17", "1 Peter 1:3"],
		20: ["Matthew 20:16", "John 20:21"],
		21: ["Proverbs 21:31", "Hebrews 11:1"],
		22: ["Psalm 23:1", "Luke 23:34"],
		23: ["1 Corinthians 13:4", "Romans 13:14"],
		24: ["John 14:6", "Psalm 24:1"],
		25: ["Isaiah 41:10", "Matthew 25:21"],
		26: ["Hebrews 13:5", "Luke 26:11"],
		27: ["Romans 8:38-39", "Psalm 27:1"],
		28: ["Matthew 28:19", "Deuteronomy 31:6"],
		29: ["Psalm 29:11", "1 Corinthians 10:13"],
		30: ["Romans 5:8", "Philippians 4:6"],
		31: ["Matthew 6:33", "John 3:30"]
	},
	
	"February": {
		1: ["Romans 1:20", "Psalm 1:6"],
		2: ["Genesis 2:7", "Matthew 2:11"],
		3: ["Proverbs 3:5", "John 3:3"],
		4: ["James 4:8", "Psalm 4:4"],
		5: ["1 John 5:12", "Philippians 5:9"],
		6: ["Matthew 6:25", "Isaiah 6:3"],
		7: ["Psalm 7:9", "Luke 7:47"],
		8: ["Hebrews 8:12", "Romans 8:31"],
		9: ["Proverbs 9:10", "John 9:25"],
		10: ["Psalm 10:4", "Matthew 10:39"],
		11: ["Hebrews 11:1", "1 Corinthians 11:24"],
		12: ["Romans 12:12", "John 12:46"],
		13: ["1 John 4:8", "Psalm 13:6"],
		14: ["John 14:15", "Exodus 14:14"],
		15: ["Luke 15:10", "Matthew 15:8"],
		16: ["Psalm 16:11", "Romans 16:27"],
		17: ["Proverbs 17:22", "Ephesians 2:10"],
		18: ["James 1:19", "Matthew 18:20"],
		19: ["John 19:30", "Philippians 4:19"],
		20: ["Romans 10:17", "Matthew 20:26"],
		21: ["Proverbs 21:21", "Hebrews 13:1"],
		22: ["Psalm 22:3", "John 22:42"],
		23: ["Galatians 5:22", "Romans 23:19"],
		24: ["Matthew 24:35", "1 Corinthians 24:6"],
		25: ["John 25:10", "Hebrews 25:2"],
		26: ["Romans 8:26", "Psalm 26:2"],
		27: ["Philippians 4:13", "Matthew 27:50"],
		28: ["Psalm 28:7", "Romans 28:16"]
	},

	"March": {
		1: ["Genesis 1:27", "Psalm 1:6"],
		2: ["Exodus 2:24", "Matthew 2:11"],
		3: ["Proverbs 3:6", "John 3:17"],
		4: ["Romans 4:7", "Psalm 4:8"],
		5: ["Hebrews 5:9", "Isaiah 5:20"],
		6: ["Joshua 6:16", "Mark 6:31"],
		7: ["Luke 7:50", "Proverbs 7:2"],
		8: ["Romans 8:28", "Psalm 8:1"],
		9: ["Matthew 9:13", "Ecclesiastes 9:10"],
		10: ["John 10:10", "2 Samuel 10:12"],
		11: ["Hebrews 11:6", "Deuteronomy 11:13"],
		12: ["Romans 12:12", "Luke 12:31"],
		13: ["1 Corinthians 13:13", "Psalm 13:6"],
		14: ["John 14:27", "James 1:12"],
		15: ["Matthew 15:8", "Luke 15:10"],
		16: ["Proverbs 16:3", "Psalm 16:11"],
		17: ["Romans 17:20", "Philippians 4:19"],
		18: ["Matthew 18:20", "Ephesians 2:10"],
		19: ["John 19:30", "Isaiah 41:10"],
		20: ["Hebrews 10:23", "Matthew 20:16"],
		21: ["Proverbs 21:21", "Hebrews 11:1"],
		22: ["Psalm 22:3", "Luke 22:42"],
		23: ["Galatians 5:22", "Romans 23:19"],
		24: ["Matthew 24:35", "1 Corinthians 24:6"],
		25: ["John 25:10", "Hebrews 25:2"],
		26: ["Romans 8:26", "Psalm 26:2"],
		27: ["Philippians 4:13", "Matthew 27:50"],
		28: ["Psalm 28:7", "Romans 28:16"],
		29: ["Matthew 29:11", "Ecclesiastes 29:15"],
		30: ["Romans 30:9", "Psalm 30:5"],
		31: ["John 3:30", "Matthew 6:33"]
	},
	
	"April": {
		1: ["John 1:1", "Psalm 1:2"],
		2: ["Proverbs 2:7", "Romans 2:10"],
		3: ["Matthew 3:17", "Psalm 3:4"],
		4: ["Exodus 4:14", "James 4:10"],
		5: ["1 John 5:3", "Philippians 5:11"],
		6: ["Luke 6:38", "Psalm 6:9"],
		7: ["Hebrews 7:25", "Proverbs 7:1"],
		8: ["Romans 8:28", "Matthew 8:17"],
		9: ["John 9:31", "Psalm 9:9"],
		10: ["James 1:5", "John 10:27"],
		11: ["1 Corinthians 11:24", "Romans 11:36"],
		12: ["Hebrews 12:2", "Psalm 12:6"],
		13: ["John 13:35", "Philippians 4:6"],
		14: ["Matthew 14:31", "Psalm 14:1"],
		15: ["Proverbs 15:1", "Luke 15:10"],
		16: ["Romans 16:27", "Matthew 16:24"],
		17: ["John 17:3", "Hebrews 17:6"],
		18: ["1 John 4:18", "Psalm 18:2"],
		19: ["Romans 8:19", "Philippians 4:8"],
		20: ["Matthew 20:28", "Luke 20:38"],
		21: ["Proverbs 21:30", "Hebrews 21:5"],
		22: ["Psalm 22:19", "John 22:40"],
		23: ["Galatians 5:23", "Romans 23:8"],
		24: ["Matthew 24:42", "1 Corinthians 24:5"],
		25: ["John 25:10", "Hebrews 25:3"],
		26: ["Romans 8:26", "Psalm 26:7"],
		27: ["Philippians 4:13", "Matthew 27:2"],
		28: ["Psalm 28:7", "Romans 28:14"],
		29: ["Matthew 29:11", "Ecclesiastes 29:6"],
		30: ["Romans 30:9", "Psalm 30:11"]
	},

	"May": {
		1: ["Psalm 1:3", "Genesis 1:31"],
		2: ["Matthew 2:20", "Romans 2:6"],
		3: ["Proverbs 3:7", "John 3:15"],
		4: ["James 4:6", "Psalm 4:5"],
		5: ["Hebrews 5:14", "Isaiah 5:23"],
		6: ["Luke 6:38", "Psalm 6:8"],
		7: ["Romans 7:21", "Ecclesiastes 7:9"],
		8: ["John 8:12", "Proverbs 8:17"],
		9: ["Philippians 4:9", "Psalm 9:1"],
		10: ["Matthew 10:32", "John 10:27"],
		11: ["Hebrews 11:6", "Psalm 11:7"],
		12: ["Romans 12:2", "Colossians 3:23"],
		13: ["John 13:34", "1 Corinthians 13:7"],
		14: ["Matthew 14:31", "Psalm 14:2"],
		15: ["Proverbs 15:1", "Luke 15:10"],
		16: ["John 16:33", "Romans 16:20"],
		17: ["Philippians 4:13", "Psalm 17:6"],
		18: ["Ephesians 2:8", "James 1:19"],
		19: ["Isaiah 40:31", "Proverbs 19:11"],
		20: ["Matthew 20:28", "John 20:21"],
		21: ["Hebrews 10:23", "Psalm 21:7"],
		22: ["Romans 8:22", "Philippians 2:14"],
		23: ["Galatians 5:22", "John 5:24"],
		24: ["Matthew 24:35", "Isaiah 24:14"],
		25: ["Psalm 25:4", "Romans 8:25"],
		26: ["Hebrews 13:5", "Luke 26:11"],
		27: ["John 14:6", "Psalm 27:1"],
		28: ["Deuteronomy 31:6", "Matthew 28:19"],
		29: ["Psalm 29:11", "1 Corinthians 10:13"],
		30: ["Romans 5:8", "Philippians 4:6"],
		31: ["Matthew 6:33", "John 3:30"]
	},

	"June": {
		1: ["Genesis 1:29", "Psalm 1:5"],
		2: ["Romans 2:13", "Matthew 2:9"],
		3: ["Proverbs 3:9", "John 3:8"],
		4: ["James 4:12", "Psalm 4:3"],
		5: ["1 John 5:19", "Philippians 5:4"],
		6: ["Matthew 6:25", "Isaiah 6:3"],
		7: ["Psalm 7:9", "Luke 7:47"],
		8: ["Hebrews 8:12", "Romans 8:31"],
		9: ["Proverbs 9:10", "John 9:25"],
		10: ["Psalm 10:4", "Matthew 10:39"],
		11: ["Hebrews 11:1", "1 Corinthians 11:24"],
		12: ["Romans 12:12", "John 12:46"],
		13: ["1 John 4:8", "Psalm 13:6"],
		14: ["John 14:15", "Exodus 14:14"],
		15: ["Luke 15:10", "Matthew 15:8"],
		16: ["Psalm 16:11", "Romans 16:27"],
		17: ["Proverbs 17:22", "Ephesians 2:10"],
		18: ["James 1:19", "Matthew 18:20"],
		19: ["John 19:30", "Philippians 4:19"],
		20: ["Romans 10:17", "Matthew 20:26"],
		21: ["Proverbs 21:21", "Hebrews 13:1"],
		22: ["Psalm 22:3", "John 22:42"],
		23: ["Galatians 5:22", "Romans 23:19"],
		24: ["Matthew 24:35", "1 Corinthians 24:6"],
		25: ["John 25:10", "Hebrews 25:2"],
		26: ["Romans 8:26", "Psalm 26:2"],
		27: ["Philippians 4:13", "Matthew 27:50"],
		28: ["Psalm 28:7", "Romans 28:16"],
		29: ["Matthew 29:11", "Ecclesiastes 29:15"],
		30: ["Romans 30:9", "Psalm 30:5"]
	},

	"July": {
		1: ["Psalm 1:4", "Genesis 1:11"],
		2: ["Matthew 2:1", "Romans 2:4"],
		3: ["Proverbs 3:10", "John 3:5"],
		4: ["Exodus 4:3", "James 4:4"],
		5: ["1 John 5:18", "Philippians 5:7"],
		6: ["Joshua 6:16", "Mark 6:34"],
		7: ["Luke 7:50", "Proverbs 7:3"],
		8: ["Romans 8:28", "Psalm 8:5"],
		9: ["Matthew 9:13", "Ecclesiastes 9:11"],
		10: ["John 10:10", "2 Samuel 10:12"],
		11: ["Hebrews 11:6", "Deuteronomy 11:13"],
		12: ["Romans 12:12", "Luke 12:31"],
		13: ["1 Corinthians 13:13", "Psalm 13:6"],
		14: ["John 14:27", "James 1:12"],
		15: ["Matthew 15:8", "Luke 15:10"],
		16: ["Proverbs 16:3", "Psalm 16:11"],
		17: ["Romans 17:20", "Philippians 4:19"],
		18: ["Matthew 18:20", "Ephesians 2:10"],
		19: ["John 19:30", "Isaiah 41:10"],
		20: ["Hebrews 10:23", "Matthew 20:16"],
		21: ["Proverbs 21:21", "Hebrews 11:1"],
		22: ["Psalm 22:3", "Luke 22:42"],
		23: ["Galatians 5:22", "Romans 23:19"],
		24: ["Matthew 24:35", "1 Corinthians 24:6"],
		25: ["John 25:10", "Hebrews 25:2"],
		26: ["Romans 8:26", "Psalm 26:2"],
		27: ["Philippians 4:13", "Matthew 27:50"],
		28: ["Psalm 28:7", "Romans 28:16"],
		29: ["Matthew 29:11", "Ecclesiastes 29:15"],
		30: ["Romans 30:9", "Psalm 30:5"],
		31: ["John 3:30", "Matthew 6:33"]
	},

	"August": {
		1: ["Genesis 1:9", "Psalm 1:3"],
		2: ["Romans 2:11", "Matthew 2:5"],
		3: ["Proverbs 3:11", "John 3:6"],
		4: ["James 4:7", "Psalm 4:6"],
		5: ["1 John 5:16", "Philippians 5:13"],
		6: ["Luke 6:38", "Psalm 6:9"],
		7: ["Hebrews 7:25", "Proverbs 7:1"],
		8: ["Romans 8:28", "Matthew 8:17"],
		9: ["John 9:31", "Psalm 9:9"],
		10: ["James 1:5", "John 10:27"],
		11: ["1 Corinthians 11:24", "Romans 11:36"],
		12: ["Hebrews 12:2", "Psalm 12:6"],
		13: ["John 13:35", "Philippians 4:6"],
		14: ["Matthew 14:31", "Psalm 14:1"],
		15: ["Proverbs 15:1", "Luke 15:10"],
		16: ["Romans 16:27", "Matthew 16:24"],
		17: ["John 17:3", "Hebrews 17:6"],
		18: ["1 John 4:18", "Psalm 18:2"],
		19: ["Romans 8:19", "Philippians 4:8"],
		20: ["Matthew 20:28", "Luke 20:38"],
		21: ["Proverbs 21:30", "Hebrews 21:5"],
		22: ["Psalm 22:19", "John 22:40"],
		23: ["Galatians 5:23", "Romans 23:8"],
		24: ["Matthew 24:42", "1 Corinthians 24:5"],
		25: ["John 25:10", "Hebrews 25:3"],
		26: ["Romans 8:26", "Psalm 26:7"],
		27: ["Philippians 4:13", "Matthew 27:2"],
		28: ["Psalm 28:7", "Romans 28:14"],
		29: ["Matthew 29:11", "Ecclesiastes 29:6"],
		30: ["Romans 30:9", "Psalm 30:11"],
		31: ["John 3:31", "Matthew 6:34"]
	},

	"September": {
		1: ["Psalm 1:2", "Genesis 1:2"],
		2: ["Romans 2:3", "Matthew 2:2"],
		3: ["Proverbs 3:12", "John 3:4"],
		4: ["James 4:5", "Psalm 4:7"],
		5: ["Hebrews 5:11", "Isaiah 5:25"],
		6: ["Luke 6:38", "Psalm 6:9"],
		7: ["Romans 7:24", "Ecclesiastes 7:9"],
		8: ["John 8:36", "Proverbs 8:17"],
		9: ["Philippians 4:9", "Psalm 9:1"],
		10: ["Matthew 10:32", "John 10:10"],
		11: ["Hebrews 11:6", "Psalm 11:7"],
		12: ["Romans 12:12", "Colossians 3:23"],
		13: ["John 13:34", "1 Corinthians 13:7"],
		14: ["Matthew 14:31", "Psalm 14:2"],
		15: ["Proverbs 15:1", "Luke 15:10"],
		16: ["John 16:33", "Romans 16:20"],
		17: ["Philippians 4:13", "Psalm 17:6"],
		18: ["Ephesians 2:8", "James 1:19"],
		19: ["Isaiah 40:31", "Proverbs 19:11"],
		20: ["Matthew 20:28", "John 20:21"],
		21: ["Hebrews 10:23", "Psalm 21:7"],
		22: ["Romans 8:22", "Philippians 2:14"],
		23: ["Galatians 5:22", "John 5:24"],
		24: ["Matthew 24:35", "Isaiah 24:14"],
		25: ["Psalm 25:4", "Romans 8:25"],
		26: ["Hebrews 13:5", "Luke 26:11"],
		27: ["John 14:6", "Psalm 27:1"],
		28: ["Deuteronomy 31:6", "Matthew 28:19"],
		29: ["Psalm 29:11", "1 Corinthians 10:13"],
		30: ["Romans 5:8", "Philippians 4:6"]
	},

	"October": {
		1: ["Genesis 1:3", "Psalm 1:1"],
		2: ["Romans 2:5", "Matthew 2:3"],
		3: ["Proverbs 3:13", "John 3:2"],
		4: ["James 4:3", "Psalm 4:8"],
		5: ["1 John 5:15", "Philippians 5:2"],
		6: ["Luke 6:38", "Psalm 6:9"],
		7: ["Hebrews 7:25", "Proverbs 7:1"],
		8: ["Romans 8:28", "Matthew 8:17"],
		9: ["John 9:31", "Psalm 9:9"],
		10: ["James 1:5", "John 10:27"],
		11: ["1 Corinthians 11:24", "Romans 11:36"],
		12: ["Hebrews 12:2", "Psalm 12:6"],
		13: ["John 13:35", "Philippians 4:6"],
		14: ["Matthew 14:31", "Psalm 14:1"],
		15: ["Proverbs 15:1", "Luke 15:10"],
		16: ["Romans 16:27", "Matthew 16:24"],
		17: ["John 17:3", "Hebrews 17:6"],
		18: ["1 John 4:18", "Psalm 18:2"],
		19: ["Romans 8:19", "Philippians 4:8"],
		20: ["Matthew 20:28", "Luke 20:38"],
		21: ["Proverbs 21:30", "Hebrews 21:5"],
		22: ["Psalm 22:19", "John 22:40"],
		23: ["Galatians 5:23", "Romans 23:8"],
		24: ["Matthew 24:42", "1 Corinthians 24:5"],
		25: ["John 25:10", "Hebrews 25:3"],
		26: ["Romans 8:26", "Psalm 26:7"],
		27: ["Philippians 4:13", "Matthew 27:2"],
		28: ["Psalm 28:7", "Romans 28:14"],
		29: ["Matthew 29:11", "Ecclesiastes 29:6"],
		30: ["Romans 30:9", "Psalm 30:11"],
		31: ["John 3:31", "Matthew 6:34"]
	},

	"November": {
		1: ["Psalm 1:5", "Genesis 1:5"],
		2: ["Romans 2:2", "Matthew 2:6"],
		3: ["Proverbs 3:14", "John 3:1"],
		4: ["James 4:2", "Psalm 4:9"],
		5: ["Hebrews 5:10", "Isaiah 5:18"],
		6: ["Luke 6:38", "Psalm 6:9"],
		7: ["Romans 7:25", "Proverbs 7:1"],
		8: ["John 8:36", "Psalm 8:5"],
		9: ["Philippians 4:9", "Psalm 9:1"],
		10: ["Matthew 10:32", "John 10:10"],
		11: ["Hebrews 11:6", "Psalm 11:7"],
		12: ["Romans 12:12", "Colossians 3:23"],
		13: ["John 13:34", "1 Corinthians 13:7"],
		14: ["Matthew 14:31", "Psalm 14:2"],
		15: ["Proverbs 15:1", "Luke 15:10"],
		16: ["John 16:33", "Romans 16:20"],
		17: ["Philippians 4:13", "Psalm 17:6"],
		18: ["Ephesians 2:8", "James 1:19"],
		19: ["Isaiah 40:31", "Proverbs 19:11"],
		20: ["Matthew 20:28", "John 20:21"],
		21: ["Hebrews 10:23", "Psalm 21:7"],
		22: ["Romans 8:22", "Philippians 2:14"],
		23: ["Galatians 5:22", "John 5:24"],
		24: ["Matthew 24:35", "Isaiah 24:14"],
		25: ["Psalm 25:4", "Romans 8:25"],
		26: ["Hebrews 13:5", "Luke 26:11"],
		27: ["John 14:6", "Psalm 27:1"],
		28: ["Deuteronomy 31:6", "Matthew 28:19"],
		29: ["Psalm 29:11", "1 Corinthians 10:13"],
		30: ["Romans 5:8", "Philippians 4:6"]
	},

	"December": {
		1: ["Genesis 1:4", "Psalm 1:6"],
		2: ["Romans 2:1", "Matthew 2:7"],
		3: ["Proverbs 3:15", "John 3:18"],
		4: ["James 4:1", "Psalm 4:10"],
		5: ["1 John 5:14", "Philippians 5:5"],
		6: ["Luke 6:38", "Psalm 6:9"],
		7: ["Hebrews 7:25", "Proverbs 7:1"],
		8: ["Romans 8:28", "Matthew 8:17"],
		9: ["John 9:31", "Psalm 9:9"],
		10: ["James 1:5", "John 10:27"],
		11: ["1 Corinthians 11:24", "Romans 11:36"],
		12: ["Hebrews 12:2", "Psalm 12:6"],
		13: ["John 13:35", "Philippians 4:6"],
		14: ["Matthew 14:31", "Psalm 14:1"],
		15: ["Proverbs 15:1", "Luke 15:10"],
		16: ["Romans 16:27", "Matthew 16:24"],
		17: ["John 17:3", "Hebrews 17:6"],
		18: ["1 John 4:18", "Psalm 18:2"],
		19: ["Romans 8:19", "Philippians 4:8"],
		20: ["Matthew 20:28", "Luke 20:38"],
		21: ["Proverbs 21:30", "Hebrews 21:5"],
		22: ["Psalm 22:19", "John 22:40"],
		23: ["Galatians 5:23", "Romans 23:8"],
		24: ["Matthew 24:42", "1 Corinthians 24:5"],
		25: ["Luke 2:11", "Isaiah 9:6"], // Christmas Day
		26: ["Romans 8:26", "Psalm 26:7"],
		27: ["Philippians 4:13", "Matthew 27:2"],
		28: ["Psalm 28:7", "Romans 28:14"],
		29: ["Matthew 29:11", "Ecclesiastes 29:6"],
		30: ["Romans 30:9", "Psalm 30:11"],
		31: ["Revelation 21:4", "Matthew 6:34"] // Year-end reflection
	}
};

/* Daily Study Verses Array with Object Arrays */
const chapters = [
	{
		"new": "Testament",
		"chapters": [
			{ "matthew": "1-28" },
			{ "mark": "1-16" },
			{ "luke": "1-24" },
			{ "john": "1-21" },
			{ "acts": "1-28" },
			{ "romans": "1-16" },
			{ "1 corinthians": "1-16" },
			{ "2 corinthians": "1-13" },
			{ "galatians": "1-6" },
			{ "ephesians": "1-6" },
			{ "philippians": "1-4" },
			{ "colossians": "1-4" },
			{ "1 thessalonians": "1-5" },
			{ "2 thessalonians": "1-3" },
			{ "1 timothy": "1-6" },
			{ "2 timothy": "1-4" },
			{ "titus": "1-3" },
			{ "philemon": "1-1" },
			{ "hebrews": "1-13" },
			{ "james": "1-5" },
			{ "1 peter": "1-5" },
			{ "2 peter": "1-3" },
			{ "1 john": "1-5" },
			{ "2 john": "1-1" },
			{ "3 john": "1-1" },
			{ "jude": "1-1" },
			{ "revelation": "1-22" }
		]
	},
	{
		"old": "Testament",
		"chapters": [
			{ "genesis": "1-50" },
			{ "exodus": "1-40" },
			{ "leviticus": "1-27" },
			{ "numbers": "1-36" },
			{ "deuteronomy": "1-34" },
			{ "joshua": "1-24" },
			{ "judges": "1-21" },
			{ "ruth": "1-4" },
			{ "1 samuel": "1-31" },
			{ "2 samuel": "1-24" },
			{ "1 kings": "1-22" },
			{ "2 kings": "1-25" },
			{ "1 chronicles": "1-29" },
			{ "2 chronicles": "1-36" },
			{ "ezra": "1-10" },
			{ "nehemiah": "1-13" },
			{ "esther": "1-10" },
			{ "job": "1-42" },
			{ "psalm": "1-150" },
			{ "proverbs": "1-31" },
			{ "ecclesiastes": "1-12" },
			{ "song of solomon": "1-8" },
			{ "isaiah": "1-66" },
			{ "jeremiah": "1-52" },
			{ "lamentations": "1-5" },
			{ "ezekiel": "1-48" },
			{ "daniel": "1-12" },
			{ "hosea": "1-14" },
			{ "joel": "1-3" },
			{ "amos": "1-9" },
			{ "obadiah": "1-1" },
			{ "jonah": "1-4" },
			{ "micah": "1-7" },
			{ "nahum": "1-3" },
			{ "habakkuk": "1-3" },
			{ "zephaniah": "1-3" },
			{ "haggai": "1-2" },
			{ "zechariah": "1-14" },
			{ "malachi": "1-4" }
		]
	}
];

/* Short names for searching books/chapter names Array Objects */
const chaptersNickname = [
	{
		new: "Testament",
		chapters: [
			{ matt: "Matthew" },
			{ mt: "Matthew" },
			{ mat: "Matthew" },
			{ matthew: "Matthew" },
			{ mark: "Mark" },
			{ mk: "Mark" },
			{ mrk: "Mark" },
			{ markus: "Mark" },
			{ luke: "Luke" },
			{ lk: "Luke" },
			{ luk: "Luke" },
			{ lucas: "Luke" },
			{ john: "John" },
			{ jn: "John" },
			{ jhn: "John" },
			{ acts: "Acts" },
			{ act: "Acts" },
			{ actsofapostles: "Acts" },
			{ rom: "Romans" },
			{ rm: "Romans" },
			{ roms: "Romans" },
			{ romans: "Romans" },
			{ "1cor": "1 Corinthians" },
			{ "1 cor": "1 Corinthians" },
			{ "1corinth": "1 Corinthians" },
			{ "1 corinth": "1 Corinthians" },
			{ "2cor": "2 Corinthians" },
			{ "2 cor": "2 Corinthians" },
			{ "2corinth": "2 Corinthians" },
			{ "2 corinth": "2 Corinthians" },
			{ gal: "Galatians" },
			{ galat: "Galatians" },
			{ galatians: "Galatians" },
			{ eph: "Ephesians" },
			{ ephes: "Ephesians" },
			{ ephesians: "Ephesians" },
			{ phil: "Philippians" },
			{ php: "Philippians" },
			{ philip: "Philippians" },
			{ philippians: "Philippians" },
			{ col: "Colossians" },
			{ colos: "Colossians" },
			{ colossians: "Colossians" },
			{ "1thess": "1 Thessalonians" },
			{ "1 thess": "1 Thessalonians" },
			{ "1thes": "1 Thessalonians" },
			{ "1 thesalonians": "1 Thessalonians" },
			{ "2thess": "2 Thessalonians" },
			{ "2 thess": "2 Thessalonians" },
			{ "2thes": "2 Thessalonians" },
			{ "2 thesalonians": "2 Thessalonians" },
			{ "1tim": "1 Timothy" },
			{ "1 tim": "1 Timothy" },
			{ "1timothy": "1 Timothy" },
			{ "2tim": "2 Timothy" },
			{ "2 tim": "2 Timothy" },
			{ "2timothy": "2 Timothy" },
			{ titus: "Titus" },
			{ tit: "Titus" },
			{ philem: "Philemon" },
			{ phlm: "Philemon" },
			{ phile: "Philemon" },
			{ philemon: "Philemon" },
			{ heb: "Hebrews" },
			{ hebr: "Hebrews" },
			{ hebrews: "Hebrews" },
			{ james: "James" },
			{ jas: "James" },
			{ jm: "James" },
			{ "1pet": "1 Peter" },
			{ "1 pet": "1 Peter" },
			{ "1peter": "1 Peter" },
			{ "2pet": "2 Peter" },
			{ "2 pet": "2 Peter" },
			{ "2peter": "2 Peter" },
			{ "1john": "1 John" },
			{ "1 jn": "1 John" },
			{ "1john": "1 John" },
			{ "2john": "2 John" },
			{ "2 jn": "2 John" },
			{ "2john": "2 John" },
			{ "3john": "3 John" },
			{ "3 jn": "3 John" },
			{ "3john": "3 John" },
			{ jude: "Jude" },
			{ jd: "Jude" },
			{ rev: "Revelation" },
			{ revel: "Revelation" },
			{ apoc: "Revelation" },
			{ revelation: "Revelation" },
			{ apocalypse: "Revelation" }
		]
	},
	{
		old: "Testament",
		chapters: [
			{ gen: "Genesis" },
			{ gn: "Genesis" },
			{ genis: "Genesis" },
			{ genesis: "Genesis" },
			{ exod: "Exodus" },
			{ ex: "Exodus" },
			{ exo: "Exodus" },
			{ exodus: "Exodus" },
			{ lev: "Leviticus" },
			{ lv: "Leviticus" },
			{ levit: "Leviticus" },
			{ leviticus: "Leviticus" },
			{ num: "Numbers" },
			{ nm: "Numbers" },
			{ numb: "Numbers" },
			{ numbers: "Numbers" },
			{ deut: "Deuteronomy" },
			{ dt: "Deuteronomy" },
			{ deuter: "Deuteronomy" },
			{ deuteronomy: "Deuteronomy" },
			{ josh: "Joshua" },
			{ jsh: "Joshua" },
			{ jos: "Joshua" },
			{ joshua: "Joshua" },
			{ judg: "Judges" },
			{ jdg: "Judges" },
			{ jud: "Judges" },
			{ judges: "Judges" },
			{ ruth: "Ruth" },
			{ ru: "Ruth" },
			{ "1sam": "1 Samuel" },
			{ "1 sam": "1 Samuel" },
			{ "1samuel": "1 Samuel" },
			{ "2sam": "2 Samuel" },
			{ "2 sam": "2 Samuel" },
			{ "2samuel": "2 Samuel" },
			{ "1kgs": "1 Kings" },
			{ "1 kgs": "1 Kings" },
			{ "1kings": "1 Kings" },
			{ "2kgs": "2 Kings" },
			{ "2 kgs": "2 Kings" },
			{ "2kings": "2 Kings" },
			{ "1chr": "1 Chronicles" },
			{ "1 chr": "1 Chronicles" },
			{ "1chron": "1 Chronicles" },
			{ "1chronicles": "1 Chronicles" },
			{ "2chr": "2 Chronicles" },
			{ "2 chr": "2 Chronicles" },
			{ "2chron": "2 Chronicles" },
			{ "2chronicles": "2 Chronicles" },
			{ ezra: "Ezra" },
			{ ezr: "Ezra" },
			{ nehem: "Nehemiah" },
			{ neh: "Nehemiah" },
			{ ne: "Nehemiah" },
			{ nehemiah: "Nehemiah" },
			{ esth: "Esther" },
			{ est: "Esther" },
			{ esther: "Esther" },
			{ job: "Job" },
			{ jb: "Job" },
			{ ps: "Psalm" },
			{ pss: "Psalm" },
			{ psalms: "Psalm" },
			{ prov: "Proverbs" },
			{ pr: "Proverbs" },
			{ prv: "Proverbs" },
			{ proverbs: "Proverbs" },
			{ eccl: "Ecclesiastes" },
			{ eccles: "Ecclesiastes" },
			{ ec: "Ecclesiastes" },
			{ ecclesiastes: "Ecclesiastes" },
			{ song: "Song of Solomon" },
			{ sos: "Song of Solomon" },
			{ songs: "Song of Solomon" },
			{ cant: "Song of Solomon" },
			{ songofsol: "Song of Solomon" },
			{ songofsongs: "Song of Solomon" },
			{ isa: "Isaiah" },
			{ is: "Isaiah" },
			{ isaiah: "Isaiah" },
			{ jer: "Jeremiah" },
			{ jr: "Jeremiah" },
			{ jerem: "Jeremiah" },
			{ jeremiah: "Jeremiah" },
			{ lam: "Lamentations" },
			{ lament: "Lamentations" },
			{ lm: "Lamentations" },
			{ lamentations: "Lamentations" },
			{ ezek: "Ezekiel" },
			{ ez: "Ezekiel" },
			{ ezekiel: "Ezekiel" },
			{ dan: "Daniel" },
			{ dn: "Daniel" },
			{ dnl: "Daniel" },
			{ daniel: "Daniel" },
			{ hosea: "Hosea" },
			{ hos: "Hosea" },
			{ hs: "Hosea" },
			{ joel: "Joel" },
			{ jl: "Joel" },
			{ amos: "Amos" },
			{ am: "Amos" },
			{ obad: "Obadiah" },
			{ ob: "Obadiah" },
			{ obadiah: "Obadiah" },
			{ jonah: "Jonah" },
			{ jnh: "Jonah" },
			{ jon: "Jonah" },
			{ mic: "Micah" },
			{ mi: "Micah" },
			{ mich: "Micah" },
			{ micah: "Micah" },
			{ nahum: "Nahum" },
			{ nah: "Nahum" },
			{ nm: "Nahum" },
			{ hab: "Habakkuk" },
			{ habak: "Habakkuk" },
			{ hb: "Habakkuk" },
			{ habakkuk: "Habakkuk" },
			{ zeph: "Zephaniah" },
			{ zep: "Zephaniah" },
			{ zephan: "Zephaniah" },
			{ zephaniah: "Zephaniah" },
			{ hag: "Haggai" },
			{ hagg: "Haggai" },
			{ hg: "Haggai" },
			{ haggai: "Haggai" },
			{ zech: "Zechariah" },
			{ zec: "Zechariah" },
			{ zechar: "Zechariah" },
			{ zechariah: "Zechariah" },
			{ mal: "Malachi" },
			{ ml: "Malachi" },
			{ malach: "Malachi" },
			{ malachi: "Malachi" }
		]
	}
];

/** Object which corrects single book names for parseReference2 */
const nicknameMap = {
	"philemon": "Philemon", "phm": "Philemon", "phlm": "Philemon", "phile": "Philemon",
	"jude": "Jude", "jud": "Jude", "jd": "Jude",
	"2john": "2 John", "2 john": "2 John", "2jn": "2 John", "2 jn": "2 John",
	"3john": "3 John", "3 john": "3 John", "3jn": "3 John", "3 jn": "3 John",
	"obadiah": "Obadiah", "obad": "Obadiah", "ob": "Obadiah"
};

const chaptersMap = [
	{
		"new": "Testament",
		"chapters": [
			{ "matthew": "1-28" }, { "mark": "1-16" }, { "luke": "1-24" }, { "john": "1-21" }, { "acts": "1-28" },
			{ "romans": "1-16" }, { "1 corinthians": "1-16" }, { "2 corinthians": "1-13" }, { "galatians": "1-6" },
			{ "ephesians": "1-6" }, { "philippians": "1-4" }, { "colossians": "1-4" }, { "1 thessalonians": "1-5" },
			{ "2 thessalonians": "1-3" }, { "1 timothy": "1-6" }, { "2 timothy": "1-4" }, { "titus": "1-3" },
			{ "philemon": "1-1" }, { "hebrews": "1-13" }, { "james": "1-5" }, { "1 peter": "1-5" }, { "2 peter": "1-3" },
			{ "1 john": "1-5" }, { "2 john": "1-1" }, { "3 john": "1-1" }, { "jude": "1-1" }, { "revelation": "1-22" }
		]
	},
	{
		"old": "Testament",
		"chapters": [
			{ "genesis": "1-50" }, { "exodus": "1-40" }, { "leviticus": "1-27" }, { "numbers": "1-36" },
			{ "deuteronomy": "1-34" }, { "joshua": "1-24" }, { "judges": "1-21" }, { "ruth": "1-4" },
			{ "1 samuel": "1-31" }, { "2 samuel": "1-24" }, { "1 kings": "1-22" }, { "2 kings": "1-25" },
			{ "1 chronicles": "1-29" }, { "2 chronicles": "1-36" }, { "ezra": "1-10" }, { "nehemiah": "1-13" },
			{ "esther": "1-10" }, { "job": "1-42" }, { "psalms": "1-150" }, { "proverbs": "1-31" },
			{ "ecclesiastes": "1-12" }, { "song of solomon": "1-8" }, { "isaiah": "1-66" }, { "jeremiah": "1-52" },
			{ "lamentations": "1-5" }, { "ezekiel": "1-48" }, { "daniel": "1-12" }, { "hosea": "1-14" },
			{ "joel": "1-3" }, { "amos": "1-9" }, { "obadiah": "1-1" }, { "jonah": "1-4" }, { "micah": "1-7" },
			{ "nahum": "1-3" }, { "habakkuk": "1-3" }, { "zephaniah": "1-3" }, { "haggai": "1-2" },
			{ "zechariah": "1-14" }, { "malachi": "1-4" }
		]
	}
];

const badWords = ['69', '0rgasms', '3jakulating', '4r5e', '4r5ed', '4r5es', '4skin', '5h17', '5h1t', '5kank', 'abbie', 
	'abeed', 'aboe', 'anal', 'analingus', 'analplug', 'analplugs', 'anilingus', 'anus', 'apeshit', 'apeshite', 'ar5e', 'ar5ehole', 'arse', 'arsefuck', 'arsefucker', 
	'arsehole', 'arseshit', 'arsewipe', 'ashole', 'ass', 'asses', 'assface', 'assfck', 'assfcker', 'assfk', 'assfkcer', 'assfker', 'assfkr', 'assfook', 'assfuccer', 
	'assfuck', 'assfuck3r', 'assfucker', 'assfuckers', 'assfuckerz', 'assfukah', 'assfukka', 'assfukker', 'assfukkerz', 'assfvck3r', 'assfvcker', 'asshat', 'asshol3', 
	'asshole', 'assholes', 'assmunch', 'assmuncher', 'asswhole', 'asswipe', 'azz', 'azzhole', 'b00bz', 'b0llock', 'b0llocks', 'b17ch', 'b1otch', 'b1otchs', 'b1tch', 
	'b1tch1ng', 'b1tch35', 'b1tch3s', 'b1tchees', 'b1tches', 'b1tchez', 'b1tchin', 'b1tching', 'b1tchs', 'b1tchy', 'ballbag', 'bangbros', 'bassturd', 'bastard', 
	'bastardish', 'bastards', 'basterd', 'bastid', 'bastinado', 'basturd', 'bater', 'bates', 'batshit', 'batshite', 'bbc', 'beaner', 'beaners', 'beeotch', 'bellend', 
	'bender', 'bewbs', 'beyoch', 'beyotch', 'biatch', 'biches', 'biotch', 'biotches', 'biotchez', 'bishes', 'bitch', 'bitch3s', 'bitchass', 'bitchasses', 'bitched', 
	'bitcher', 'bitchers', 'bitches', 'bitchez', 'bitchfuck', 'bitchhole', 'bitchin', 'bitching', 'bitchlike', 'bitchness', 'bitchs', 'bitchslap', 'bitchtits', 
	'bitchy', 'bizzach', 'BJ', 'blacky', 'blowjob', 'boll0ck', 'bollock', 'bollockchops', 'bollocks', 'bollocktician', 'bollox', 'bondage', 'boner', 'boobs', 'booty', 
	'breasticles', 'breasts', 'bugger', 'bullshi', 'bullshit', 'bullshite', 'bumhole', 'buttermilk', 'buttfuck', 'buttfucker', 'buttfuckers', 'butthole', 'bwc', 
	'c00n', 'c00nies', 'c0ck', 'c0ckhead', 'c0cks', 'c0cksuccer', 'c0cksucked', 'c0cksucker', 'c0cksuckers', 'c0x', 'c0xux0r', 'caaak', 'caca', 'cack', 'cagone', 
	'cajones', 'cameltoe', 'carpetmuncher', 'carpetmunchers', 'carpetmunching', 'cawk', 'cawkmuncher', 'cawks', 'cawksucker', 'ch1nk', 'chesticles', 'chinavirus', 
	'chingchong', 'chink', 'chinky', 'chocha', 'cholo', 'clitlickers', 'clusterfuck', 'clusterfucked', 'clusterfucker', 'clusterfucking', 'clusterfucks', 'cock', 
	'cockboy', 'cockeater', 'cockface', 'cockgobbler', 'cockh3ad', 'cockhead', 'cockheads', 'cockhed', 'cockless', 'cocklicker', 'cockmonger', 'cockmunch', 
	'cockmuncher', 'cocks', 'cockshit', 'cockskin', 'cocksmoker', 'cocksucc', 'cocksuccas', 'cocksuccer', 'cocksuccers', 'cocksuck', 'cocksuckas', 'cocksucked', 
	'cocksucker', 'cocksuckers', 'cocksucking', 'cocksucks', 'cocksuk', 'cocksuka', 'cocksukka', 'cocsuck', 'cokmuncher', 'coksucka', 'coolie', 'coon', 'coon1es', 
	'cooni3s', 'coonie', 'coonies', 'coons', 'coot', 'cooter', 'cooterpuffing', 'cooties', 'creampie', 'crotch', 'crotchy', 'crow', 'crows', 'cuksuker', 'cuksukka', 
	'cumball', 'cumdumpster', 'cumming', 'cums', 'cumslut', 'cumz', 'cunnilingus', 'cunt', 'cuntbag', 'cuntbollock', 'cuntelope', 'cuntits', 'cuntless', 'cuntlick', 
	'cuntlicker', 'cuntlickers', 'cuntness', 'cunts', 'cunty', 'cuntz', 'cuunt', 'cyberfck', 'cyberfcks', 'cyberfuccs', 'cyberfucks', 'cyberfucs', 'cyberfukk', 
	'cyberfukks', 'cyberfvcks', 'd1ck', 'd1ckhead', 'd1ckheads', 'd1cks', 'd1cksucker', 'd1cksukka', 'd1ckz', 'd1ldo', 'dafuq', 'dago', 'darkass', 'darkfuck', 
	'darkie', 'darkshit', 'darktard', 'darky', 'dickface', 'dickfucker', 'dickhead', 'dickheads', 'dickjockies', 'dickless', 'dicklicker', 'dickmuncher', 'dicks', 
	'dickskin', 'dickslapper', 'dicksmoker', 'dicksucker', 'dickvag', 'dickz', 'diddle', 'dikhead', 'diks', 'dild0', 'dipsh1t', 'dipsh1tty', 'dipshat', 'dipshidiot', 
	'dipshit', 'dipshite', 'dipshits', 'dipshitter', 'dipshitty', 'dipstick', 'dix', 'dlck', 'dlcks', 'dogsh1t', 'dogsh1ts', 'dogshit', 'dogshits', 'dogstyle', 
	'dolt', 'dong', 'doosh', 'dothead', 'douche', 'douchebag', 'dumasses', 'dumbarrassed', 'dumbass', 'dumbasses', 'dumbfucks', 'dumbshit', 'dyke', 'erectoplasm', 
	'f0ck', 'f0cked', 'f0cker', 'f0ckers', 'fack', 'fackuhs', 'fag', 'fag0t', 'faget', 'fagg0t', 'fagging', 'faggo', 'faggot', 'faggoting', 'faggots', 'faggs', 
	'faggy', 'fagot', 'fags', 'fagshit', 'fatass', 'fatasses', 'fccuker', 'fck', 'fcka', 'fckahz', 'fcked', 'fckedup', 'fcker', 'fckin', 'fcking', 'Fckk', 'fckked', 
	'fckking', 'fcks', 'fcktard', 'fckyeah', 'fcuk', 'fcuked', 'fcuker', 'fcukers', 'fcuking', 'fcukker', 'fcuks', 'fcvking', 'feck', 'fecker', 'feg', 'fellator', 
	'fick', 'finger', 'fingerbanged', 'fingerpop', 'fkbny', 'fked', 'fker', 'fking', 'fkings', 'fkker', 'flamer', 'flamers', 'focker', 'fook', 'fooker', 'fookuh', 
	'forked', 'fothermuckers', 'fuc', 'fucc', 'fucca', 'fuccers', 'fuccing', 'fuccs', 'Fuck', 'fucka', 'fuckahs', 'fuckass', 'fuckasses', 'fuckaz', 'fuckbag', 
	'fuckboy', 'fucked', 'fuckem', 'fucker', 'fuckers', 'fuckface', 'fuckfaces', 'fuckhead', 'fuckheaded', 'fuckheads', 'fuckin', 'fucking', 'fuckk', 'fuckless', 
	'fuckmachine', 'fucknuckle', 'fucks', 'fuckshit', 'fuckshitface', 'fuckshithead', 'fuckstar', 'fuckster', 'fuckstick', 'fucktard', 'fucktards', 'fuckup', 
	'fuckwad', 'fuckwhore', 'fucs', 'fucx', 'fudgefucker', 'fudgepacker', 'fudgepackers', 'fudgepackershitter', 'fugged', 'fugger', 'fuggerz', 'fuggings', 'fugly', 
	'fuk', 'fuk1n', 'fuk1ng', 'fukcs', 'fuker', 'fukheads', 'fukin', 'fuking', 'fukk', 'fukka', 'fukked', 'fukker', 'fukkers', 'fukking', 'fukkings', 'fukkuh', 
	'fuks', 'fuku', 'fukwhore', 'fukwit', 'funbags', 'fuq', 'futhamucka', 'fux', 'fux0r', 'fvck', 'fvcka', 'fvckbunny', 'fvcker', 'fvckers', 'fvckin', 'fvcking', 
	'fvckwhi', 'fxck', 'fxcked', 'fxcker', 'fxcking', 'g0ddamn', 'g0ddamned', 'g0ddamnit', 'gayest', 'gaylord', 'gaylords', 'gayness', 'gaysian', 'gaytard', 'geebag', 
	'girlieboy', 'girlyboy', 'gobshite', 'godamnit', 'goddammit', 'goddamn', 'goddamned', 'goddamnit', 'gook', 'gowl', 'greaser', 'groid', 'groper', 'gyp', 'heeb', 
	'higg3r', 'higga', 'higger', 'higgers', 'hoar', 'hoe', 'hoebag', 'hoes', 'homo', 'homos', 'hooters', 'horseshit', 'hustler', 'injun', 'j3rk', 'ja1lbait', 
	'jackarse', 'jackass', 'jackasses', 'jackasss', 'jackoff', 'jackoffs', 'jackoffz', 'jagoff', 'jailbait', 'jap', 'jerkoff', 'jerkoffs', 'jewboy', 'jigaboo', 
	'jigaboos', 'jigga', 'jiggaboo', 'jiggabooboo', 'jiggaboos', 'jiggabu', 'jiggas', 'jigger', 'jiggerboo', 'jiggerboos', 'jiggs', 'jiggyboo', 'jigro', 'jizz', 
	'jizzbags', 'jizzed', 'jizzes', 'jizzfucker', 'jizzing', 'jizzsacks', 'jizzstain', 'jizzy', 'k1k3', 'k1ke', 'kike', 'kikes', 'kkk', 'klan', 'klitoris', 
	'kneegrows', 'knickers', 'knob', 'knob3d', 'knob3nd', 'knobd', 'knobe', 'knobead', 'knobeads', 'knobed', 'knobeds', 'knobend', 'knobender', 'knobends', 
	'knobendy', 'knobendz', 'knober', 'knobes', 'knobgobbler', 'knobhead', 'knobheads', 'knobjockies', 'knobjocky', 'knobjokey', 'knobjokeys', 'kyke', 'l3itch', 
	'l3itches', 'ladboys', 'ladboyz', 'ladiboy', 'ladyb0i', 'ladyb0y', 'ladyboy', 'ladyboys', 'ladyboyz', 'lesbo', 'm0f0', 'm0f0s', 'm0fo', 'm0foes', 'm0fos', 
	'm0ng0l0id', 'm0ngoloid', 'm0thafucked', 'm0thafucker', 'm0thafucking', 'm0therfuckeds', 'm0therfucker', 'm0therfucking', 'm0therfvcker', 'markasses', 'mfckers', 
	'MFer', 'MFers', 'mfing', 'mfk', 'mfs', 'mfukk', 'mfukker', 'milf', 'mindfuck', 'mof0es', 'mof0s', 'mofcker', 'mofo', 'mofoes', 'mofos', 'mofoshit', 'mofuccers', 
	'mofucckers', 'mofuck', 'mofucker', 'mofuckkas', 'mofuk', 'mofukkas', 'molester', 'mong', 'mongoloid', 'mongrel', 'mothafcked', 'mothafcking', 'Mothafucc', 
	'mothafucced', 'mothafuccer', 'mothafuccing', 'mothafuck', 'mothafucka', 'mothafuckas', 'mothafuckasses', 'mothafuckaz', 'mothafuckazzes', 'mothafucked', 
	'mothafuckeds', 'mothafucker', 'mothafuckers', 'mothafuckin', 'mothafucking', 'mothafuckings', 'mothafuckins', 'mothafucks', 'mothafuckz', 'mothafvcked', 
	'mothercker', 'motherfacking', 'motherfcked', 'motherfckin', 'motherfcking', 'motherfcks', 'motherfckshit', 'motherfecka', 'motherfecker', 'motherfk', 
	'motherfucca', 'motherfuccas', 'motherfuccers', 'motherfuck', 'motherfucked', 'motherfuckeds', 'motherfucker', 'motherfuckers', 'motherfuckin', 'motherfucking', 
	'motherfuckings', 'motherfuckingshit', 'motherfuckins', 'motherfuckka', 'motherfuckkas', 'motherfuckkers', 'motherfucks', 'motherfukka', 'motherfukker', 
	'motherfukkings', 'motherfvck', 'motherfvcked', 'motherfvckeds', 'motherfvcker', 'motherfvckers', 'motherfvcking', 'motherfxck', 'motherfxcking', 'mothfck', 
	'mtherfuker', 'mthrfcker', 'muddafukkas', 'mudderfuk', 'mudderfukker', 'mufdive', 'mufdivin', 'muff', 'muffdiving', 'muffdivings', 'muffindivin', 'muffindiving', 
	'muhfucking', 'muthafecker', 'muthafeckers', 'muthafucka', 'muthafuckers', 'muthafuckings', 'muthafuckker', 'muthafuckkers', 'muthafukka', 'mutherfucker', 
	'mutherfuckers', 'n0bhead', 'n0bj0cky', 'n1ckker', 'n1g3r', 'n1g3rz', 'n1gg3r', 'n1gg3rs', 'n1gga', 'n1ggah', 'n1ggahs', 'n1ggas', 'n1ggazes', 'n1gger', 
	'n1ggers', 'n1gguh', 'n3gro', 'negga', 'neggar', 'negr0', 'negro', 'negroes', 'negroid', 'niccer', 'nicka', 'nickas', 'nicker', 'nickk3r', 'nickker', 'nig', 
	'niga', 'nigah', 'nigasses', 'nigers', 'nigg3r', 'nigg3rs', 'nigg4h', 'nigg4hs', 'nigga', 'niggah', 'niggahs', 'niggahz', 'niggas', 'niggass', 'niggaz', 
	'niggazzes', 'nigger', 'niggers', 'niggerz', 'niggir', 'niggress', 'nigguh', 'nigguhs', 'nigguhz', 'niglet', 'nignigs', 'nignog', 'nigra', 'nigre', 'nigs', 
	'niguh', 'nikk3r', 'nikkas', 'nikker', 'nip', 'nobbyhead', 'nobhead', 'nobheads', 'nobj0key', 'nobjockies', 'nobjocky', 'nobjokey', 'nobjokeys', 'nobs', 'nonce', 
	'nuckas', 'nuggets', 'nutsack', 'nutsacks', 'nympho', 'nymphomaniac', 'octopussy', 'p3n1shead', 'p3nisfcker', 'p3nisfcukers', 'p3nisfvcker', 'p3nisfvckers', 
	'packerfudgehead', 'packingfudge', 'packingfudgefucker', 'packingfudgefucking', 'packsomefudgefucker', 'paki', 'pecker', 'peckerhead', 'pedo', 'pedobear', 
	'pedobears', 'pedophl', 'pedos', 'pedoz', 'peen', 'peener', 'penisfcker', 'penisfuccer', 'penisfucker', 'penisfuckers', 'penisfvcker', 'penisfvckers', 
	'penishead', 'peter', 'phaggot', 'phaggots', 'phagot', 'phags', 'phuc', 'phucc', 'phuccer', 'phucchead', 'phuccing', 'phuck', 'phuck3r', 'phucked', 'phucker', 
	'phuckin', 'phucking', 'phuckings', 'phucks', 'phucup', 'phuk', 'phuked', 'phukeds', 'phukhead', 'phuking', 'phukings', 'phukk', 'phukked', 'phukkeds', 'phukker', 
	'Phukking', 'phuks', 'phukshit', 'phuku', 'phukup', 'phuq', 'phuqs', 'phvckings', 'pigfucker', 'pigfuckers', 'pigfucking', 'pigfukker', 'piggyfuck', 'pigshit', 
	'pissoff', 'pissoffs', 'polesmoker', 'prick', 'pricks', 'pu55y', 'punani', 'punkasses', 'puss', 'pusses', 'pussie', 'pussies', 'pussless', 'pusslicker', 'pussy', 
	'pussylickers', 'pussys', 'pussywhipped', 'puta', 'puussy', 'puzzies', 'puzzy', 'queerasses', 'queers', 'r3tard', 'raghead', 'ragheads', 'ragtard', 'ramrod', 
	'reacharound', 'rectum', 'redskin', 'retard', 'retardo', 'retardotron', 'sack', 'sambo', 'scamfuck', 'schlong', 'scumfuck', 'scumfucker', 'scumfvck', 'scummy', 
	'scut', 'sh1s', 'sh1t', 'sh1t3', 'sh1td1ck', 'sh1tdick', 'sh1te', 'sh1tfuck', 'sh1th3ad', 'sh1theads', 'sh1ts', 'sh1tsome', 'sh1tt', 'sh1tty', 'sh3mal3', 
	'sh3male', 'shat', 'sheeeet', 'sheet', 'sheister', 'shemal3', 'shemale', 'shemales', 'shet', 'shiat', 'shiddick', 'shiester', 'shiesterfuck', 'shiesterfuckface', 
	'shiesterfuckhead', 'shiesterfucks', 'shipdit', 'shit', 'shit3', 'shitass', 'shitasses', 'shitassfucker', 'shitassfuckface', 'shitbag', 'shitbird', 'shitblimp', 
	'shitblimps', 'shitbrain', 'shitd1ck', 'shitdick', 'shitdicks', 'shitdikk', 'shitdip', 'shite', 'shiteblimps', 'shited', 'shitedick', 'shitefuck', 'shitefulls', 
	'shitehead', 'shites', 'shitey', 'shitface', 'shitfaced', 'shitfacefuck', 'shitfacefucker', 'shitfck', 'shitfk', 'shitfreak', 'shitfuck', 'shitfucker', 
	'shitfuckhead', 'shitfuckmotherfucker', 'shitfucks', 'shitfudgefucker', 'shitfvck', 'shithead', 'shitheadfucker', 'shitheadfuckface', 'shitheads', 'shithole', 
	'shits', 'shitsdick', 'shitsfuck', 'shitsful', 'shittastic', 'shittasticfuck', 'shitte', 'shitted', 'shitter', 'shitterfucker', 'shitti', 'shitties', 'shittiest', 
	'shitting', 'shittings', 'shitty', 'shittydick', 'shittydicks', 'shittyfuck', 'shittyfuckface', 'shittyful', 'shlong', 'shmale', 'shtfuk', 'shylock', 
	'shytfeisterfuck', 'sissy', 'skank', 'skanks', 'skanky', 'skankz', 'slag', 'slantard', 'slanteye', 'slanteyes', 'slanteyeshit', 'slantfreak', 'slanty', 'slit', 
	'slut', 'sluts', 'slutty', 'snatch', 'soab', 'sonofabitch', 'sonofbitches', 'spanking', 'sperm', 'sphincter', 'spic', 'spicfuck', 'spick', 'spics', 'spicshit', 
	'spig', 'spik', 'spix', 'spook', 'spooks', 'spunk', 'stfu', 'stupidasses', 'suck', 'sumbitch', 'swine', 'tacohead', 'tadger', 'tallywacker', 'tard', 'tart', 
	'throater', 'tits', 'tosser', 'towelhead', 'towelheads', 'towelshithead', 'tramp', 'Tranny', 'transvestite', 'trashb1tch', 'trashbitch', 'trashbitches', 
	'trashbitchez', 'trashbtch', 'trasherbitch', 'trasherbitchs', 'trashybitches', 'trousersnake', 'turdcutter', 'turdhead', 'twat', 'twatface', 'twats', 'twatt', 
	'twattish', 'twatzilla', 'twink', 'upskirts', 'vag', 'vajayjay', 'vulva', 'w4nk3r', 'w4nker', 'wang', 'wank', 'wank3r', 'wank3rs', 'wankbastard', 'wanked', 
	'wanker', 'wankers', 'wankies', 'wanking', 'wanks', 'we1back', 'weenie', 'weiner', 'wetback', 'wetbacks', 'wh0r3', 'wh0re', 'whoar', 'whoars', 'whor3', 'whore', 
	'whores', 'wigger', 'wnker', 'wop', 'wophead', 'zipperhead', 'fuck', 'sex', 'orgasm', 'ejaculation', 'foreskin', 'abraham', 'abo', 'ape', 'wound', 'bang', 
	'masturbate', 'meat', 'blumpkin', 'bonk', 'breast', 'bum', 'bung', 'butt', 'cojones', 'testicles', 'choad', 'clit', 'cum', 'dick', 'dildo', 'fellatio', 'gay', 
	'damn', 'hell', 'grope', 'gypsy', 'hebe', 'homosexual', 'jerk', 'jew', 'kidtoucher', 'lesbian', 'loose', 'molest', 'niggger', 'nipple', 'nymph', 'penis', 
	'pedophile', 'piss', 'punta', 'queer', 'retarded', 'monkey', 'sadomasochism', 'ballsack', 'scum', 'spank', 'tit', 'tranny', 'turd', 'upskirt', 'vagina', 'fart', 
	'hag', 'pig', 'trash', 'boiolas', "hate", "hateful", "racist", "sexist", "violent", "abuse", "abusive", "bully", "bullying", "harass", "harassment",
	"kill", "murder", "suicide", "selfharm", "hurt", "harm", "attack", "terror", "terrorist", "bomb", "explode",
	"threat", "threaten", "danger", "dangerous", "evil", "curse", "damn", "damnation", "doom", "destroy", "ruin",
	"disgust", "disgusting", "gross", "ugly", "stupid", "idiot", "dumb", "moron", "loser", "failure", "worthless",
	"hopeless", "useless", "awful", "horrible", "nasty", "mean", "cruel", "suffer", "pain", "sad", "depressed",
	"depression", "anxiety", "panic", "fear", "scared", "frighten", "cry", "tears", "lonely", "alone", "isolated",
	"reject", "rejected", "rejecting", "shame", "ashamed", "embarrass", "embarrassed", "embarrassing", "regret",
	"regrettable", "resent", "resentment", "angry", "anger", "mad", "furious", "rage", "revenge", "vengeance",
	"jealous", "envy", "envious", "jealousy", "greed", "greedy", "selfish", "selfishness", "arrogant", "arrogance",
	"prideful", "pride", "boast", "boastful", "lie", "liar", "lying", "deceive", "deceit", "deception", "cheat",
	"cheating", "steal", "thief", "rob", "robbery", "fraud", "scam", "scammer", "dishonest", "dishonesty",
	"unfaithful", "betray", "betrayal", "traitor", "backstab", "backstabbing", "gossip", "slander", "insult",
	"mock", "mocking", "ridicule", "ridiculing", "criticize", "criticism", "condemn", "condemnation", "judge",
	"judgment", "prejudice", "prejudiced", "discriminate", "discrimination"];

const urlExtensions = [
	"com", "org", "net", "info", "biz", "name", "pro", "edu", "gov", "mil",
	"app", "dev", "tech", "xyz", "online", "site", "store", "website", "space", "cloud",
	"digital", "media", "design", "solutions", "systems", "network", "company", "group",
	"guru", "ninja", "photography", "marketing", "finance", "health", "law", "travel",
	"music", "movie", "games", "chat", "blog", "news", "social", "video", "tv", "radio",
	"us", "uk", "ca", "de", "fr", "au", "in", "cn", "jp", "br", "ru", "za", "it", "es",
	"nl", "se", "no", "fi", "dk", "pl", "ch", "be", "mx", "kr", "tw", "hk", "sg", "ae",
	"eu", "asia", "africa", "lat", "cat", "scot", "bzh", "gal", "quebec", "rio",
	"arpa", "localhost", "onion", "test", "example", "invalid",
	"google", "microsoft", "amazon", "apple", "youtube", "bing", "chrome", "docs", "play",
	"pizza", "beer", "love", "fun", "cool", "zone", "rocks", "party", "club", "life"
];

const prayerTypes = [
	"healing",              // For physical, emotional, or spiritual health
	"provision",            // For financial needs, bills, or resources
	"guidance",             // For clarity in decisions or uncertain paths
	"thanksgiving",         // Expressing gratitude and appreciation
	"intercession",         // Praying on behalf of others
	"confession",           // For forgiveness and restoration
	"peace",                // For calm amid anxiety or conflict
	"urgent",               // In moments requiring immediate divine intervention
	"wisdom",               // When navigating complexity or confusion
	"comfort",              // In grief, loss, or heavy burdens
	"hope",                 // For resilience in dark seasons
	"strength",             // When feeling weak or overwhelmed
	"caregiver_support",    // For those caring for loved ones or patients
	"relationship",         // For reconciliation or deepening bonds
	"singleness",           // Support and purpose in solitary seasons
	"future",               // For direction, dreams, or long-term hopes
	"protection",           // Physical, emotional, or spiritual safety
	"breakthrough",         // When facing obstacles or persistent struggles
	"restoration",          // Renewal of what’s been broken or lost
	"praise"                // Exalting the divine, no requests-just reverence
];

const mistranslatedWordsArray = new Array();

mistranslatedWordsArray[0] = {
	"Abjects": {
		"translatedEnglish": "Despicable Persons / Outcasts",
		"hebrewOriginal": "נָכֶה (nakeh) – stricken, smitten",
		"greekOriginal": "κατάπτυστοι (katapystoi)",
		"greekMeaning": "Those held in contempt or misery",
		"greekAdditional": [
			"ἀτιμότατοι (atimotatoi) – most dishonored",
			"περιφρονημένοι (periphronēmenoi) – despised or scorned"
		],
		"kjv": "Abjects"
	},
	"Abode": {
		"translatedEnglish": "Stayed / Lived / Remained",
		"hebrewOriginal": "יָשַׁב (yashav)",
		"greekOriginal": "μένω (menō)",
		"greekMeaning": "To dwell or remain-not archaic lodging",
		"greekAdditional": [
			"μονή (monē) – a dwelling or abiding place",
			"κατοικέω (katoikeō) – to dwell permanently",
			"ἐνοικέω (enoikeō) – to dwell within"
		],
		"kjv": "Abode",
		"foundin": "Vine’s: 'Abide'; Strong’s: G3306 (μένω)"
	},
	"Abomination": {
		"translatedEnglish": "Detestable thing / Taboo",
		"hebrewOriginal": "תּוֹעֵבָה (to'evah)",
		"greekOriginal": "βδέλυγμα (bdelugma)",
		"greekMeaning": "That which is ritually/morally abhorrent",
		"greekAdditional": [
			"μίασμα (miasma) – defilement or pollution",
			"ἀκάθαρτον (akatharton) – unclean or impure"
		],
		"kjv": "Abomination",
		"foundin": "Vine’s: 'Abomination'; Strong’s: G946 (βδέλυγμα)"
	},
	"Adjure": {
		"translatedEnglish": "Command solemnly / Bind by oath",
		"hebrewOriginal": "שָׁבַע (shāvaʿ) – to swear",
		"greekOriginal": "ὁρκίζω (horkízō)",
		"greekMeaning": "To bind by oath or solemn charge",
		"greekAdditional": [
			"ἐξορκίζω (exorkízō) – to adjure forcefully",
			"διαμαρτύρομαι (diamartýromai) – to testify solemnly"
		],
		"kjv": "Adjure",
		"foundin": "Vine’s: 'Adjure'; Strong’s: G3726 (ὁρκίζω)"
	},
	"Adoption": {
		"translatedEnglish": "Placement as Sons / Legal Inheritance",
		"hebrewOriginal": null,
		"greekOriginal": "υἱοθεσία (huiothesia)",
		"greekMeaning": "Formal placement into sonship-not just taking in a child",
		"greekAdditional": [
			"κληρονομία (klēronomia) – inheritance tied to sonship",
			"τεκνοθεσία (teknothesia) – placement as children (rare)"
		],
		"kjv": "Adoption",
		"foundin": "Vine’s: 'Adoption'; Strong’s: G5206 (υἱοθεσία)"
	},
	"Adultery": {
		"translatedEnglish": "Covenant Betrayal / Marital Unfaithfulness",
		"hebrewOriginal": "נָאַף (na'af)",
		"greekOriginal": "μοιχεία (moicheia)",
		"greekMeaning": "Violation of covenant fidelity-not just physical act",
		"greekAdditional": [
			"παραβαίνω (parabainō) – to transgress or violate",
			"ἀσέβεια (asebeia) – irreverence or covenant breach"
		],
		"kjv": "Adultery",
		"foundin": "Vine’s: 'Adultery'; Strong’s: G3430 (μοιχεία)"
	},
	"Advertise": {
		"translatedEnglish": "Inform / Give notice",
		"hebrewOriginal": "הִגִּיד (higgīd) – to declare, inform",
		"greekOriginal": "ἀναγγέλλω (anangéllō)",
		"greekMeaning": "To announce or report",
		"greekAdditional": [
			"δηλόω (dēlóō) – to make clear",
			"καταγγέλλω (katangéllō) – to proclaim"
		],
		"kjv": "Advertise"
	},
	"Ague": {
		"translatedEnglish": "Fever / Shaking illness",
		"hebrewOriginal": "קַדַּחַת (qaddaḥat) – burning fever",
		"greekOriginal": "πυρετός (pyretós)",
		"greekMeaning": "Fever or heat illness",
		"greekAdditional": [
			"φλόγωσις (phlógōsis) – inflammation",
			"πυρέσσω (pyréssō) – to burn with fever"
		],
		"kjv": "Ague",
		"foundin": "Strong’s: H6920 (qaddaḥat)"
	},
	"Algum": {
		"translatedEnglish": "Exotic timber imported for construction",
		"hebrewOriginal": "אַלְגּוּמִּים (algummîm) – algum wood",
		"greekOriginal": "ξύλον πολύτιμον (xylon polýtimon)",
		"greekMeaning": "Precious or valuable wood; timber used for sacred or royal construction",
		"greekAdditional": [
			"ξύλον ἐκλελεκτόν (xylon eklelekton) – select wood",
			"σάνδαλον (sándalon) – sandalwood (rare, aromatic timber)",
			"δομικός ξύλος (domikós xýlos) – structural timber"
		],
		"kjv": "Algum",
		"foundin": "Strong’s: H418 (algummîm)"
	},
	"Almsdeeds": {
		"translatedEnglish": "Acts of Charity / Giving to the Poor",
		"hebrewOriginal": "צְדָקָה (tzedakah)",
		"greekOriginal": "ἐλεημοσύνη (eleēmosynē)",
		"greekMeaning": "Mercy shown through giving",
		"greekAdditional": [
			"ἔλεος (eleos) – mercy",
			"φιλανθρωπία (philanthrōpia) – benevolence"
		],
		"kjv": "Almsdeeds",
		"foundin": "Vine’s: 'Alms'; Strong’s: G1654 (ἐλεημοσύνη)"
	},
	"Altar": {
		"translatedEnglish": "Place of Sacrifice / Dedication / Covenant Exchange",
		"hebrewOriginal": "מִזְבֵּחַ (mizbeach)",
		"greekOriginal": "θυσιαστήριον (thysiastērion)",
		"greekMeaning": "Place of offering-not just ritual furniture",
		"greekAdditional": [
			"βωμός (bōmos) – raised place of offering (classical)",
			"προσφορά (prosphora) – offering or gift brought forward"
		],
		"kjv": "Altar",
		"foundin": "Vine’s: 'Altar'; Strong’s: G2379 (θυσιαστήριον)"
	},
	"Ambassador": {
		"translatedEnglish": "Representative / Envoy / Messenger",
		"hebrewOriginal": "צִיר (tsir)",
		"greekOriginal": "πρεσβεύω (presbeuō)",
		"greekMeaning": "One who speaks on behalf of another-not just diplomat",
		"greekAdditional": [
			"ἀπόστολος (apostolos) – one sent with authority",
			"ἄγγελος (angelos) – messenger (contextual)"
		],
		"kjv": "Ambassador",
		"foundin": "Vine’s: 'Ambassador'; Strong’s: G4243 (πρεσβεύω)"
	},
	"Ambassage": {
		"translatedEnglish": "Delegation / Embassy",
		"hebrewOriginal": "צִירִים (tsirim) – envoys, messengers",
		"greekOriginal": "πρεσβεία (presbeía)",
		"greekMeaning": "Embassy or official delegation",
		"greekAdditional": [
			"πρεσβευτής (presbeutḗs) – ambassador",
			"ἀποστολή (apostolḗ) – sending, mission"
		],
		"kjv": "Ambassage",
		"foundin": "Strong’s: G4240 (πρεσβεία)"
	},
	"Amerce": {
		"translatedEnglish": "Fine / Penalize monetarily",
		"hebrewOriginal": "עָנַשׁ (ʿānash) – to punish, impose penalty",
		"greekOriginal": "ζημιόω (zēmióō)",
		"greekMeaning": "To punish or exact a financial penalty",
		"greekAdditional": [
			"κολάζω (kolázō) – to chastise",
			"ἐπιβάλλω (epibállō) – to impose"
		],
		"kjv": "Amerce",
		"foundin": "Strong’s: G2210 (ζημιόω)"
	},
	"Anoint": {
		"translatedEnglish": "Consecrate / Empower / Set Apart",
		"hebrewOriginal": "מָשַׁח (mashach)",
		"greekOriginal": "χρίω (chriō)",
		"greekMeaning": "To smear or consecrate for divine purpose-not just apply oil",
		"greekAdditional": [
			"χρῖσμα (chrisma) – anointing or consecrated gift",
			"ἁγιάζω (hagiazo) – to sanctify or set apart"
		],
		"kjv": "Anoint",
		"foundin": "Vine’s: 'Anoint'; Strong’s: G5548 (χρίω)"
	},
	"Anon": {
		"translatedEnglish": "Immediately / At once",
		"hebrewOriginal": "מִיָּד (miyyād) – instantly",
		"greekOriginal": "εὐθύς (euthýs)",
		"greekMeaning": "Immediately, straightway",
		"greekAdditional": [
			"παραχρῆμα (parachrēma) – instantly",
			"τάχα (tácha) – quickly"
		],
		"kjv": "Anon",
		"foundin": "Strong’s: G2112 (εὐθύς)"
	},

	"Apothecary": {
		"translatedEnglish": "Perfumer / Compounder of oils",
		"hebrewOriginal": "רֹקֵחַ (roqēaḥ) – perfumer",
		"greekOriginal": "μυρεψός (myrepsós)",
		"greekMeaning": "One who mixes ointments or perfumes",
		"greekAdditional": [
			"φαρμακοπώλης (pharmakopṓlēs) – druggist",
			"ἀλείπτης (aleíptēs) – anointer"
		],
		"kjv": "Apothecary",
		"foundin": "Strong’s: H7543 (רֹקֵחַ)"
	},
	"Appertain": {
		"translatedEnglish": "Belong / Relate to",
		"hebrewOriginal": "נָגַע (nāgaʿ) – to touch, reach toward",
		"greekOriginal": "ἀνήκω (anḗkō)",
		"greekMeaning": "To pertain or be appropriate to",
		"greekAdditional": [
			"συγγενής (syngenḗs) – related",
			"προσήκει (prosḗkei) – it is fitting"
		],
		"kjv": "Appertain",
		"foundin": "Strong’s: G4337 (ἀνήκω)"
	},
	"Appertaineth": {
		"translatedEnglish": "Belongs to / Is associated with",
		"hebrewOriginal": "שָׁיֵךְ (shayekh) – belongs to",
		"greekOriginal": "προσήκει (prosēkei)",
		"greekMeaning": "To be fitting or appropriate to; to pertain",
		"greekAdditional": [
			"ἀνήκει (anēkei) – to belong to",
			"συγκαταλέγω (synkatalégō) – to be counted among"
		],
		"kjv": "Appertaineth",
		"foundin": "Strong’s: G4337 (ἀνήκω)"
	},
	"Armhole": {
		"translatedEnglish": "Armpit / Hollow under the arm",
		"hebrewOriginal": "בֵּית־הַזְּרוֹעַ (bēt-ha-zeroaʿ) – arm cavity",
		"greekOriginal": "μασχάλη (maschálē)",
		"greekMeaning": "Armpit",
		"greekAdditional": [
			"ὑποβραχιόνιον (hypobrachiónion) – underarm",
			"βραχίων (brachíōn) – arm"
		],
		"kjv": "Armhole",
		"foundin": "Strong’s: H2220 (זְרוֹעַ)"
	},
	"Armlet": {
		"translatedEnglish": "Ornamental band worn on the arm",
		"hebrewOriginal": "צָמִיד (tsāmīd) – bracelet, clasp",
		"greekOriginal": "περιβραχιόνιον (peribrachiốnion)",
		"greekMeaning": "Arm‑encircling ornament",
		"greekAdditional": [
			"ψέλιον (psélion) – bracelet",
			"ἐπίβραχιον (epíbrakhion) – arm‑band"
		],
		"kjv": "Armlet",
		"foundin": "Strong’s: H6781 (צָמִיד)"
	},
	"Artillery": {
		"translatedEnglish": "Equipment / Baggage / Gear",
		"hebrewOriginal": "כֵּלִים (kēlim)",
		"greekOriginal": "σκευή (skeuē)",
		"greekMeaning": "Implements/gear—does not mean cannons or heavy guns",
		"greekAdditional": [
			"σκευή (skeuē) – equipment or vessel",
			"ὅπλον (hoplon) – tool or weapon (contextual)"
		],
		"kjv": "Artillery",
		"foundin": "Strong’s: H3627 (כֵּלִים)"
	},
	"Assay": {
		"translatedEnglish": "Attempt / Try / Test",
		"hebrewOriginal": "נִסָּה (nissāh) – to test, try",
		"greekOriginal": "πειράζω (peirázō)",
		"greekMeaning": "To try or make an attempt",
		"greekAdditional": [
			"δοκιμάζω (dokimázō) – to examine or prove",
			"ἐπιχειρέω (epicheiréō) – to undertake"
		],
		"kjv": "Assay",
		"foundin": "Vine’s: 'Assay'; Strong’s: G3985 (πειράζω)"
	},
	"Assayed": {
		"translatedEnglish": "Attempted / Tried / Planned",
		"hebrewOriginal": "נִסָּה (nissah) [contextual]",
		"greekOriginal": "πειράζω (peirazō), ἐπιχειρέω (epicheireō)",
		"greekMeaning": "To try or undertake-not chemical testing",
		"greekAdditional": [
			"δοκιμάζω (dokimazō) – to test or examine for approval",
			"προσπαθέω (prospathēō) – to make an effort or attempt"
		],
		"kjv": "Assayed",
		"foundin": "Strong’s: G3985 (πειράζω)"
	},
	"Assupim": {
		"translatedEnglish": "Storehouses / Threshold chambers",
		"hebrewOriginal": "אֲסוּפִים (ʾasūpîm) – gatherings, enclosures",
		"greekOriginal": "ἀποθήκη (apothḗkē)",
		"greekMeaning": "Storehouse or repository",
		"greekAdditional": [
			"θησαυρός (thēsaurós) – treasury",
			"πύλη (pýlē) – gate chamber"
		],
		"kjv": "Assupim",
		"foundin": "Strong’s: H624 (אֲסוּפִים)"
	},

	"Atonement": {
		"translatedEnglish": "Reconciliation / Covering",
		"hebrewOriginal": "כַּפָּרָה (kapparah)",
		"greekOriginal": "καταλλαγή (katallagē)",
		"greekMeaning": "Restoration of relationship-not just payment or appeasement",
		"greekAdditional": [
			"ἱλασμός (hilasmos) – atoning sacrifice",
			"ἱλαστήριον (hilastērion) – mercy seat or place of atonement"
		],
		"kjv": "Atonement",
		"foundin": "Vine’s: 'Atonement'; Strong’s: G2643 (καταλλαγή)"
	},
	"Averter": {
		"translatedEnglish": "Protective or deflecting object",
		"hebrewOriginal": "קָמֵעַ (qame'a)",
		"greekOriginal": "ἀποτρόπαιον (apotrópaion)",
		"greekMeaning": "Object to ward off harm or evil",
		"greekAdditional": [
			"περίαπτον (periápton) – amulet",
			"φυλακτήριον (phylaktērion) – protective case or charm",
			"ἀλεξίκακος (alexikakos) – warder-off of evil"
		],
		"kjv": "Averter"
	},
	"Awful": {
		"translatedEnglish": "Full of awe / Reverent",
		"hebrewOriginal": "נּוֹרָא (nora)",
		"greekOriginal": "φόβος (phobos)",
		"greekMeaning": "A sense of reverent fear or awe-not something terrible or bad",
		"greekAdditional": [
			"σεβαστός (sebastos) – revered or majestic",
			"δέος (deos) – awe or wonder"
		],
		"kjv": "Awful",
		"foundin": "Strong’s: G5401 (φόβος)"
	},
	"Backsliding": {
		"translatedEnglish": "Turning Away / Covenant Breach / Apostasy",
		"hebrewOriginal": "מְשׁוּבָה (meshubah)",
		"greekOriginal": "ἀποστασία (apostasia)",
		"greekMeaning": "Departure from covenant-not mere moral lapse",
		"greekAdditional": [
			"παραπίπτω (parapiptō) – to fall aside or deviate",
			"ἀπολείπω (apoleipō) – to abandon or forsake"
		],
		"kjv": "Backsliding",
		"foundin": "Strong’s: G646 (ἀποστασία)"
	},
	"Bakemeats": {
		"translatedEnglish": "Baked goods / Pastries",
		"hebrewOriginal": "מַאֲפֶה (maʾăpēh) – baked item",
		"greekOriginal": "ἄρτος ὀπτός (ártos optós)",
		"greekMeaning": "Baked bread or pastry",
		"greekAdditional": [
			"πλακούντας (plakoúntas) – cakes",
			"ἐγκρυφίας (engryphías) – hidden cakes"
		],
		"kjv": "Bakemeats",
		"foundin": "Strong’s: H4643 (מַאֲפֶה)"
	},
	"Banqueting": {
		"translatedEnglish": "Drinking parties",
		"hebrewOriginal": "מִשְׁתֶּה (mishteh)",
		"greekOriginal": "πότος (potos)",
		"greekMeaning": "Carousing-focused feasts",
		"greekAdditional": [
			"συμπόσιον (symposion) – drinking gathering or feast",
			"εὐωχία (euōchia) – luxurious banquet"
		],
		"kjv": "Banqueting",
		"foundin": "Strong’s: G4210 (πότος)"
	},
	"Baptize": {
		"translatedEnglish": "Immerse / Submerge",
		"hebrewOriginal": "טָבַל (taval)",
		"greekOriginal": "βαπτίζω (baptizō)",
		"greekMeaning": "To fully dip or immerse-not merely sprinkle or symbolically wash",
		"greekAdditional": [
			"καθαρίζω (katharizō) – to cleanse or purify",
			"ἐνδύω (endyō) – to be clothed (figurative immersion)"
		],
		"kjv": "Baptize",
		"foundin": "Vine’s: 'Baptism'; Strong’s: G907 (βαπτίζω)"
	},
	"BarleyCake": {
		"translatedEnglish": "Loaf made of barley meal",
		"hebrewOriginal": "צְלִיל לֶחֶם (tselil lechem) – flat loaf",
		"greekOriginal": "κριθίνη (krithínē)",
		"greekMeaning": "Of or made from barley",
		"greekAdditional": [
			"ἄρτος (ártos) – bread",
			"κολλύριον (kollýrion) – small loaf"
		],
		"kjv": "Barley Cake",
		"foundin": "Strong’s: G2916 (κριθίνη)"
	},

	"Battlement": {
		"translatedEnglish": "Parapet / Defensive wall top",
		"hebrewOriginal": "מַעֲקֶה (maʿăqeh) – railing, guard",
		"greekOriginal": "περίτειχος (períteichos)",
		"greekMeaning": "A surrounding wall; outer defensive structure",
		"greekAdditional": [
			"παραπέτασμα (parapétasma) – curtain or covering, metaphorically used for protective barriers",
			"τεῖχος (teîchos) – wall, especially of a city or fortress",
			"ἀντιτείχισμα (antiteíkhisma) – counter-wall or rampart",
			"ὑπερτείχισμα (hyperteíkhisma) – elevated wall or battlement"
		],
		"kjv": "Battlement",
		"foundin": "Strong’s: H4624 (מַעֲקֶה)"
	},
	"Beeves": {
		"translatedEnglish": "Cattle / Oxen",
		"hebrewOriginal": "בָּקָר (bāqār) – herd animals",
		"greekOriginal": "βοῦς (boûs)",
		"greekMeaning": "Ox or cattle",
		"greekAdditional": [
			"κτῆνος (ktēnos) – beast of burden",
			"ἡμέριος βοῦς (hēmérios boûs) – domesticated ox"
		],
		"kjv": "Beeves",
		"foundin": "Strong’s: H1241 (בָּקָר)"
	},
	"Begat": {
		"translatedEnglish": "Fathered / Brought Forth / Produced",
		"hebrewOriginal": "יָלַד (yalad)",
		"greekOriginal": "γεννάω (gennaō)",
		"greekMeaning": "To generate or give birth-not just male lineage",
		"greekAdditional": [
			"τίκτω (tiktō) – to bear or bring forth (often maternal)",
			"καρποφορέω (karpophoreō) – to bear fruit or produce outcome"
		],
		"kjv": "Begat",
		"foundin": "Vine’s: 'Begat'; Strong’s: G1080 (γεννάω)"
	},
	"Begged": {
		"translatedEnglish": "Pleaded / Implored / Requested Urgently",
		"hebrewOriginal": "הִתְחַנֵּן (hitchannen)",
		"greekOriginal": "δέομαι (deomai)",
		"greekMeaning": "To ask with urgency-not panhandling",
		"greekAdditional": [
			"παρακαλέω (parakaleō) – to urge or entreat",
			"ἱκετεύω (hiketeyō) – to supplicate or beg earnestly"
		],
		"kjv": "Begged",
		"foundin": "Strong’s: G1189 (δέομαι)"
	},
	"Begotten": {
		"translatedEnglish": "Brought forth / Generated",
		"hebrewOriginal": "יָלַד (yalad)",
		"greekOriginal": "γεννάω (gennaō)",
		"greekMeaning": "To give birth or originate-not just created",
		"greekAdditional": [
			"τίκτω (tiktō) – to bear or bring forth",
			"πρωτότοκος (prōtotokos) – firstborn"
		],
		"kjv": "Begotten",
		"foundin": "Vine’s: 'Only Begotten'; Strong’s: G3439 (μονογενής)"
	},
	"Behold": {
		"translatedEnglish": "Look / Pay Attention / Observe",
		"hebrewOriginal": "הִנֵּה (hinneh)",
		"greekOriginal": "ἰδού (idou)",
		"greekMeaning": "Call to attention-not poetic flourish",
		"greekAdditional": [
			"ἴδε (ide) – see! (imperative)",
			"θεάομαι (theaomai) – to gaze or behold with attention"
		],
		"kjv": "Behold",
		"foundin": "Vine’s: 'Behold'; Strong’s: G2400 (ἰδού)"
	},
	"Besom": {
		"translatedEnglish": "Broom / Sweeping tool",
		"hebrewOriginal": "מַטְאֵה (matʾēh) – broom, sweeping instrument",
		"greekOriginal": "σκούπα (skoúpa)",
		"greekMeaning": "Broom or sweeping tool",
		"greekAdditional": [
			"καθαρίζω (katharízō) – to cleanse",
			"ἐκκαθαίρω (ekkathaírō) – to purge"
		],
		"kjv": "Besom",
		"foundin": "Strong’s: H4292 (מַטְאֵה)"
	},
	"Betimes": {
		"translatedEnglish": "Early / Promptly",
		"hebrewOriginal": "שָׁכַם (shākham) – to rise early",
		"greekOriginal": "πρωΐ (prōḯ)",
		"greekMeaning": "Early in the day",
		"greekAdditional": [
			"ταχέως (tachéōs) – quickly",
			"εὐθὺς (euthùs) – immediately"
		],
		"kjv": "Betimes",
		"foundin": "Strong’s: H7925 (שָׁכַם)"
	}
};

mistranslatedWordsArray[1] = {
	"Bewray": {
		"translatedEnglish": "Reveal / Betray",
		"hebrewOriginal": "גָּלָה (gālāh) – to uncover, reveal",
		"greekOriginal": "προδίδωμι (prodídōmi)",
		"greekMeaning": "To betray or disclose",
		"greekAdditional": [
			"φανερόω (phaneróō) – to make manifest",
			"ἀποκαλύπτω (apokalýptō) – to unveil"
		],
		"kjv": "Bewray"
	},
	"Bewrayeth": {
		"translatedEnglish": "Reveals / Betrays",
		"hebrewOriginal": "גָּלָה (gālāh) – to uncover, reveal",
		"greekOriginal": "προδίδωμι (prodídōmi)",
		"greekMeaning": "To betray or expose",
		"greekAdditional": [
			"φανερόω (phaneróō) – to make manifest",
			"ἀποκαλύπτω (apokalýptō) – to unveil"
		],
		"kjv": "Bewrayeth"
	},
	"Bishoprick": {
		"translatedEnglish": "Office of a bishop / Overseership",
		"hebrewOriginal": "מִשְׁמֶרֶת (mishmeret) – charge, oversight",
		"greekOriginal": "ἐπισκοπή (episkopḗ)",
		"greekMeaning": "Office or oversight",
		"greekAdditional": [
			"ἐπίσκοπος (epískopos) – overseer",
			"διοίκησις (dioíkēsis) – administration"
		],
		"kjv": "Bishoprick",
		"foundin": "Vine’s: 'Bishop, Bishoprick'; Strong’s: G1984 (ἐπισκοπή)"
	},
	"Blains": {
		"translatedEnglish": "Inflamed Sores / Boils",
		"hebrewOriginal": "אֲבַעְבֻּעֹת (avaʿbuʿot)",
		"greekOriginal": "φλύκταινα (phlyktaina)",
		"greekMeaning": "Painful skin swellings",
		"greekAdditional": [
			"ἕλκος (helkos) – ulcer or sore",
			"πρήξις (prēxis) – swelling or inflammation"
		],
		"kjv": "Blains",
		"foundin": "Strong’s: H7822 (שְׁחִין אֲבַעְבֻּעֹת)"
	},
	"Blasphemy": {
		"translatedEnglish": "Defiant speech / Slander against God",
		"hebrewOriginal": "גִּדּוּף (gidduf)",
		"greekOriginal": "βλασφημία (blasphēmia)",
		"greekMeaning": "Speaking evil against sacred things-not just profanity",
		"greekAdditional": [
			"λοιδορία (loidoria) – abusive speech",
			"ἀσεβέω (asebeō) – to act irreverently"
		],
		"kjv": "Blasphemy",
		"foundin": "Vine’s: 'Blasphemy'; Strong’s: G988 (βλασφημία)"
	},
	"Bless": {
		"translatedEnglish": "Speak well of / Empower / Consecrate",
		"hebrewOriginal": "בָּרַךְ (barak)",
		"greekOriginal": "εὐλογέω (eulogeō)",
		"greekMeaning": "To speak good or empower, not just wish well",
		"greekAdditional": [
			"χαρίζομαι (charizomai) – to grant or bestow favor",
			"ἀγιάζω (hagiazō) – to consecrate or make holy"
		],
		"kjv": "Bless",
		"foundin": "Vine’s: 'Bless'; Strong’s: G2127 (εὐλογέω)"
	},
	"Blessed": {
		"translatedEnglish": "Favored / Happy / Approved by God",
		"hebrewOriginal": "בָּרוּךְ (baruch), אַשְׁרֵי (ashrei)",
		"greekOriginal": "μακάριος (makarios)",
		"greekMeaning": "Makarios: deeply satisfied or divinely approved-not just fortunate",
		"greekAdditional": [
			"εὐλογημένος (eulogēmenos) – spoken well of or praised",
			"χαριτόω (charitoō) – to grace or favor"
		],
		"kjv": "Blessed",
		"foundin": "Vine’s: 'Blessed'; Strong’s: G3107 (μακάριος)"
	},
	"Blood": {
		"translatedEnglish": "Life / Covenant Seal / Sacrificial Token",
		"hebrewOriginal": "דָּם (dam)",
		"greekOriginal": "αἷμα (haima)",
		"greekMeaning": "Symbol of life and covenant-not merely physical fluid",
		"greekAdditional": [
			"ζωή (zōē) – life (contextual parallel)",
			"θυσία (thysia) – sacrifice or offering"
		],
		"kjv": "Blood",
		"foundin": "Vine’s: 'Blood'; Strong’s: G129 (αἷμα)"
	},

	"Bloodline": {
		"translatedEnglish": "Lineage / Heritage / Covenant Descent",
		"hebrewOriginal": "זֶרַע (zera)",
		"greekOriginal": "σπέρμα (sperma)",
		"greekMeaning": "Seed or offspring-not just genetics",
		"greekAdditional": [
			"γένος (genos) – race or kind",
			"καταγωγή (katagōgē) – descent or origin"
		],
		"kjv": "Seed",
		"foundin": "Vine’s: 'Seed'; Strong’s: G4690 (σπέρμα)"
	},
	"Bolled": {
		"translatedEnglish": "In bud / Blossomed",
		"hebrewOriginal": "גָּבַהּ (gāvah) – to grow tall, sprout",
		"greekOriginal": "βλαστάνω (blastánō)",
		"greekMeaning": "To sprout or bud",
		"greekAdditional": [
			"ἀνθέω (anthéō) – to bloom",
			"φυτρώνω (phytrṓnō) – to shoot forth"
		],
		"kjv": "Bolled",
		"foundin": "Strong’s: H1392 (גָּבַהּ)"
	},
	"Bond": {
		"translatedEnglish": "Tie / Connection / Obligation",
		"hebrewOriginal": "קֶשֶׁר (qesher)",
		"greekOriginal": "σύνδεσμος (syndesmos)",
		"greekMeaning": "That which binds together-can be relational or spiritual",
		"greekAdditional": [
			"δεσμός (desmos) – chain or binding",
			"κοινωνία (koinōnia) – fellowship or shared connection"
		],
		"kjv": "Bond",
		"foundin": "Vine’s: 'Bond'; Strong’s: G4886 (σύνδεσμος)"
	},
	"Bondservant": {
		"translatedEnglish": "Slave by choice / Devoted servant",
		"hebrewOriginal": "עֶבֶד (eved)",
		"greekOriginal": "δοῦλος (doulos)",
		"greekMeaning": "One fully submitted to a master-not just hired help",
		"greekAdditional": [
			"ὑπηρέτης (hypēretēs) – under-rower or subordinate",
			"θεράπων (therapōn) – attendant or devoted follower"
		],
		"kjv": "Servant",
		"foundin": "Vine’s: 'Servant'; Strong’s: G1401 (δοῦλος)"
	},
	"Born Again": {
		"translatedEnglish": "Born from Above / Spiritually Rebegotten",
		"hebrewOriginal": "הִוָּלֵד מִלְמָעַל (hivaled milma'al)",
		"greekOriginal": "γεννηθῇ ἄνωθεν (gennēthē anōthen)",
		"greekMeaning": "Anōthen: from above—not merely a second physical birth",
		"greekAdditional": [
			"ἀναγέννησις (anagennēsis) – rebirth or regeneration",
			"καινὴ κτίσις (kainē ktisis) – new creation"
		],
		"kjv": "Born Again",
		"foundin": "Vine’s: 'Born Again'; Strong’s: G509 (ἄνωθεν)"
	},
	"Botch": {
		"translatedEnglish": "Boil / Ulcer",
		"hebrewOriginal": "שְׁחִין (sheḥīn) – inflammation, boil",
		"greekOriginal": "φλύκταινα (phlýktaina)",
		"greekMeaning": "Blister or boil",
		"greekAdditional": [
			"ἕλκος (hélkos) – sore, ulcer",
			"πληγή (plēgḗ) – wound, plague"
		],
		"kjv": "Botch",
		"foundin": "Strong’s: H7822 (שְׁחִין)"
	},
	"Bowels": {
		"translatedEnglish": "Deep compassion / Affection",
		"hebrewOriginal": "רַחֲמִים (rachamim)",
		"greekOriginal": "σπλάγχνα (splanchna)",
		"greekMeaning": "Seat of deep emotions; heartfelt compassion-not intestines",
		"greekAdditional": [
			"ἔλεος (eleos) – mercy or compassion",
			"συμπάθεια (sympatheia) – shared feeling or empathy"
		],
		"kjv": "Bowels",
		"foundin": "Vine’s: 'Bowels'; Strong’s: G4698 (σπλάγχνα)"
	},
	"Bray": {
		"translatedEnglish": "Pound / Beat",
		"hebrewOriginal": "דָּכָה (dākhāh) – to crush",
		"greekOriginal": "θλάω (thláō)",
		"greekMeaning": "To crush or pound",
		"greekAdditional": [
			"ῥαιβίζω (rhaibízō) – to beat violently",
			"συντρίβω (syntríbō) – to shatter"
		],
		"kjv": "Bray",
		"foundin": "Strong’s: H3817 (דָּכָה)"
	},
	"Breeches": {
		"translatedEnglish": "Short trousers / Covering for loins",
		"hebrewOriginal": "מִכְנָסַיִם (mikhnāsayim) – trousers",
		"greekOriginal": "ζώνη (zṓnē)",
		"greekMeaning": "Girdle or loin covering",
		"greekAdditional": [
			"περιζώννυμι (perizṓnnymi) – to gird",
			"ἐσώρουχα (esṓroucha) – undergarments"
		],
		"kjv": "Breeches",
		"foundin": "Strong’s: H4370 (מִכְנָסַיִם)"
	},

	"Brigandine": {
		"translatedEnglish": "Body Armor",
		"hebrewOriginal": "שִׁרְיֹן (shiryōn)",
		"greekOriginal": "θώραξ λέπιδας (thōrax lepidas)",
		"greekMeaning": "Coat of mail or scale armor",
		"greekAdditional": [
			"πανοπλία (panoplia) – full armor",
			"ὅπλον σώματος (hoplon sōmatos) – body weapon/armor"
		],
		"kjv": "Brigandine",
		"foundin": "Strong’s: H5630 (שִׁרְיֹן)"
	},
	"Broid": {
		"translatedEnglish": "Braided / Interwoven",
		"hebrewOriginal": "צָמַר (tsāmar) – to plait, braid",
		"greekOriginal": "πλέκω (plékō)",
		"greekMeaning": "To braid or weave",
		"greekAdditional": [
			"πλοκή (plokḗ) – interweaving",
			"συμπλέκω (symplékō) – entwine"
		],
		"kjv": "Broid"
	},
	"Bruit": {
		"translatedEnglish": "Report / Rumor",
		"hebrewOriginal": "שְׁמוּעָה (shemuʿāh) – report, tidings",
		"greekOriginal": "φήμη (phḗmē)",
		"greekMeaning": "Report or rumor",
		"greekAdditional": [
			"διάδοσις (diádosis) – dissemination",
			"ἀναφορά (anaphorá) – bringing news"
		],
		"kjv": "Bruit",
		"foundin": "Strong’s: H8052 (שְׁמוּעָה)"
	},
	"Bushel": {
		"translatedEnglish": "Measure for dry goods (container)",
		"hebrewOriginal": "אֵיפָה (ʾêfāh) – ephah, measure",
		"greekOriginal": "μόδιος (módios)",
		"greekMeaning": "Grain‑measuring container",
		"greekAdditional": [
			"μέτρον (métron) – measure",
			"ἀγγεῖον (angeîon) – vessel/container"
		],
		"kjv": "Bushel",
		"foundin": "Vine’s: 'Bushel'; Strong’s: G3426 (μόδιος)"
	},
	"Calling": {
		"translatedEnglish": "Invitation / Divine Summons / Purpose",
		"hebrewOriginal": "קָרָא (qara)",
		"greekOriginal": "κλῆσις (klēsis)",
		"greekMeaning": "Summons to identity or mission-not just career or role",
		"greekAdditional": [
			"πρόσκλησις (prosklēsis) – personal invitation",
			"φωνή (phōnē) – voice or call (contextual)"
		],
		"kjv": "Calling",
		"foundin": "Vine’s: 'Calling'; Strong’s: G2821 (κλῆσις)"
	},
	"Caul": {
		"translatedEnglish": "Membrane / Fat covering",
		"hebrewOriginal": "יֹתֶרֶת (yōteret) – appendage, fat layer",
		"greekOriginal": "ἐπίπλοον (epíploon)",
		"greekMeaning": "Membrane or fatty overlay",
		"greekAdditional": [
			"σάρξ (sárx) – flesh",
			"περιτόνιον (peritónion) – peritoneum"
		],
		"kjv": "Caul",
		"foundin": "Strong’s: H3508 (יֹתֶרֶת)"
	},
	"CenserDish": {
		"translatedEnglish": "Shallow pan for holding coals/incense",
		"hebrewOriginal": "כַּף (kap) – pan, hollow vessel",
		"greekOriginal": "θυίσκη (thyískē)",
		"greekMeaning": "Small vessel for burnt offerings or incense",
		"greekAdditional": [
			"θυμιατήριον (thymiatērion) – incense censer",
			"πυρείον (pyreíon) – fire‑holder"
		],
		"kjv": "Censer",
		"foundin": "Vine’s: 'Censer'; Strong’s: G2369 (θυμιατήριον)"
	},
	"Chalcedony": {
		"translatedEnglish": "Semi‑precious translucent quartz",
		"hebrewOriginal": "אֶבֶן חַלְקָה (even chalkah)",
		"greekOriginal": "χαλκηδών (chalkēdōn)",
		"greekMeaning": "Precious stone of bluish hue, used decoratively",
		"greekAdditional": [
			"λίθος (líthos) – stone",
			"σάρδιον (sárdion) – sard gemstone",
			"ἴασπις (iaspis) – jasper-like stone"
		],
		"kjv": "Chalcedony",
		"foundin": "Strong’s: G5472 (χαλκηδών)"
	},

	"Chamber": {
		"translatedEnglish": "Room",
		"hebrewOriginal": "חֶדֶר (cheder)",
		"greekOriginal": "ταμεῖον (tameion)",
		"greekMeaning": "Private room, not a legislative body",
		"greekAdditional": [
			"οἴκημα (oikēma) – dwelling or room",
			"κρυπτός (kryptos) – hidden or secret place"
		],
		"kjv": "Chamber",
		"foundin": "Strong’s: G5009 (ταμεῖον)"
	},
	"Chambering": {
		"translatedEnglish": "Sexual immorality (bed-hopping)",
		"hebrewOriginal": "מִשְׁכָּב זְנוּת (mishkav zenut)",
		"greekOriginal": "κοίτη (koitē)",
		"greekMeaning": "Sexual activity outside God’s design (literally 'bed')",
		"greekAdditional": [
			"ἀκαθαρσία (akatharsia) – impurity or uncleanness",
			"ἔρως (eros) – sensual desire (contextual)"
		],
		"kjv": "Chambering",
		"foundin": "Strong’s: G2845 (κοίτη)"
	},
	"Chamois": {
		"translatedEnglish": "Mountain goat / Wild animal",
		"hebrewOriginal": "זֶמֶר (zemer) – mountain goat",
		"greekOriginal": "δωροκάμηλος (dōrokámēlos)",
		"greekMeaning": "Wild goat or antelope",
		"greekAdditional": [
			"ἔλαφος (élaphos) – deer",
			"τραγέλαφος (tragélaphos) – goat-deer hybrid"
		],
		"kjv": "Chamois",
		"foundin": "Strong’s: H2169 (זֶמֶר)"
	},
	"Chapiter": {
		"translatedEnglish": "Capital (top of a pillar)",
		"hebrewOriginal": "כֹּתֶרֶת (kōteret) – crown, capital",
		"greekOriginal": "κιονόκρανον (kionókranon)",
		"greekMeaning": "Topmost part of a column",
		"greekAdditional": [
			"κορωνίς (korōnís) – ornamental top",
			"ἀκρωτήριον (akrotḗrion) – architectural finial"
		],
		"kjv": "Chapiter",
		"foundin": "Strong’s: H3805 (כֹּתֶרֶת)"
	},
	"Chapman": {
		"translatedEnglish": "Merchant / Trader",
		"hebrewOriginal": "רֹכֵל (rokhel)",
		"greekOriginal": "ἔμπορος (emporos)",
		"greekMeaning": "One engaged in trade or commerce",
		"greekAdditional": [
			"κάπηλος (kapēlos) – retailer, huckster"
		],
		"kjv": "Chapman",
		"foundin": "Strong’s: H7402 (רֹכֵל)"
	},
	"Charity": {
		"translatedEnglish": "Love / Benevolence / Covenant Loyalty",
		"hebrewOriginal": "חֶסֶד (chesed)",
		"greekOriginal": "ἀγάπη (agapē)",
		"greekMeaning": "Agapē: self-giving love-not merely almsgiving or kindness",
		"greekAdditional": [
			"φιλαδελφία (philadelphia) – brotherly love",
			"εὐσπλαγχνία (eusplagchnia) – compassion or tender mercy"
		],
		"kjv": "Charity",
		"foundin": "Vine’s: 'Charity'; Strong’s: G26 (ἀγάπη)"
	},
	"Chasten": {
		"translatedEnglish": "Discipline / Train",
		"hebrewOriginal": "יַסֵּר (yaser)",
		"greekOriginal": "παιδεύω (paideuō)",
		"greekMeaning": "To instruct or correct with love-not punish harshly",
		"greekAdditional": [
			"νουθετέω (noutheteō) – to admonish or instruct",
			"ἐλέγχω (elenchō) – to convict or correct"
		],
		"kjv": "Chasten",
		"foundin": "Vine’s: 'Chasten'; Strong’s: G3811 (παιδεύω)"
	},
	"Checker Work": {
		"translatedEnglish": "Lattice / Ornamental pattern",
		"hebrewOriginal": "שְׁבָצוֹת (shevatzōt) – inlaid work",
		"greekOriginal": "πλέγμα (plégma)",
		"greekMeaning": "Lattice or woven pattern",
		"greekAdditional": [
			"δικτύωμα (diktýōma) – netting",
			"σχῆμα (schēma) – form or pattern"
		],
		"kjv": "Checker Work",
		"foundin": "Strong’s: H7639 (שְׁבָצוֹת)"
	},
	"Chode": {
		"translatedEnglish": "Quarreled / Scolded",
		"hebrewOriginal": "רִיב (riv)",
		"greekOriginal": "διαμάχομαι (diamachomai)",
		"greekMeaning": "To contend or strive in anger",
		"greekAdditional": [
			"μάχομαι (machomai) – to fight or quarrel",
			"ἐνίσταμαι (enistamai) – to object or resist"
		],
		"kjv": "Chode",
		"foundin": "Strong’s: H6979 (קוֹט)"
	},

	"Chosen": {
		"translatedEnglish": "Selected for Purpose / Appointed",
		"hebrewOriginal": "בָּחַר (bachar)",
		"greekOriginal": "ἐκλέγομαι (eklegomai)",
		"greekMeaning": "Chosen for a role or mission-not exclusive salvation",
		"greekAdditional": [
			"προορίζω (proorizō) – to predetermine or appoint",
			"χειροτονέω (cheirotoneō) – to designate or ordain"
		],
		"kjv": "Chosen",
		"foundin": "Vine’s: 'Choose, Chosen'; Strong’s: G1586 (ἐκλέγομαι)"
	},
	"Chrysoprasus": {
		"translatedEnglish": "Golden‑green precious stone",
		"hebrewOriginal": "בָּרֶקֶת (bareqet)",
		"greekOriginal": "χρυσόπρασος (chrysóprasos)",
		"greekMeaning": "Gemstone of apple‑green hue with golden lustre",
		"greekAdditional": [
			"σμαράγδινος (smarágdinos) – emerald‑like",
			"λίθος (líthos) – stone"
		],
		"kjv": "Chrysoprasus",
		"foundin": "Strong’s: G5555 (χρυσόπρασος)"
	},
	"Clave": {
		"translatedEnglish": "Clung / Held Fast / Joined",
		"hebrewOriginal": "דָּבַק (dabaq)",
		"greekOriginal": "κολλάομαι (kollaomai)",
		"greekMeaning": "To adhere or be joined-not split or cut",
		"greekAdditional": [
			"προσκολλάομαι (proskollaomai) – to be glued to",
			"συνενούμαι (synenoumai) – to be joined or united with"
		],
		"kjv": "Clave",
		"foundin": "Strong’s: G2853 (κολλάομαι)"
	},
	"Clean": {
		"translatedEnglish": "Pure / Fit / Acceptable",
		"hebrewOriginal": "טָהוֹר (tahor)",
		"greekOriginal": "καθαρός (katharos)",
		"greekMeaning": "Ritually or morally acceptable-not sterile or sanitized",
		"greekAdditional": [
			"ἁγνός (hagnos) – morally pure or chaste",
			"ἁγιάζω (hagiazo) – to sanctify or make holy"
		],
		"kjv": "Clean",
		"foundin": "Vine’s: 'Clean'; Strong’s: G2513 (καθαρός)"
	},
	"Coast": {
		"translatedEnglish": "Region / Border",
		"hebrewOriginal": "גְּבוּל (gevul)",
		"greekOriginal": "ὅριον (horion)",
		"greekMeaning": "Territory or border, not seashore",
		"greekAdditional": [
			"περιοχή (periochē) – area or region",
			"χώρα (chōra) – land or district"
		],
		"kjv": "Coast",
		"foundin": "Strong’s: G3725 (ὅριον)"
	},
	"Collops": {
		"translatedEnglish": "Slices / Folds of Flesh",
		"hebrewOriginal": "חֶלֶב (ḥélev) – fat, especially the choicest portions",
		"greekOriginal": "πίμπρημι (pímprēmi)",
		"greekMeaning": "To swell or be fattened",
		"greekAdditional": [
			"σπλάγχνα (splánchna) – inward parts, often fatty organs",
			"πάχος (páchos) – thickness, fat",
			"κρέας (kréas) – flesh, meat"
		],
		"kjv": "Collops",
		"foundin": "Strong’s: H2459 (חֶלֶב)"
	},
	"Comfort": {
		"translatedEnglish": "Encourage / Strengthen",
		"hebrewOriginal": "נִחֵם (nicham)",
		"greekOriginal": "παρακαλέω (parakaleō)",
		"greekMeaning": "To come alongside and build up-not just soothe",
		"greekAdditional": [
			"στηρίζω (stērizō) – to support or establish",
			"παραμυθέομαι (paramytheomai) – to console or reassure"
		],
		"kjv": "Comfort",
		"foundin": "Vine’s: 'Comfort'; Strong’s: G3870 (παρακαλέω)"
	},
	"Comforter": {
		"translatedEnglish": "Advocate / Helper",
		"hebrewOriginal": "מְנַחֵם (menachem)",
		"greekOriginal": "παράκλητος (paraklētos)",
		"greekMeaning": "One called alongside to help-not just emotional comfort",
		"greekAdditional": [
			"συμπαραστάτης (symparastatēs) – supporter or companion",
			"βοηθός (boēthos) – helper or rescuer"
		],
		"kjv": "Comforter",
		"foundin": "Vine’s: 'Comforter'; Strong’s: G3875 (παράκλητος)"
	},
	"Communed": {
		"translatedEnglish": "Spoke With / Discussed / Shared Thoughts",
		"hebrewOriginal": "דָּבַר (davar)",
		"greekOriginal": "λαλέω (laleō), κοινωνέω (koinōneō)",
		"greekMeaning": "To converse or share-not mystical union",
		"greekAdditional": [
			"συζητέω (syzēteō) – to discuss or dispute together",
			"διαλέγομαι (dialegomai) – to engage in dialogue or reasoned exchange",
			"ὁμιλέω (homileō) – to associate or converse habitually"
		],
		"kjv": "Communed",
		"foundin": "Strong’s: G2980 (λαλέω)"
	},

	"Communication": {
		"translatedEnglish": "Sharing / Partnership (contextual)",
		"hebrewOriginal": "חֶבֶר (chever)",
		"greekOriginal": "κοινωνία (koinōnia) / λόγος (logos)",
		"greekMeaning": "Fellowship/financial sharing (Phil 4:15) or 'speech' (Eph 4:29)-not casual chat",
		"greekAdditional": [
			"μετοχή (metochē) – participation or sharing",
			"ῥῆμα (rhēma) – spoken word or utterance"
		],
		"kjv": "Communication",
		"foundin": "Vine’s: 'Communication'; Strong’s: G2842 (κοινωνία)"
	},
	"Communion": {
		"translatedEnglish": "Fellowship / Participation / Sharing",
		"hebrewOriginal": "חֶבְרָה (chevrah)",
		"greekOriginal": "κοινωνία (koinōnia)",
		"greekMeaning": "Shared participation (including material support)—not only a ritual",
		"greekAdditional": [
			"μετοχή (metochē) – sharing or partnership",
			"σύσσωμος (syssōmos) – united in one body"
		],
		"kjv": "Communion",
		"foundin": "Vine’s: 'Communion'; Strong’s: G2842 (κοινωνία)"
	},
	"Concision": {
		"translatedEnglish": "Mutilation (sarcastic for false circumcision)",
		"hebrewOriginal": "כְּרִיתוּת (keritut)",
		"greekOriginal": "κατατομή (katatomē)",
		"greekMeaning": "Cutting down; pejorative for legalistic circumcisers",
		"greekAdditional": [
			"περιτομή (peritomē) – circumcision (contrast)",
			"σχίσις (schisis) – division or cutting"
		],
		"kjv": "Concision",
		"foundin": "Vine’s: 'Concision'; Strong’s: G2699 (κατατομή)"
	},
	"Concourse": {
		"translatedEnglish": "Uproar / Mob gathering",
		"hebrewOriginal": "הָמוֹן (hamon)",
		"greekOriginal": "συστροφή (systrophē)",
		"greekMeaning": "A confused crowd; tumult—not a pedestrian walkway",
		"greekAdditional": [
			"θόρυβος (thorybos) – noise or uproar",
			"ὄχλος (ochlos) – crowd or multitude"
		],
		"kjv": "Concourse",
		"foundin": "Strong’s: G4958 (συστροφή)"
	},
	"Concupiscence": {
		"translatedEnglish": "Strong desire / Lust",
		"hebrewOriginal": "תַּאֲוָה (ta'avah)",
		"greekOriginal": "ἐπιθυμία (epithymia)",
		"greekMeaning": "Craving/longing, often sexual; not inherently evil unless misdirected",
		"greekAdditional": [
			"πάθος (pathos) – passion or emotion",
			"ἔντονος πόθος (entonos pothos) – intense longing"
		],
		"kjv": "Concupiscence",
		"foundin": "Vine’s: 'Concupiscence'; Strong’s: G1939 (ἐπιθυμία)"
	},
	"Condemnation": {
		"translatedEnglish": "Judicial Sentence / Verdict / Separation",
		"hebrewOriginal": "עָוֹן (avon) [contextual]",
		"greekOriginal": "κατάκριμα (katakrima)",
		"greekMeaning": "Katakrima: a final verdict-not just disapproval",
		"greekAdditional": [
			"κρίμα (krima) – judgment or decision",
			"ἀποδοκιμασία (apodokimasia) – rejection or disqualification"
		],
		"kjv": "Condemnation",
		"foundin": "Vine’s: 'Condemnation'; Strong’s: G2631 (κατάκριμα)"
	},
	"Confectionaries": {
		"translatedEnglish": "Perfumers",
		"hebrewOriginal": "רָקַח (raqach)",
		"greekOriginal": "μυρεψός (myrepsos)",
		"greekMeaning": "Makers of aromatic oils—not dessert makers",
		"greekAdditional": [
			"μύρον (myron) – fragrant ointment or perfume",
			"ἀλείφω (aleiphō) – to anoint or apply oil"
		],
		"kjv": "Confectionaries",
		"foundin": "Strong’s: H7543 (רָקַח)"
	},
	"Conscience": {
		"translatedEnglish": "Moral awareness before God",
		"hebrewOriginal": "לֵב (lev) - heart/conscience concept",
		"greekOriginal": "συνείδησις (syneidēsis)",
		"greekMeaning": "Internal moral witness-not mere 'opinions'",
		"greekAdditional": [
			"καρδία (kardia) – heart or inner being",
			"φρόνημα (phronēma) – mindset or moral inclination"
		],
		"kjv": "Conscience",
		"foundin": "Vine’s: 'Conscience'; Strong’s: G4893 (συνείδησις)"
	},
	"Conversation": {
		"translatedEnglish": "Conduct / Way of Life / Behavior",
		"hebrewOriginal": "דֶּרֶךְ (derekh)",
		"greekOriginal": "ἀναστροφή (anastrophē)",
		"greekMeaning": "Anastrophē: lifestyle or manner of living-not verbal speech",
		"greekAdditional": [
			"πολιτεία (politeia) – citizenship or way of life",
			"περιφορά (periphorā) – conduct or behavior"
		],
		"kjv": "Conversation",
		"foundin": "Vine’s: 'Conversation'; Strong’s: G391 (ἀναστροφή)"
	},

	"Corn": {
		"translatedEnglish": "Grain",
		"hebrewOriginal": "דָּגָן (dagan)",
		"greekOriginal": "σῖτος (sitos)",
		"greekMeaning": "Wheat or grain, not maize",
		"greekAdditional": [
			"στάχυς (stachys) – ear of grain",
			"τροφή (trophē) – nourishment or food"
		],
		"kjv": "Corn",
		"foundin": "Strong’s: G4621 (σῖτος)"
	},
	"Cornice": {
		"translatedEnglish": "Decorative upper moulding",
		"hebrewOriginal": "עִטּוּר עֶלְיוֹן (ittur elyon)",
		"greekOriginal": "γεῖσον (geîson)",
		"greekMeaning": "Projecting moulding at top of a wall or column",
		"greekAdditional": [
			"κορώνη (korṓnē) – crown moulding",
			"ἐπιστέγασμα (epistégasma) – upper covering",
			"ἀκρωτήριον (akrōtērion) – architectural finial"
		],
		"kjv": "Cornice"
	},
	"Covenant": {
		"translatedEnglish": "Agreement / Divine contract",
		"hebrewOriginal": "בְּרִית (berit)",
		"greekOriginal": "διαθήκη (diathēkē)",
		"greekMeaning": "A binding arrangement initiated by God-not merely a promise",
		"greekAdditional": [
			"συνθήκη (synthēkē) – mutual agreement",
			"ὅρκος (horkos) – oath or solemn pledge"
		],
		"kjv": "Covenant",
		"foundin": "Vine’s: 'Covenant'; Strong’s: G1242 (διαθήκη)"
	},
	"Covetousness": {
		"translatedEnglish": "Greedy grasping / Avarice",
		"hebrewOriginal": "חָמַד (chamad) / בֶּצַע (betza')",
		"greekOriginal": "πλεονεξία (pleonexia)",
		"greekMeaning": "Insatiable desire to have more at others’ expense",
		"greekAdditional": [
			"φιλαργυρία (philargyria) – love of money",
			"ἐπιθυμία (epithymia) – craving or lust"
		],
		"kjv": "Covetousness",
		"foundin": "Vine’s: 'Covetousness'; Strong’s: G4124 (πλεονεξία)"
	},
	"Cross": {
		"translatedEnglish": "Execution Stake / Symbol of Suffering and Triumph",
		"hebrewOriginal": "עֵץ (etz)",
		"greekOriginal": "σταυρός (stauros)",
		"greekMeaning": "Stauros: upright stake—not necessarily a two-beam cross",
		"greekAdditional": [
			"ξύλον (xylon) – wood or tree (used metaphorically)",
			"πάθημα (pathēma) – suffering or affliction"
		],
		"kjv": "Cross",
		"foundin": "Vine’s: 'Cross'; Strong’s: G4716 (σταυρός)"
	},
	"Cruse": {
		"translatedEnglish": "Small Jar / Flask",
		"hebrewOriginal": "צַפַּחַת (tsappachat)",
		"greekOriginal": "ἀλάβαστρον (alabastron)",
		"greekMeaning": "Container for liquids, often oil",
		"greekAdditional": [
			"ἀγγεῖον (angeion) – vessel or container",
			"φιάλη (phialē) – flask or bowl"
		],
		"kjv": "Cruse",
		"foundin": "Strong’s: H6835 (צַפַּחַת)"
	},
	"Cumbered": {
		"translatedEnglish": "Distracted / Burdened",
		"hebrewOriginal": "טֹרַח (torach)",
		"greekOriginal": "περισπάω (perispaō)",
		"greekMeaning": "Pulled away mentally or physically with cares",
		"greekAdditional": [
			"βαρέω (bareō) – to weigh down",
			"φορτίζω (phortizō) – to load with a burden"
		],
		"kjv": "Cumbered",
		"foundin": "Strong’s: G4049 (περισπάω)"
	},
	"Curse": {
		"translatedEnglish": "Speak harm / Bind / Denounce",
		"hebrewOriginal": "אָרַר (arar)",
		"greekOriginal": "καταράομαι (kataraomai)",
		"greekMeaning": "To speak harm or bind, not just use bad language",
		"greekAdditional": [
			"ἀνάθεμα (anathema) – something devoted to destruction",
			"ἐπικατάρατος (epikataratos) – accursed or condemned"
		],
		"kjv": "Curse",
		"foundin": "Vine’s: 'Curse'; Strong’s: G2672 (καταράομαι)"
	},

	"Cymbal": {
		"translatedEnglish": "Resonant metal percussion instrument",
		"hebrewOriginal": "צְלָצַל (tselātsal) – clanging instrument",
		"greekOriginal": "κύμβαλον (kýmbalon)",
		"greekMeaning": "Hollow metal vessel producing sharp sound",
		"greekAdditional": [
			"χαλκεῖον (chalkeîon) – bronze vessel",
			"ἐχάλαζεν (echálazen) – to ring or resound"
		],
		"kjv": "Cymbal",
		"foundin": "Strong’s: G2950 (κύμβαλον)"
	},
	"Damnation": {
		"translatedEnglish": "Judgment / Condemnation",
		"hebrewOriginal": "דִּין (din) / מִשְׁפָּט (mishpat)",
		"greekOriginal": "κρίσις (krisis) / κατάκριμα (katakrima)",
		"greekMeaning": "Adverse judgment or sentence; context determines severity/duration",
		"greekAdditional": [
			"ἀπώλεια (apōleia) – ruin or destruction",
			"καταδίκη (katadikē) – conviction or sentence"
		],
		"kjv": "Damnation",
		"foundin": "Vine’s: 'Damnation'; Strong’s: G2631 (κατάκριμα)"
	},
	"Darkness": {
		"translatedEnglish": "Ignorance / Evil / Separation",
		"hebrewOriginal": "חֹשֶׁךְ (choshech)",
		"greekOriginal": "σκότος (skotos)",
		"greekMeaning": "Absence of divine truth-not merely lack of light",
		"greekAdditional": [
			"ἀγνωσία (agnōsia) – ignorance or lack of knowledge",
			"ἀνομία (anomia) – lawlessness or rebellion"
		],
		"kjv": "Darkness",
		"foundin": "Vine’s: 'Darkness'; Strong’s: G4655 (σκότος)"
	},
	"Deliver": {
		"translatedEnglish": "Rescue / Set free",
		"hebrewOriginal": "הִצִּיל (hitzil), פָּדָה (padah)",
		"greekOriginal": "ῥύομαι (rhyomai)",
		"greekMeaning": "To snatch from danger-not just hand over",
		"greekAdditional": [
			"σῴζω (sōzō) – to save or preserve",
			"ἐξαιρέω (exaireō) – to take out or remove"
		],
		"kjv": "Deliver",
		"foundin": "Vine’s: 'Deliver'; Strong’s: G4506 (ῥύομαι)"
	},
	"Devil": {
		"translatedEnglish": "Accuser / Slanderer",
		"hebrewOriginal": "שָׂטָן (satan)",
		"greekOriginal": "διάβολος (diabolos)",
		"greekMeaning": "One who throws accusations-not a horned creature",
		"greekAdditional": [
			"πνεῦμα πονηρόν (pneuma ponēron) – evil spirit",
			"ἀντικείμενος (antikeimenos) – adversary or opposer"
		],
		"kjv": "Devil",
		"foundin": "Vine’s: 'Devil'; Strong’s: G1228 (διάβολος)"
	},
	"Disciple": {
		"translatedEnglish": "Learner / Follower / Apprentice",
		"hebrewOriginal": "תַּלְמִיד (talmid)",
		"greekOriginal": "μαθητής (mathētēs)",
		"greekMeaning": "One who learns by following-not merely a convert",
		"greekAdditional": [
			"ἀκολουθέω (akoloutheō) – to follow or accompany",
			"διδασκόμενος (didaskomenos) – one being taught"
		],
		"kjv": "Disciple",
		"foundin": "Vine’s: 'Disciple'; Strong’s: G3101 (μαθητής)"
	},
	"Dispensation": {
		"translatedEnglish": "Stewardship / Administration",
		"hebrewOriginal": "פְּקֻדָּה (pequddah)",
		"greekOriginal": "οἰκονομία (oikonomia)",
		"greekMeaning": "Household management/entrusted administration—not inherently a time-period system",
		"greekAdditional": [
			"διαχείρισις (diacheirisis) – handling or management",
			"ἐπιτροπή (epitropē) – oversight or stewardship"
		],
		"kjv": "Dispensation",
		"foundin": "Vine’s: 'Dispensation'; Strong’s: G3622 (οἰκονομία)"
	},
	"Dissimulation": {
		"translatedEnglish": "Hypocrisy / Pretense",
		"hebrewOriginal": "חֲנֵפָה (chanephah)",
		"greekOriginal": "ὑπόκρισις (hypokrisis)",
		"greekMeaning": "Playing a role; insincere conformity",
		"greekAdditional": [
			"πλαστότης (plastotēs) – falseness or fabrication",
			"προσποίησις (prospoiēsis) – feigned behavior"
		],
		"kjv": "Dissimulation",
		"foundin": "Vine’s: 'Dissimulation'; Strong’s: G5272 (ὑπόκρισις)"
	},
	"Divers": {
		"translatedEnglish": "Various / Different kinds",
		"hebrewOriginal": "שֹׁנִים (shonim), מִשְׁתַּנֶּה (mishtaneh)",
		"greekOriginal": "ποικίλος (poikilos)",
		"greekMeaning": "Multifaceted-not underwater explorers",
		"greekAdditional": [
			"διάφορος (diaphoros) – differing or distinct",
			"ἑτερόκλητος (heteroklētos) – of mixed kinds"
		],
		"kjv": "Divers",
		"foundin": "Vine’s: 'Divers'; Strong’s: G4164 (ποικίλος)"
	},

	"Dominion": {
		"translatedEnglish": "Rule / Stewardship / Authority",
		"hebrewOriginal": "רָדָה (radah)",
		"greekOriginal": "κυριότης (kyriotēs)",
		"greekMeaning": "Right to govern-not oppressive control",
		"greekAdditional": [
			"ἐξουσία (exousia) – delegated authority or right",
			"ἄρχω (archō) – to lead or govern"
		],
		"kjv": "Dominion",
		"foundin": "Vine’s: 'Dominion'; Strong’s: G2963 (κυριότης)"
	},
	"Draught": {
		"translatedEnglish": "Toilet / Waste Place (in some contexts) or Drink",
		"hebrewOriginal": "מָקוֹם (maqom) – place (context-driven)",
		"greekOriginal": "ἀφεδρών (aphedrōn)",
		"greekMeaning": "A privy, latrine; elsewhere, a drink drawn",
		"greekAdditional": [
			"ποτήριον (potērion) – cup, drink",
			"πίνω (pinō) – to drink"
		],
		"kjv": "Draught",
		"foundin": "Strong’s: G856 (ἀφεδρών)"
	},
	"Earnest": {
		"translatedEnglish": "Down Payment / Guarantee / Pledge",
		"hebrewOriginal": "עֵרָבוֹן (eravon)",
		"greekOriginal": "ἀρραβών (arrabōn)",
		"greekMeaning": "First installment guaranteeing full inheritance",
		"greekAdditional": [
			"ἐγγύησις (engyēsis) – guarantee or surety",
			"ὑπόσχεσις (hyposchesis) – promise or pledge"
		],
		"kjv": "Earnest",
		"foundin": "Vine’s: 'Earnest'; Strong’s: G728 (ἀρραβών)"
	},
	"Edification": {
		"translatedEnglish": "Building up",
		"hebrewOriginal": "בִּנְיָן (binyan)",
		"greekOriginal": "οἰκοδομή (oikodomē)",
		"greekMeaning": "Constructive strengthening of the community",
		"greekAdditional": [
			"στήριγμα (stērigma) – support or foundation",
			"ἐνίσχυσις (enischysis) – strengthening or encouragement"
		],
		"kjv": "Edification",
		"foundin": "Vine’s: 'Edify'; Strong’s: G3619 (οἰκοδομή)"
	},
	"Edify": {
		"translatedEnglish": "Build Up / Strengthen / Encourage",
		"hebrewOriginal": "בָּנָה (banah)",
		"greekOriginal": "οἰκοδομέω (oikodomeō)",
		"greekMeaning": "To construct or strengthen-not just educate",
		"greekAdditional": [
			"παρακαλέω (parakaleō) – to encourage or comfort",
			"στηρίζω (stērizō) – to establish or support"
		],
		"kjv": "Edify",
		"foundin": "Vine’s: 'Edify'; Strong’s: G3618 (οἰκοδομέω)"
	},
	"Effeminate": {
		"translatedEnglish": "Soft / Self-indulgent / Morally undisciplined",
		"hebrewOriginal": "רַךְ (rakh)",
		"greekOriginal": "μαλακοί (malakoi)",
		"greekMeaning": "Literally 'soft'; associated with luxurious ease or moral laxity in sexual ethics—not a comment on gender identity or mannerisms",
		"greekAdditional": [
			"ἀσελγής (aselgēs) – licentious or unrestrained",
			"τρυφῶν (tryphōn) – living in luxury or softness"
		],
		"kjv": "Effeminate",
		"foundin": "Strong’s: G3120 (μαλακός)"
	},
	"Elect": {
		"translatedEnglish": "Chosen / Selected for Purpose",
		"hebrewOriginal": "בָּחַר (bachar)",
		"greekOriginal": "ἐκλεκτός (eklektos)",
		"greekMeaning": "Chosen for a role or mission-not exclusive salvation",
		"greekAdditional": [
			"προορισμένος (proorismenos) – foreordained or designated",
			"ἀγαπητός (agapētos) – beloved or specially favored"
		],
		"kjv": "Elect",
		"foundin": "Vine’s: 'Elect'; Strong’s: G1588 (ἐκλεκτός)"
	},
	"Election": {
		"translatedEnglish": "Chosen / Called out",
		"hebrewOriginal": "בָּחוּר (bachur), בְּחִירָה (bechirah)",
		"greekOriginal": "ἐκλογή (eklogē)",
		"greekMeaning": "Divine selection for purpose-not political or arbitrary favoritism",
		"greekAdditional": [
			"πρόθεσις (prothesis) – divine intention or purpose",
			"προορίζω (proorizō) – to predetermine or appoint"
		],
		"kjv": "Election",
		"foundin": "Vine’s: 'Election'; Strong’s: G1589 (ἐκλογή)"
	},

	"Emerod": {
		"translatedEnglish": "Tumor / Hemorrhoid",
		"hebrewOriginal": "עֹפֶל (ophel)",
		"greekOriginal": "ἐπώδυνος ὄγκος (epōdynos ogkos)",
		"greekMeaning": "Painful swelling, often in groin area",
		"greekAdditional": [
			"ὄγκος (ogkos) – tumor or mass",
			"πρήξις (prēxis) – inflammation or swelling"
		],
		"kjv": "Emerod"
	},
	"Emerods": {
		"translatedEnglish": "Tumors / Hemorrhoids",
		"hebrewOriginal": "טְחֹרִים (ṭəḥōrîm) – swellings, tumors",
		"greekOriginal": "ἐκζήματα (ekzḗmata)",
		"greekMeaning": "Boils or swellings",
		"greekAdditional": [
			"ἕλκος (hélkos) – ulcer",
			"πληγή (plēgḗ) – plague"
		],
		"kjv": "Emerods",
		"foundin": "Strong’s: H2914 (טְחֹרִים)"
	},
	"Emulations": {
		"translatedEnglish": "Jealous rivalry",
		"hebrewOriginal": "קִנְאָה (qin'ah)",
		"greekOriginal": "ζῆλος (zēlos)",
		"greekMeaning": "Zeal turned to envy/jealousy",
		"greekAdditional": [
			"φθόνος (phthonos) – envy or spite",
			"ἀνταγωνισμός (antagōnismos) – rivalry or competition"
		],
		"kjv": "Emulations",
		"foundin": "Vine’s: 'Emulation'; Strong’s: G2205 (ζῆλος)"
	},
	"Enemy": {
		"translatedEnglish": "Opposer / Adversary / Hostile One",
		"hebrewOriginal": "אוֹיֵב (oyev)",
		"greekOriginal": "ἐχθρός (echthros)",
		"greekMeaning": "One in opposition-not always personal hatred",
		"greekAdditional": [
			"ἀντικείμενος (antikeimenos) – one who resists or opposes",
			"διάβολος (diabolos) – slanderer or accuser (contextual)"
		],
		"kjv": "Enemy",
		"foundin": "Vine’s: 'Enemy'; Strong’s: G2190 (ἐχθρός)"
	},
	"Entreated": {
		"translatedEnglish": "Asked / Pleaded / Requested",
		"hebrewOriginal": "עָתַר (atar)",
		"greekOriginal": "παρακαλέω (parakaleō)",
		"greekMeaning": "To appeal earnestly-not formal politeness",
		"greekAdditional": [
			"δέομαι (deomai) – to beg or plead",
			"λιτανεύω (litaneyō) – to make earnest supplication (rare)"
		],
		"kjv": "Entreated",
		"foundin": "Strong’s: G3870 (παρακαλέω)"
	},
	"Eschew": {
		"translatedEnglish": "Turn Away / Shun / Avoid",
		"hebrewOriginal": "סוּר (sur)",
		"greekOriginal": "ἐκκλίνω (ekklinō)",
		"greekMeaning": "To turn aside from and avoid",
		"greekAdditional": [
			"ἀποστρέφω (apostrephō) – to turn away",
			"ἀπέχομαι (apechomai) – to abstain"
		],
		"kjv": "Eschew",
		"foundin": "Strong’s: G1578 (ἐκκλίνω)"
	},
	"Esteem": {
		"translatedEnglish": "Value / Regard",
		"hebrewOriginal": "הֵעִיר (he'ir), חָשַׁב (chashav)",
		"greekOriginal": "ἡγέομαι (hēgeomai)",
		"greekMeaning": "To consider worthy-not just admire",
		"greekAdditional": [
			"τιμάω (timaō) – to honor or value",
			"λογίζομαι (logizomai) – to reckon or account"
		],
		"kjv": "Esteem",
		"foundin": "Strong’s: G2233 (ἡγέομαι)"
	},
	"Eternal": {
		"translatedEnglish": "Age-lasting / Of the age",
		"hebrewOriginal": "עוֹלָם (olam)",
		"greekOriginal": "αἰώνιος (aiōnios)",
		"greekMeaning": "Pertaining to an age; duration defined by context",
		"greekAdditional": [
			"ἀτελεύτητος (ateleutētos) – without end",
			"διηνεκής (diēnekēs) – continual or uninterrupted"
		],
		"kjv": "Eternal/Everlasting",
		"foundin": "Vine’s: 'Eternal'; Strong’s: G166 (αἰώνιος)"
	},
	"Exhortation": {
		"translatedEnglish": "Encouraging appeal / Comfort",
		"hebrewOriginal": "נֶחָמָה (nechamah)",
		"greekOriginal": "παράκλησις (paraklēsis)",
		"greekMeaning": "Urging, comforting encouragement-not harsh scolding",
		"greekAdditional": [
			"προτροπή (protropē) – urging or prompting",
			"παραμυθία (paramythia) – comfort or consolation"
		],
		"kjv": "Exhortation",
		"foundin": "Vine’s: 'Exhort'; Strong’s: G3874 (παράκλησις)"
	},

	"Extortion": {
		"translatedEnglish": "Greedy seizure / Swindling",
		"hebrewOriginal": "עָשַׁק (ashaq)",
		"greekOriginal": "ἅρπαξ (harpax) / ἁρπαγή (harpagē)",
		"greekMeaning": "Seizing by force/greed; predatory gain",
		"greekAdditional": [
			"πλεονεξία (pleonexia) – covetousness or greed",
			"ἀδικία (adikia) – injustice or wrongdoing"
		],
		"kjv": "Extortion",
		"foundin": "Vine’s: 'Extortion'; Strong’s: G724 (ἁρπαγή)"
	},
	"Faint": {
		"translatedEnglish": "Lose heart / Grow weary",
		"hebrewOriginal": "נִרְפָּה (nirpah)",
		"greekOriginal": "ἐκλύω (eklyō)",
		"greekMeaning": "To become discouraged-not physically collapse",
		"greekAdditional": [
			"ἀτονέω (atonéō) – to lose strength",
			"ἀθυμέω (athyméō) – to be disheartened"
		],
		"kjv": "Faint",
		"foundin": "Vine’s: 'Faint'; Strong’s: G1590 (ἐκλύω)"
	},
	"Faith": {
		"translatedEnglish": "Trust / Confidence / Fidelity",
		"hebrewOriginal": "אֱמוּנָה (emunah)",
		"greekOriginal": "πίστις (pistis)",
		"greekMeaning": "Active trust or persuasion-not mere belief",
		"greekAdditional": [
			"πεποίθησις (pepoithēsis) – confidence or assurance",
			"πείθω (peithō) – to persuade or trust"
		],
		"kjv": "Faith",
		"foundin": "Vine’s: 'Faith'; Strong’s: G4102 (πίστις)"
	},
	"Fear": {
		"translatedEnglish": "Reverence / Awe / Respect",
		"hebrewOriginal": "יִרְאָה (yirah)",
		"greekOriginal": "φόβος (phobos)",
		"greekMeaning": "Phobos: fear or awe depending on context; Yirah: reverent respect",
		"greekAdditional": [
			"εὐλάβεια (eulabeia) – godly reverence or caution",
			"σεβασμός (sebasmos) – devotion or respectful awe"
		],
		"kjv": "Fear",
		"foundin": "Vine’s: 'Fear'; Strong’s: G5401 (φόβος)"
	},
	"Fear of the Lord": {
		"translatedEnglish": "Reverence / Awe / Covenant Loyalty",
		"hebrewOriginal": "יִרְאַת יְהוָה (yirat YHWH)",
		"greekOriginal": "φόβος κυρίου (phobos Kyriou)",
		"greekMeaning": "Deep respect and alignment-not terror or dread",
		"greekAdditional": [
			"σεβασμός (sebasmos) – reverence or devotion",
			"εὐλάβεια (eulabeia) – godly fear or caution"
		],
		"kjv": "Fear of the Lord"
	},
	"Fell Upon": {
		"translatedEnglish": "Attacked / Embraced / Came Suddenly",
		"hebrewOriginal": "נָפַל עַל (nafal al)",
		"greekOriginal": "ἐπέπεσεν (epepesen)",
		"greekMeaning": "To come upon forcefully or emotionally-not accidental fall",
		"greekAdditional": [
			"προσπίπτω (prospiptō) – to fall upon or prostrate oneself",
			"συνπίπτω (synpiptō) – to fall together with"
		],
		"kjv": "Fell Upon",
		"foundin": "Strong’s: G1968 (ἐπέπεσεν)"
	},
	"Fellowship": {
		"translatedEnglish": "Partnership / Shared Life / Communion",
		"hebrewOriginal": "חֶבְרָה (chevrah)",
		"greekOriginal": "κοινωνία (koinōnia)",
		"greekMeaning": "Koinōnia: mutual participation-not just social gathering",
		"greekAdditional": [
			"σύσσωμος (syssōmos) – united in one body",
			"μετοχή (metochē) – sharing or partaking"
		],
		"kjv": "Fellowship",
		"foundin": "Vine’s: 'Fellowship'; Strong’s: G2842 (κοινωνία)"
	},
	"Ferrule": {
		"translatedEnglish": "Cap / Band (on a rod or staff)",
		"hebrewOriginal": "טַבָּעַת (tabbaʿat) – ring, band",
		"greekOriginal": "σφραγίς (sphragís)",
		"greekMeaning": "Seal or ring used for marking or binding",
		"greekAdditional": [
			"ζῶμα (zōma) – binding band",
			"περιδέσμος (peridésmos) – fastening or clasp",
			"κρίκος (kríkos) – ring, loop"
		],
		"kjv": "Ferrule",
		"foundin": "Strong’s: H2885 (טַבָּעַת)"
	},
	"Fetched": {
		"translatedEnglish": "Brought / Retrieved / Took",
		"hebrewOriginal": "לָקַח (laqach)",
		"greekOriginal": "λαμβάνω (lambanō)",
		"greekMeaning": "To take or receive-not quaint retrieval",
		"greekAdditional": [
			"ἀναλαμβάνω (analambanō) – to take up or lift",
			"προσλαμβάνω (proslambanō) – to receive or accept into company"
		],
		"kjv": "Fetched",
		"foundin": "Strong’s: G2983 (λαμβάνω)"
	},

	"Fire": {
		"translatedEnglish": "Purification / Divine Presence / Judgment",
		"hebrewOriginal": "אֵשׁ (esh)",
		"greekOriginal": "πῦρ (pyr)",
		"greekMeaning": "Can symbolize purification, presence, or destruction",
		"greekAdditional": [
			"φλόγα (phloga) – flame or blaze",
			"καύσις (kausis) – burning or consuming fire"
		],
		"kjv": "Fire",
		"foundin": "Vine’s: 'Fire'; Strong’s: G4442 (πῦρ)"
	},
	"Flagon": {
		"translatedEnglish": "Large container for wine or liquids",
		"hebrewOriginal": "אַשִׁישָׁה (ʾashishāh) – pressed cake, jar",
		"greekOriginal": "ἀσκός (askós)",
		"greekMeaning": "Wineskin or leather vessel for liquids",
		"greekAdditional": [
			"ἀγγεῖον (angeîon) – container",
			"πρόχοος (próchoos) – pouring vessel"
		],
		"kjv": "Flagon",
		"foundin": "Strong’s: H809 (אַשִׁישָׁה)"
	},
	"Flagons": {
		"translatedEnglish": "Wine vessels / Containers",
		"hebrewOriginal": "אֲשִׁישָׁה (ʾăshīshāh) – cake or pressed raisin",
		"greekOriginal": "φιάλη (phiálē)",
		"greekMeaning": "Cup or bowl for pouring",
		"greekAdditional": [
			"κράτηρ (krátēr) – mixing vessel",
			"ἀγγεῖον (angeîon) – container"
		],
		"kjv": "Flagons",
		"foundin": "Strong’s: H809 (אֲשִׁישָׁה)"
	},
	"Flesh": {
		"translatedEnglish": "Human Nature / Carnality / Mortality",
		"hebrewOriginal": "בָּשָׂר (basar)",
		"greekOriginal": "σάρξ (sarx)",
		"greekMeaning": "Sarx: human weakness or natural inclination-not just physical body",
		"greekAdditional": [
			"ψυχικός (psychikos) – natural or soulish",
			"θνητός (thnētos) – mortal or subject to death"
		],
		"kjv": "Flesh",
		"foundin": "Vine’s: 'Flesh'; Strong’s: G4561 (σάρξ)"
	},
	"Flesh and Blood": {
		"translatedEnglish": "Human Nature / Mortal Existence",
		"hebrewOriginal": "בָּשָׂר וָדָם (basar va-dam)",
		"greekOriginal": "σὰρξ καὶ αἷμα (sarx kai haima)",
		"greekMeaning": "Mortal humanity-not sinful nature by default",
		"greekAdditional": [
			"ἄνθρωπος (anthrōpos) – human being",
			"θνητός (thnētos) – mortal or subject to death"
		],
		"kjv": "Flesh and Blood",
		"foundin": "Strong’s: G129 (αἷμα)"
	},
	"Foreknowledge": {
		"translatedEnglish": "Foreknown relationally",
		"hebrewOriginal": "יָדַע (yadaʿ) - know intimately",
		"greekOriginal": "πρόγνωσις (prognōsis)",
		"greekMeaning": "To know beforehand, often with relational/choice nuance",
		"greekAdditional": [
			"προγινώσκω (proginōskō) – to foreknow or foresee",
			"ἐπίγνωσις (epignōsis) – full or relational knowledge"
		],
		"kjv": "Foreknowledge",
		"foundin": "Vine’s: 'Foreknowledge'; Strong’s: G4268 (πρόγνωσις)"
	},
	"Forever": {
		"translatedEnglish": "Age / Era / Until Fulfilled",
		"hebrewOriginal": "עוֹלָם (olam)",
		"greekOriginal": "αἰών (aiōn)",
		"greekMeaning": "An age or epoch-not necessarily eternal in duration",
		"greekAdditional": [
			"διηνεκής (diēnekēs) – continual or uninterrupted",
			"ἀτελεύτητος (ateleutētos) – without end or conclusion"
		],
		"kjv": "Forever",
		"foundin": "Vine’s: 'Forever'; Strong’s: G165 (αἰών)"
	},
	"Fornication": {
		"translatedEnglish": "Sexual Immorality / Covenant Violation",
		"hebrewOriginal": "זְנוּת (zenut)",
		"greekOriginal": "πορνεία (porneia)",
		"greekMeaning": "Broad term for sexual sin-not limited to premarital sex",
		"greekAdditional": [
			"ἄσελγεια (aselgeia) – licentiousness or shameless behavior",
			"μιαινόμαι (miaimai) – to defile or pollute (contextual)"
		],
		"kjv": "Fornication",
		"foundin": "Vine’s: 'Fornication'; Strong’s: G4202 (πορνεία)"
	},
	"Forth": {
		"translatedEnglish": "Out / Forward",
		"hebrewOriginal": "חוּץ (chutz)",
		"greekOriginal": "ἔξω (exō)",
		"greekMeaning": "To go out or forward, not just distance",
		"greekAdditional": [
			"προέρχομαι (proerchomai) – to go forth or proceed",
			"ἐξέρχομαι (exerchomai) – to come out or depart"
		],
		"kjv": "Forth",
		"foundin": "Strong’s: G1854 (ἔξω)"
	},

	"Forthwith": {
		"translatedEnglish": "Immediately / Right away",
		"hebrewOriginal": "מִיָּד (miyad)",
		"greekOriginal": "εὐθύς (euthys)",
		"greekMeaning": "Without delay, not later",
		"greekAdditional": [
			"παραχρῆμα (parachrēma) – instantly or at once",
			"εὐθέως (eutheōs) – straightaway"
		],
		"kjv": "Forthwith",
		"foundin": "Strong’s: G2112 (εὐθύς)"
	},
	"Friend": {
		"translatedEnglish": "Ally / Covenant Partner / Companion",
		"hebrewOriginal": "רֵעַ (re'a), אָהוּב (ahuv)",
		"greekOriginal": "φίλος (philos)",
		"greekMeaning": "One bound by affection or loyalty-not casual acquaintance",
		"greekAdditional": [
			"σύντροφος (syntrophos) – companion or close associate",
			"κοινωνός (koinōnos) – partner or sharer"
		],
		"kjv": "Friend",
		"foundin": "Vine’s: 'Friend'; Strong’s: G5384 (φίλος)"
	},
	"Froward": {
		"translatedEnglish": "Perverse / Stubborn",
		"hebrewOriginal": "עִקֵּשׁ (iqqesh)",
		"greekOriginal": "σκολιός (skolios)",
		"greekMeaning": "Crooked or morally twisted",
		"greekAdditional": [
			"διαστρέφω (diastrephō) – to distort",
			"ἀνυπότακτος (anupotaktos) – insubordinate"
		],
		"kjv": "Froward",
		"foundin": "Strong’s: G4646 (σκολιός)"
	},
	"Gainsay": {
		"translatedEnglish": "Contradict / Oppose",
		"hebrewOriginal": "הֵשִׁיב דָּבָר (heshiv davar)",
		"greekOriginal": "ἀντιλέγω (antilegō)",
		"greekMeaning": "To speak against or dispute",
		"greekAdditional": [
			"ἀντιστῆναι (antistēnai) – to resist",
			"ἐναντιόομαι (enantioomai) – to oppose"
		],
		"kjv": "Gainsay",
		"foundin": "Strong’s: G483 (ἀντιλέγω)"
	},
	"Genesis": {
		"translatedEnglish": "Origin / Beginning / Birth",
		"hebrewOriginal": "בְּרֵאשִׁית (bereshit)",
		"greekOriginal": "γένεσις (genesis)",
		"greekMeaning": "Start or source-not just a book title",
		"greekAdditional": [
			"ἀρχή (archē) – beginning or first principle",
			"προέλευσις (proeleusis) – emergence or coming forth"
		],
		"kjv": "Genesis",
		"foundin": "Strong’s: G1078 (γένεσις)"
	},
	"Gentile": {
		"translatedEnglish": "Nations / Non-Israelites",
		"hebrewOriginal": "גּוֹי (goy), עַם (am)",
		"greekOriginal": "ἔθνος (ethnos)",
		"greekMeaning": "People groups outside Israel-not inherently pagan",
		"greekAdditional": [
			"λαός (laos) – people or populace",
			"ἀλλογενής (allogenēs) – foreigner or outsider"
		],
		"kjv": "Gentile",
		"foundin": "Vine’s: 'Gentile'; Strong’s: G1484 (ἔθνος)"
	},
	"Gladness": {
		"translatedEnglish": "Joy / Exultation",
		"hebrewOriginal": "שִׂמְחָה (simchah)",
		"greekOriginal": "ἀγαλλίασις (agalliasis)",
		"greekMeaning": "Overflowing joy-not just casual happiness",
		"greekAdditional": [
			"χαρά (chara) – joy or delight",
			"εὐφροσύνη (euphrosynē) – gladness or cheerfulness"
		],
		"kjv": "Gladness",
		"foundin": "Strong’s: G20 (ἀγαλλίασις)"
	},
	"Glorify": {
		"translatedEnglish": "Honor / Reveal / Magnify",
		"hebrewOriginal": "כָּבֵד (kaved)",
		"greekOriginal": "δοξάζω (doxazō)",
		"greekMeaning": "To give weight or reveal splendor-not just praise",
		"greekAdditional": [
			"τιμάω (timaō) – to honor or value",
			"ἐπαινέω (epaineō) – to commend or extol"
		],
		"kjv": "Glorify",
		"foundin": "Vine’s: 'Glorify'; Strong’s: G1392 (δοξάζω)"
	},
	"Glory": {
		"translatedEnglish": "Weight / Honor / Manifestation",
		"hebrewOriginal": "כָּבוֹד (kavod)",
		"greekOriginal": "δόξα (doxa)",
		"greekMeaning": "Kavod: weightiness, honor; Doxa: reputation, splendor, divine presence",
		"greekAdditional": [
			"τιμή (timē) – honor or value",
			"λαμπρότης (lamprotēs) – brightness or magnificence"
		],
		"kjv": "Glory",
		"foundin": "Vine’s: 'Glory'; Strong’s: G1391 (δόξα)"
	},
	"Goad": {
		"translatedEnglish": "Spiked stick for driving oxen",
		"hebrewOriginal": "מַלְמַד (malmad) – goad, prod",
		"greekOriginal": "κέντρον (kéntron)",
		"greekMeaning": "Sharp point used to urge or prod",
		"greekAdditional": [
			"σκυτάλη (skytálē) – staff, rod",
			"δοράτιον (dorátion) – small spear"
		],
		"kjv": "Goad",
		"foundin": "Strong’s: G2759 (κέντρον)"
	},

	"Grace": {
		"translatedEnglish": "Favor / Empowerment / Divine Enablement",
		"hebrewOriginal": "חֵן (chen)",
		"greekOriginal": "χάρις (charis)",
		"greekMeaning": "Unmerited favor, but also divine influence upon the heart",
		"greekAdditional": [
			"εὐμένεια (eumeneia) – goodwill or kindness",
			"δωρεά (dōrea) – gift or endowment"
		],
		"kjv": "Grace",
		"foundin": "Vine’s: 'Grace'; Strong’s: G5485 (χάρις)"
	},
	"Greaves": {
		"translatedEnglish": "Leg Armor",
		"hebrewOriginal": "מִצְחָה (mitsḥah)",
		"greekOriginal": "περιποδία (peripodia)",
		"greekMeaning": "Protective armor for the legs",
		"greekAdditional": [
			"θώραξ (thōrax) – breastplate or armor",
			"ὁπλισμός (hoplismos) – armament or gear"
		],
		"kjv": "Greaves"
	},
	"Grieve": {
		"translatedEnglish": "Sadden / Cause sorrow",
		"hebrewOriginal": "עָצַב (atzav)",
		"greekOriginal": "λυπέω (lypeō)",
		"greekMeaning": "To bring emotional pain-not just offend",
		"greekAdditional": [
			"θλίβω (thlibō) – to press or distress",
			"ἀχθόμαι (achthomai) – to be burdened or vexed"
		],
		"kjv": "Grieve",
		"foundin": "Vine’s: 'Grieve'; Strong’s: G3076 (λυπέω)"
	},
	"Habergeon": {
		"translatedEnglish": "Coat of Mail",
		"hebrewOriginal": "שִׁרְיֹן (shiryōn)",
		"greekOriginal": "θώραξ (thōrax)",
		"greekMeaning": "Armored tunic; scale or chainmail",
		"greekAdditional": [
			"πανοπλία (panoplia) – full armor",
			"ἅλυσις (halysis) – chain or linked mail"
		],
		"kjv": "Habergeon",
		"foundin": "Strong’s: H8302 (שִׁרְיֹן)"
	},
	"Habitation": {
		"translatedEnglish": "Dwelling / Home",
		"hebrewOriginal": "מָעוֹן (maʿon)",
		"greekOriginal": "κατοικητήριον (katoikētērion)",
		"greekMeaning": "Place where one lives or resides",
		"greekAdditional": [
			"οἰκία (oikia) – house or dwelling",
			"σκηνή (skēnē) – tent or temporary dwelling"
		],
		"kjv": "Habitation",
		"foundin": "Strong’s: G2732 (κατοικητήριον)"
	},
	"Halt": {
		"translatedEnglish": "Lame / Disabled",
		"hebrewOriginal": "פִּסֵּחַ (pisseach)",
		"greekOriginal": "χωλός (chōlos)",
		"greekMeaning": "Lame or crippled (of feet/legs)",
		"greekAdditional": [
			"παραλελυμένος (paralelymenos) – paralyzed",
			"ἀσθενής (asthenēs) – weak"
		],
		"kjv": "Halt",
		"foundin": "Strong’s: G5560 (χωλός)"
	},
	"Harvest": {
		"translatedEnglish": "Gathering / Fulfillment / Judgment or Reward",
		"hebrewOriginal": "קָצִיר (qatsir)",
		"greekOriginal": "θερισμός (therismos)",
		"greekMeaning": "Time of gathering-can be symbolic of judgment or blessing",
		"greekAdditional": [
			"καρποφορία (karpophoria) – bearing fruit or results",
			"ἀποκομιδή (apokomidē) – collection or bringing in"
		],
		"kjv": "Harvest",
		"foundin": "Vine’s: 'Harvest'; Strong’s: G2326 (θερισμός)"
	},
	"Haughty": {
		"translatedEnglish": "Arrogant / Proud",
		"hebrewOriginal": "גַּבְהוּת (gavhut), רָם (ram)",
		"greekOriginal": "ὑπερήφανος (hyperēphanos)",
		"greekMeaning": "Excessively self-exalting-not confident",
		"greekAdditional": [
			"ἀλαζών (alazōn) – boastful or self-important",
			"μεγαλοφρονέω (megalophroneō) – to think highly of oneself"
		],
		"kjv": "Haughty",
		"foundin": "Strong’s: G5244 (ὑπερήφανος)"
	},
	"Heart": {
		"translatedEnglish": "Inner self / Mind / Will",
		"hebrewOriginal": "לֵב (lev)",
		"greekOriginal": "καρδία (kardia)",
		"greekMeaning": "The center of one's being, thoughts, and emotions",
		"greekAdditional": [
			"διάνοια (dianoia) – understanding or intent",
			"ψυχή (psychē) – soul or inner life"
		],
		"kjv": "Heart",
		"foundin": "Vine’s: 'Heart'; Strong’s: G2588 (καρδία)"
	},
	"Hell": {
		"translatedEnglish": "Grave / Gehenna / Hades",
		"hebrewOriginal": "שְׁאוֹל (sheol), גֵּיהִנּוֹם (gehenom)",
		"greekOriginal": "ᾅδης (hades), γέεννα (gehenna)",
		"greekMeaning": "Hades refers to the realm of the dead; Gehenna was a burning trash heap outside Jerusalem symbolizing judgment",
		"greekAdditional": [
			"τάρταρος (tartaros) – abyss or place of punishment",
			"μνημεῖον (mnēmeion) – tomb or grave"
		],
		"kjv": "Hell",
		"foundin": "Vine’s: 'Hell'; Strong’s: G1067 (γέεννα)"
	},

	"Heresies": {
		"translatedEnglish": "Factions / Party spirit",
		"hebrewOriginal": "מַחֲלֹקֶת (machaloket)",
		"greekOriginal": "αἱρέσεις (haireseis)",
		"greekMeaning": "Sectarian divisions; only later specialized into doctrinal error",
		"greekAdditional": [
			"σχίσμα (schisma) – split or division",
			"διχοστασία (dichostasia) – standing apart or factionalism"
		],
		"kjv": "Heresies",
		"foundin": "Vine’s: 'Heresy'; Strong’s: G139 (αἵρεσις)"
	},
	"Holy Ghost": {
		"translatedEnglish": "Holy Spirit / Divine Breath",
		"hebrewOriginal": "רוּחַ הַקֹּדֶשׁ (ruach hakodesh)",
		"greekOriginal": "πνεῦμα ἅγιον (pneuma hagion)",
		"greekMeaning": "Spirit or breath of God-not a ghostly figure",
		"greekAdditional": [
			"παράκλητος (paraklētos) – advocate or helper",
			"ἐνέργεια (energeia) – divine working or power"
		],
		"kjv": "Holy Ghost",
		"foundin": "Vine’s: 'Holy Spirit'; Strong’s: G4151 (πνεῦμα)"
	},
	"Hope": {
		"translatedEnglish": "Confident Expectation / Assurance",
		"hebrewOriginal": "תִּקְוָה (tiqvah)",
		"greekOriginal": "ἐλπίς (elpis)",
		"greekMeaning": "Elpis: expectation based on trust-not wishful thinking",
		"greekAdditional": [
			"προσδοκία (prosdokia) – anticipation or waiting",
			"βεβαίωσις (bebaiōsis) – assurance or confirmation"
		],
		"kjv": "Hope",
		"foundin": "Vine’s: 'Hope'; Strong’s: G1680 (ἐλπίς)"
	},
	"Immanuel": {
		"translatedEnglish": "God with us",
		"hebrewOriginal": "עִמָּנוּאֵל (Immanu'el)",
		"greekOriginal": "Ἐμμανουήλ (Emmanouēl)",
		"greekMeaning": "God's presence among people",
		"greekAdditional": [
			"παρουσία (parousia) – presence or coming",
			"ἐγγύς (engys) – near or close"
		],
		"kjv": "Immanuel",
		"foundin": "Strong’s: G1694 (Ἐμμανουήλ)"
	},
	"Immoderation (excess)": {
		"translatedEnglish": "Overindulgence / Excess",
		"hebrewOriginal": "שִׁגָּעוֹן תַּאֲוָה (shigaon ta'avah)",
		"greekOriginal": "ἀσωτία (asōtia) / μέθη (methē)",
		"greekMeaning": "Wasteful excess and overindulgence—not mere enthusiasm",
		"greekAdditional": [
			"ἐκτροπή (ektropē) – deviation or excess",
			"ἀκρασία (akrasia) – lack of self-control"
		],
		"kjv": "Excess of riot / Excess",
		"foundin": "Vine’s: 'Excess'; Strong’s: G810 (ἀσωτία)"
	},
	"Immortality": {
		"translatedEnglish": "Deathlessness",
		"hebrewOriginal": "חַיֵּי עוֹלָם (chayyei olam)",
		"greekOriginal": "ἀθανασία (athanasiya)",
		"greekMeaning": "Freedom from death—not just 'living a long time'",
		"greekAdditional": [
			"ζωή (zōē) – life or vitality",
			"ἀφθαρσία (aphtharsia) – incorruption or imperishability"
		],
		"kjv": "Immortality",
		"foundin": "Vine’s: 'Immortality'; Strong’s: G110 (ἀθανασία)"
	},
	"Immutability": {
		"translatedEnglish": "Unchangeableness",
		"hebrewOriginal": "שָׁנָה (shanah) - negated idea (Mal 3:6)",
		"greekOriginal": "ἀμετάθετος (ametathetos)",
		"greekMeaning": "Incapable of change or variation",
		"greekAdditional": [
			"ἀτρεπτός (atreptos) – unchanging or unwavering",
			"ἀναλλοίωτος (analloiōtos) – immutable or unalterable"
		],
		"kjv": "Immutability",
		"foundin": "Strong’s: G276 (ἀμετάθετος)"
	},
	"Implacable": {
		"translatedEnglish": "Irreconcilable / Treaty-breakers",
		"hebrewOriginal": "בְּלִי־שָׁלוֹם (bli-shalom)",
		"greekOriginal": "ἀσπόνδοι (aspondoi)",
		"greekMeaning": "Unwilling to make/keep a truce; not merely 'hard to please'",
		"greekAdditional": [
			"ἀδιάλλακτος (adiallaktos) – unappeasable or irreconcilable",
			"ἀνένδοτος (anendotos) – unyielding or relentless"
		],
		"kjv": "Implacable",
		"foundin": "Strong’s: G786 (ἀσπόνδοι)"
	},
	"Implead": {
		"translatedEnglish": "Bring to Court / Accuse Legally",
		"hebrewOriginal": "רִיב (riv)",
		"greekOriginal": "ἐγκαλέω (egkaleō)",
		"greekMeaning": "To charge or accuse in a legal setting",
		"greekAdditional": [
			"κατηγορέω (katēgoreō) – to accuse formally",
			"ἀντιλέγω (antilegō) – to speak against or dispute"
		],
		"kjv": "Implead",
		"foundin": "Strong’s: G1458 (ἐγκαλέω)"
	},

	"Importunity": {
		"translatedEnglish": "Shameless persistence",
		"hebrewOriginal": "פָּצַר (patsar)",
		"greekOriginal": "ἀναίδεια (anaideia)",
		"greekMeaning": "Bold refusal to quit asking",
		"greekAdditional": [
			"παρρησία (parrēsia) – boldness or confidence",
			"ἐπιμονή (epimonē) – persistence or insistence"
		],
		"kjv": "Importunity",
		"foundin": "Strong’s: G335 (ἀναίδεια)"
	},
	"Impute": {
		"translatedEnglish": "Credit / Assign / Attribute",
		"hebrewOriginal": "שִׁים (sim)",
		"greekOriginal": "λογίζομαι (logizomai)",
		"greekMeaning": "To credit or assign something—often righteousness or guilt—to another’s account",
		"greekAdditional": [
			"ἐλλογάω (ellogaō) – to charge or record",
			"χαρίζομαι (charizomai) – to grant or forgive",
			"ἀνατίθημι (anatithēmi) – to lay upon or entrust"
		],
		"kjv": "Impute",
		"foundin": "Vine’s: 'Impute'; Strong’s: G3049 (λογίζομαι)"
	},
	"Incontinent": {
		"translatedEnglish": "Lack of self-control",
		"hebrewOriginal": "אִי־רֶסֶן (i-resen)",
		"greekOriginal": "ἀκρατής (akratēs)",
		"greekMeaning": "Without mastery over desires; not a medical issue like urinary incontinence",
		"greekAdditional": [
			"ἀκρασία (akrasia) – lack of restraint",
			"ἀκολασία (akolasia) – intemperance or indulgence"
		],
		"kjv": "Incontinent",
		"foundin": "Strong’s: G193 (ἀκρατής)"
	},
	"Incorruption": {
		"translatedEnglish": "Imperishability",
		"hebrewOriginal": "אֵין כֶּלֶא (ein kele')",
		"greekOriginal": "ἀφθαρσία (aphtharsia)",
		"greekMeaning": "Unable to decay—not merely 'morally upright'",
		"greekAdditional": [
			"ἀδιάφθορος (adiaphthoros) – undecaying or unspoiled",
			"ἀμιάωτος (amiōtos) – unstained or undefiled"
		],
		"kjv": "Incorruption",
		"foundin": "Vine’s: 'Incorruption'; Strong’s: G861 (ἀφθαρσία)"
	},
	"Inheritance": {
		"translatedEnglish": "Portion / Legacy / Covenant Share",
		"hebrewOriginal": "נַחֲלָה (nachalah)",
		"greekOriginal": "κληρονομία (klēronomia)",
		"greekMeaning": "What is received by right or promise-not just material wealth",
		"greekAdditional": [
			"μερίς (meris) – allotted portion",
			"διαθήκη (diathēkē) – covenant or testament"
		],
		"kjv": "Inheritance",
		"foundin": "Vine’s: 'Inheritance'; Strong’s: G2817 (κληρονομία)"
	},
	"Inordinate affection": {
		"translatedEnglish": "Degrading passion",
		"hebrewOriginal": "תַּאֲוָה נִבְזֵית (ta'avah nivzeit)",
		"greekOriginal": "πάθος (pathos)",
		"greekMeaning": "A dishonorable passion, not simply 'too much affection'",
		"greekAdditional": [
			"ἐπιθυμία (epithymia) – lust or strong desire",
			"ἀκαθαρσία (akatharsia) – impurity or uncleanness"
		],
		"kjv": "Inordinate affection",
		"foundin": "Strong’s: G3806 (πάθος)"
	},
	"Intercession": {
		"translatedEnglish": "Petition / Mediation",
		"hebrewOriginal": "הִתְפַּלֵּל (hitpalel), בִּקֵּשׁ (bikesh)",
		"greekOriginal": "ἐντυγχάνω (entynchano)",
		"greekMeaning": "To plead on behalf of another-not just prayer",
		"greekAdditional": [
			"παρακαλέω (parakaleō) – to entreat or urge",
			"προσευχή (proseuchē) – prayer with intent"
		],
		"kjv": "Intercession",
		"foundin": "Vine’s: 'Intercession'; Strong’s: G1793 (ἐντυγχάνω)"
	},
	"Judgment": {
		"translatedEnglish": "Decision / Justice / Separation",
		"hebrewOriginal": "מִשְׁפָּט (mishpat)",
		"greekOriginal": "κρίμα (krima), κρίσις (krisis)",
		"greekMeaning": "Krima: verdict; Krisis: process-not always condemnation",
		"greekAdditional": [
			"διακρίνω (diakrinō) – to distinguish or discern",
			"ἀποφασίζω (apophasizō) – to make a formal decision"
		],
		"kjv": "Judgment",
		"foundin": "Vine’s: 'Judgment'; Strong’s: G2917 (κρίμα)"
	},
	"Judgment seat": {
		"translatedEnglish": "Tribunal / Place of decision",
		"hebrewOriginal": "כִּסֵּא מִשְׁפָּט (kisse mishpat)",
		"greekOriginal": "βῆμα (bēma)",
		"greekMeaning": "Raised platform for judicial decisions-not a throne of wrath",
		"greekAdditional": [
			"κρίμα (krima) – verdict or judgment",
			"δικαστήριον (dikastērion) – court or place of justice"
		],
		"kjv": "Judgment seat",
		"foundin": "Vine’s: 'Judgment Seat'; Strong’s: G968 (βῆμα)"
	},
	"Judgment Seat": {
		"translatedEnglish": "Place of Evaluation / Tribunal",
		"hebrewOriginal": "כִּסֵּא (kisse)",
		"greekOriginal": "βῆμα (bēma)",
		"greekMeaning": "Bēma: raised platform for judicial review-not throne of condemnation",
		"greekAdditional": [
			"κριτήριον (kritērion) – place or process of judgment",
			"ἀνάκρισις (anakrisis) – examination or inquiry"
		],
		"kjv": "Judgment Seat",
		"foundin": "Strong’s: G968 (βῆμα)"
	},

	"Just": {
		"translatedEnglish": "Righteous / Upright / In Right Standing",
		"hebrewOriginal": "צַדִּיק (tzaddiq)",
		"greekOriginal": "δίκαιος (dikaios)",
		"greekMeaning": "Dikaios: one aligned with divine justice-not merely fair or impartial",
		"greekAdditional": [
			"ἄμεμπτος (amemptos) – blameless or without fault",
			"εὐσεβής (eusebēs) – devout or reverent"
		],
		"kjv": "Just",
		"foundin": "Vine’s: 'Just'; Strong’s: G1342 (δίκαιος)"
	},
	"Justification": {
		"translatedEnglish": "Acquittal / Declare righteous",
		"hebrewOriginal": "צָדַק (tsadaq) / צְדָקָה (tsedaqah)",
		"greekOriginal": "δικαίωσις (dikaiōsis) / δικαιόω (dikaioō)",
		"greekMeaning": "Legal verdict of righteousness, not moral improvement",
		"greekAdditional": [
			"ἀναγνώρισις (anagnōrisis) – recognition or acknowledgment",
			"ἐπανορθόω (epanorthōō) – to restore or correct"
		],
		"kjv": "Justification",
		"foundin": "Vine’s: 'Justification'; Strong’s: G1347 (δικαίωσις)"
	},
	"Justify": {
		"translatedEnglish": "Declare Righteous / Vindicate",
		"hebrewOriginal": "צָדַק (tsadaq)",
		"greekOriginal": "δικαιόω (dikaioō)",
		"greekMeaning": "To declare righteous-not to make righteous by works",
		"greekAdditional": [
			"ἀναγνωρίζω (anagnōrizō) – to acknowledge or recognize",
			"ἐπανορθόω (epanorthōō) – to restore or correct"
		],
		"kjv": "Justify",
		"foundin": "Vine’s: 'Justify'; Strong’s: G1344 (δικαιόω)"
	},
	"Kantharos": {
		"translatedEnglish": "Drinking cup with high handles",
		"hebrewOriginal": "כּוֹס טֶרֶם (kos terem)",
		"greekOriginal": "κάνθαρος (kántharos)",
		"greekMeaning": "Ceremonial cup, often in symposia for structured dialogue",
		"greekAdditional": [
			"ποτήριον (potḗrion) – drinking vessel",
			"σκύφος (skyphos) – deep cup",
			"κρατῆρ (kratēr) – mixing bowl for wine"
		],
		"kjv": "Kantharos"
	},
	"Kind": {
		"translatedEnglish": "Species / Type / Category",
		"hebrewOriginal": "מִין (min)",
		"greekOriginal": "γένος (genos)",
		"greekMeaning": "Group with shared traits-not personality trait",
		"greekAdditional": [
			"εἶδος (eidos) – form or visible type",
			"φυλή (phylē) – tribe or classification"
		],
		"kjv": "Kind",
		"foundin": "Strong’s: G1085 (γένος)"
	},
	"Kindled": {
		"translatedEnglish": "Ignited / Aroused / Stirred",
		"hebrewOriginal": "חָרָה (charah), בָּעַר (ba'ar)",
		"greekOriginal": "ἐξάπτω (exaptō)",
		"greekMeaning": "To spark or inflame-emotionally or physically",
		"greekAdditional": [
			"καίω (kaiō) – to burn or ignite",
			"θυμόομαι (thymoōmai) – to be inflamed with anger"
		],
		"kjv": "Kindled",
		"foundin": "Strong’s: G1805 (ἐξάπτω)"
	},
	"King": {
		"translatedEnglish": "Ruler / Sovereign / Covenant Leader",
		"hebrewOriginal": "מֶלֶךְ (melek)",
		"greekOriginal": "βασιλεύς (basileus)",
		"greekMeaning": "One who governs-not always authoritarian",
		"greekAdditional": [
			"ἄρχων (archōn) – ruler or magistrate",
			"δεσπότης (despotēs) – master or lord (contextual)"
		],
		"kjv": "King",
		"foundin": "Vine’s: 'King'; Strong’s: G935 (βασιλεύς)"
	},
	"Kingdom": {
		"translatedEnglish": "Reign / Rule / Dominion",
		"hebrewOriginal": "מַלְכוּת (malkuth)",
		"greekOriginal": "βασιλεία (basileia)",
		"greekMeaning": "Basileia: active reign or rule-not merely a geographic realm",
		"greekAdditional": [
			"κυριαρχία (kyriarchia) – sovereignty or lordship",
			"ἄρχη (archē) – beginning or ruling principle"
		],
		"kjv": "Kingdom",
		"foundin": "Vine’s: 'Kingdom'; Strong’s: G932 (βασιλεία)"
	},
	"Labor": {
		"translatedEnglish": "Toil / Effort / Service",
		"hebrewOriginal": "עָמַל (amal)",
		"greekOriginal": "κόπος (kopos)",
		"greekMeaning": "Exertion for a purpose-not just physical work",
		"greekAdditional": [
			"μόχθος (mochthos) – hardship or painful effort",
			"ἐργάζομαι (ergazomai) – to work or produce"
		],
		"kjv": "Labor",
		"foundin": "Vine’s: 'Labor'; Strong’s: G2873 (κόπος)"
	},
	"Lasciviousness": {
		"translatedEnglish": "Licentiousness / Sensuality",
		"hebrewOriginal": "זִמָּה (zimmah)",
		"greekOriginal": "ἀσέλγεια (aselgeia)",
		"greekMeaning": "Unbridled sensuality; shameless conduct",
		"greekAdditional": [
			"ἀκαθαρσία (akatharsia) – impurity or uncleanness",
			"ἐπιθυμία (epithymia) – lust or craving"
		],
		"kjv": "Lasciviousness",
		"foundin": "Vine’s: 'Lasciviousness'; Strong’s: G766 (ἀσέλγεια)"
	},

	"Laver": {
		"translatedEnglish": "Basin / Large Bowl",
		"hebrewOriginal": "כִּיּוֹר (kiyyor)",
		"greekOriginal": "λουτήρ (loutēr)",
		"greekMeaning": "Large vessel for washing",
		"greekAdditional": [
			"νίπτηρ (nipter) – hand-washing basin",
			"βαπτιστήριον (baptistērion) – immersion basin"
		],
		"kjv": "Laver",
		"foundin": "Strong’s: H3595 (כִּיּוֹר)"
	},
	"Law": {
		"translatedEnglish": "Instruction / Teaching / Covenant Terms",
		"hebrewOriginal": "תּוֹרָה (torah)",
		"greekOriginal": "νόμος (nomos)",
		"greekMeaning": "Nomos: principle or custom; Torah: divine instruction-not merely legal code",
		"greekAdditional": [
			"ἐντολή (entolē) – command or directive",
			"διδασκαλία (didaskalia) – teaching or doctrine"
		],
		"kjv": "Law",
		"foundin": "Vine’s: 'Law'; Strong’s: G3551 (νόμος)"
	},
	"Leaven": {
		"translatedEnglish": "Influence / Corruption / Hidden Agent",
		"hebrewOriginal": "שְׂאוֹר (se'or)",
		"greekOriginal": "ζύμη (zymē)",
		"greekMeaning": "Symbol of permeating influence-can be good or bad",
		"greekAdditional": [
			"ἐνέργεια (energeia) – active force or influence",
			"μυστήριον (mystērion) – hidden or secret agent (figurative)"
		],
		"kjv": "Leaven",
		"foundin": "Vine’s: 'Leaven'; Strong’s: G2219 (ζύμη)"
	},
	"Let": {
		"translatedEnglish": "Hinder / Prevent",
		"hebrewOriginal": "עִכֵּב (ikev)",
		"greekOriginal": "κατέχω (katechō)",
		"greekMeaning": "To restrain or hold back",
		"greekAdditional": [
			"ἐμποδίζω (empodizō) – to obstruct or impede",
			"ἀναχαιτίζω (anachaitizō) – to check or restrain"
		],
		"kjv": "Let",
		"foundin": "Strong’s: G2722 (κατέχω)"
	},
	"Liberty": {
		"translatedEnglish": "Freedom from Bondage / Empowered Choice",
		"hebrewOriginal": "דְּרוֹר (deror)",
		"greekOriginal": "ἐλευθερία (eleutheria)",
		"greekMeaning": "Freedom to live rightly-not license to sin",
		"greekAdditional": [
			"ἄφεσις (aphesis) – release or forgiveness",
			"λύτρωσις (lytrōsis) – redemption or liberation"
		],
		"kjv": "Liberty",
		"foundin": "Vine’s: 'Liberty'; Strong’s: G1657 (ἐλευθερία)"
	},
	"Light": {
		"translatedEnglish": "Revelation / Purity / Guidance",
		"hebrewOriginal": "אוֹר (or)",
		"greekOriginal": "φῶς (phōs)",
		"greekMeaning": "Spiritual illumination-not just physical brightness",
		"greekAdditional": [
			"λαμπρότης (lamprotēs) – brilliance or radiance",
			"φωτισμός (phōtismos) – enlightenment or clarity"
		],
		"kjv": "Light",
		"foundin": "Vine’s: 'Light'; Strong’s: G5457 (φῶς)"
	},
	"Longsuffering": {
		"translatedEnglish": "Patient endurance / Slow to anger",
		"hebrewOriginal": "אֶרֶךְ אַפַּיִם (erekh appayim)",
		"greekOriginal": "μακροθυμία (makrothymia)",
		"greekMeaning": "Long-tempered patience under provocation",
		"greekAdditional": [
			"ὑπομονή (hypomonē) – endurance under pressure",
			"ἀνεξικακία (anexikakia) – forbearance or tolerance"
		],
		"kjv": "Longsuffering",
		"foundin": "Vine’s: 'Longsuffering'; Strong’s: G3115 (μακροθυμία)"
	},
	"Love": {
		"translatedEnglish": "Agape / Phileo / Eros",
		"hebrewOriginal": "אַהֲבָה (ahavah)",
		"greekOriginal": "ἀγάπη (agape), φιλία (philia), ἔρως (eros)",
		"greekMeaning": "Agape is selfless love; philia is brotherly affection; eros is romantic desire",
		"greekAdditional": [
			"στοργή (storgē) – familial affection",
			"συμπάθεια (sympatheia) – shared feeling or compassion"
		],
		"kjv": "Charity, Love",
		"foundin": "Vine’s: 'Love'; Strong’s: G26 (ἀγάπη)"
	},
	"Lust": {
		"translatedEnglish": "Strong desire / Craving",
		"hebrewOriginal": "תַּאֲוָה (ta'avah)",
		"greekOriginal": "ἐπιθυμία (epithymia)",
		"greekMeaning": "Desire-can be good or bad depending on context",
		"greekAdditional": [
			"ὄρεξις (orexis) – appetite or longing",
			"πάθος (pathos) – passion or impulse"
		],
		"kjv": "Lust",
		"foundin": "Vine’s: 'Lust'; Strong’s: G1939 (ἐπιθυμία)"
	},

	"Made Intercession": {
		"translatedEnglish": "Stood Between / Pleaded On Behalf / Mediated",
		"hebrewOriginal": "פָּגַע (paga)",
		"greekOriginal": "ἐντυγχάνω (entynchano)",
		"greekMeaning": "To intervene or advocate-not just prayer",
		"greekAdditional": [
			"μεσιτεύω (mesiteuō) – to mediate or act as go-between",
			"πρεσβεύω (presbeuō) – to act as ambassador or advocate"
		],
		"kjv": "Made Intercession",
		"foundin": "Strong’s: G1793 (ἐντυγχάνω)"
	},
	"Malefactors": {
		"translatedEnglish": "Criminals",
		"hebrewOriginal": "פֹּעֲלֵי אָוֶן (po'alei aven)",
		"greekOriginal": "κακοῦργοι (kakourgoi)",
		"greekMeaning": "Evildoers; lawbreakers",
		"greekAdditional": [
			"ἄνομοι (anomoi) – lawless ones",
			"ἐργάται κακίας (ergatai kakias) – workers of evil"
		],
		"kjv": "Malefactors",
		"foundin": "Strong’s: G2557 (κακοῦργος)"
	},
	"Mandrake": {
		"translatedEnglish": "Fragrant plant root",
		"hebrewOriginal": "דּוּדָאִים (dūda’īm) – mandrakes",
		"greekOriginal": "μανδραγόρας (mandragóras)",
		"greekMeaning": "Plant with reputed aphrodisiac properties",
		"greekAdditional": [
			"ῥίζωμα (rhízōma) – root",
			"φυτόν (phytón) – plant"
		],
		"kjv": "Mandrakes",
		"foundin": "Strong’s: H1736 (דּוּדָאִים)"
	},
	"Manifest": {
		"translatedEnglish": "Reveal / Make Known / Unveil",
		"hebrewOriginal": "גָּלָה (galah)",
		"greekOriginal": "φανερόω (phaneroō)",
		"greekMeaning": "To make visible or known-not just appear",
		"greekAdditional": [
			"ἀποκαλύπτω (apokalyptō) – to uncover or disclose",
			"ἐπιφαίνω (epiphainō) – to shine forth or appear"
		],
		"kjv": "Manifest",
		"foundin": "Vine’s: 'Manifest'; Strong’s: G5319 (φανερόω)"
	},
	"Manifestation": {
		"translatedEnglish": "Revelation / Making visible",
		"hebrewOriginal": "גָּלָה (galah)",
		"greekOriginal": "φανέρωσις (phanerōsis)",
		"greekMeaning": "Disclosure of what was hidden",
		"greekAdditional": [
			"ἀποκάλυψις (apokalypsis) – unveiling or disclosure",
			"ἐπιφάνεια (epiphaneia) – appearance or visible showing"
		],
		"kjv": "Manifestation",
		"foundin": "Strong’s: G5321 (φανέρωσις)"
	},
	"Matrix": {
		"translatedEnglish": "Womb",
		"hebrewOriginal": "רֶחֶם (rechem)",
		"greekOriginal": "μήτρα (mētra)",
		"greekMeaning": "Mother’s womb-not a grid or data array",
		"greekAdditional": [
			"γαστήρ (gastēr) – belly or womb",
			"γεννητικός (gennētikos) – generative or reproductive"
		],
		"kjv": "Matrix",
		"foundin": "Strong’s: H7358 (רֶחֶם)"
	},
	"Meat": {
		"translatedEnglish": "Food",
		"hebrewOriginal": "אֹכֶל (ochel)",
		"greekOriginal": "βρῶμα (brōma)",
		"greekMeaning": "Any food, not just animal flesh",
		"greekAdditional": [
			"τροφὴ (trophē) – nourishment or sustenance",
			"ἐδωδή (edōdē) – edible provision"
		],
		"kjv": "Meat",
		"foundin": "Vine’s: 'Meat'; Strong’s: G1033 (βρῶμα)"
	},
	"Mediator": {
		"translatedEnglish": "Go-between / Reconciler",
		"hebrewOriginal": "מְתוֹוֵךְ (metavekh)",
		"greekOriginal": "μεσίτης (mesitēs)",
		"greekMeaning": "One who bridges two parties-not just negotiator",
		"greekAdditional": [
			"συνδιαλλαγή (syndiallēgē) – reconciliation",
			"πρεσβεύω (presbeuō) – to act as ambassador"
		],
		"kjv": "Mediator",
		"foundin": "Vine’s: 'Mediator'; Strong’s: G3316 (μεσίτης)"
	},
	"Meek": {
		"translatedEnglish": "Humble / Yielded / Strength Under Control",
		"hebrewOriginal": "עָנָו (anav)",
		"greekOriginal": "πραΰς (praus)",
		"greekMeaning": "Gentle strength-not weakness or passivity",
		"greekAdditional": [
			"ταπεινός (tapeinos) – lowly or humble",
			"ἐπιεικής (epieikēs) – gentle or fair-minded"
		],
		"kjv": "Meek",
		"foundin": "Vine’s: 'Meekness'; Strong’s: G4239 (πραΰς)"
	},

	"Mercy": {
		"translatedEnglish": "Compassion / Covenant Loyalty / Lovingkindness",
		"hebrewOriginal": "חֶסֶד (chesed), רַחֲמִים (rachamim)",
		"greekOriginal": "ἔλεος (eleos)",
		"greekMeaning": "Eleos: active compassion; Chesed: loyal love within covenant",
		"greekAdditional": [
			"οἰκτιρμός (oiktirmos) – tender mercy or pity",
			"σπλάγχνα (splanchna) – deep inner compassion"
		],
		"kjv": "Mercy",
		"foundin": "Vine’s: 'Mercy'; Strong’s: G1656 (ἔλεος)"
	},
	"Minished": {
		"translatedEnglish": "Diminished / Reduced",
		"hebrewOriginal": "מָעַט (maʿat)",
		"greekOriginal": "ἐλαττόω (elattoō)",
		"greekMeaning": "To make less or become less",
		"greekAdditional": [
			"μειόω (meioō) – to lessen",
			"ὑστερέω (hystereō) – to lack",
			"ἀφανίζω (aphanizō) – to fade or vanish"
		],
		"kjv": "Minished",
		"foundin": "Strong’s: G1642 (ἐλαττόω)"
	},
	"Minister": {
		"translatedEnglish": "Servant / Attendant / Helper",
		"hebrewOriginal": "שָׁרַת (sharat)",
		"greekOriginal": "διάκονος (diakonos)",
		"greekMeaning": "Diakonos: one who serves-not necessarily clergy",
		"greekAdditional": [
			"λειτουργός (leitourgos) – public servant or minister",
			"ὑπηρέτης (hypēretēs) – under-rower or assistant"
		],
		"kjv": "Minister",
		"foundin": "Vine’s: 'Minister'; Strong’s: G1249 (διάκονος)"
	},
	"Miracle": {
		"translatedEnglish": "Sign / Wonder / Demonstration",
		"hebrewOriginal": "אוֹת (ot), מוֹפֵת (mopheth)",
		"greekOriginal": "σημεῖον (sēmeion), τέρας (teras), δύναμις (dynamis)",
		"greekMeaning": "Sēmeion: sign; Teras: wonder; Dynamis: power-not just supernatural event",
		"greekAdditional": [
			"ἐνέργεια (energeia) – working or operation",
			"φανέρωσις (phanerōsis) – manifestation or display"
		],
		"kjv": "Miracle",
		"foundin": "Vine’s: 'Miracle'; Strong’s: G4592 (σημεῖον)"
	},
	"Mortify": {
		"translatedEnglish": "Put to death",
		"hebrewOriginal": "הֵמִית (hemit)",
		"greekOriginal": "νεκρόω (nekroō)",
		"greekMeaning": "Actively kill sinful practices",
		"greekAdditional": [
			"ἀποθνῄσκω (apothnēiskō) – to die or perish",
			"θανατόω (thanatoō) – to execute or put to death"
		],
		"kjv": "Mortify",
		"foundin": "Vine’s: 'Mortify'; Strong’s: G3499 (νεκρόω)"
	},
	"Mount": {
		"translatedEnglish": "High Place / Meeting Point / Revelation Site",
		"hebrewOriginal": "הַר (har)",
		"greekOriginal": "ὄρος (oros)",
		"greekMeaning": "Often symbolic of divine encounter-not just geography",
		"greekAdditional": [
			"ἀνάβασις (anabasis) – ascent or going up",
			"τόπος (topos) – place or location (contextual)"
		],
		"kjv": "Mount",
		"foundin": "Strong’s: G3735 (ὄρος)"
	},
	"Mount Zion": {
		"translatedEnglish": "Place of Covenant / Divine Presence / Spiritual Center",
		"hebrewOriginal": "צִיּוֹן (Tziyon)",
		"greekOriginal": "Σιών (Siōn)",
		"greekMeaning": "Symbol of divine dwelling-not just geographic hill",
		"greekAdditional": [
			"Ἱερουσαλήμ (Hierousalēm) – Jerusalem as spiritual center",
			"ὄρος (oros) – mountain, often symbolic of divine encounter"
		],
		"kjv": "Mount Zion",
		"foundin": "Strong’s: G4622 (Σιών)"
	},
	"Mufflers": {
		"translatedEnglish": "Veils / Face coverings",
		"hebrewOriginal": "רְעָלוֹת (rəʿālōt) – veils, mantles",
		"greekOriginal": "καλύμματα (kalýmmata)",
		"greekMeaning": "Coverings or veils",
		"greekAdditional": [
			"πέπλος (péplos) – garment",
			"προσωπίδα (prosōpída) – face covering"
		],
		"kjv": "Mufflers",
		"foundin": "Strong’s: H7479 (רְעָלוֹת)"
	},
	"Multitude": {
		"translatedEnglish": "Crowd / Many / Assembly",
		"hebrewOriginal": "הָמוֹן (hamon)",
		"greekOriginal": "πλῆθος (plēthos)",
		"greekMeaning": "Large number-not necessarily chaotic",
		"greekAdditional": [
			"ὄχλος (ochlos) – crowd or common people",
			"συναγωγή (synagōgē) – gathered assembly (contextual)"
		],
		"kjv": "Multitude",
		"foundin": "Strong’s: G4128 (πλῆθος)"
	},

	"Murrain": {
		"translatedEnglish": "Plague / Cattle Disease",
		"hebrewOriginal": "דֶּבֶר (dever)",
		"greekOriginal": "λοιμός κτηνῶν (loimos ktēnōn)",
		"greekMeaning": "Deadly pestilence affecting livestock",
		"greekAdditional": [
			"νόσος (nosos) – disease or sickness",
			"πληγή (plēgē) – plague or blow"
		],
		"kjv": "Murrain",
		"foundin": "Strong’s: H1698 (דֶּבֶר)"
	},
	"Mystery": {
		"translatedEnglish": "Revealed secret / Sacred plan",
		"hebrewOriginal": "רָז (raz) - Aramaic 'secret' (Dan)",
		"greekOriginal": "μυστήριον (mystērion)",
		"greekMeaning": "Once-hidden divine plan now revealed-not an unknowable enigma",
		"greekAdditional": [
			"ἀποκάλυψις (apokalypsis) – unveiling or disclosure",
			"βουλή (boulē) – counsel or divine plan"
		],
		"kjv": "Mystery",
		"foundin": "Vine’s: 'Mystery'; Strong’s: G3466 (μυστήριον)"
	},
	"Neesings": {
		"translatedEnglish": "Sneezings / Snorts",
		"hebrewOriginal": "עֲטִישׁוֹת (ʿatishot)",
		"greekOriginal": "πταρμός (ptarmos)",
		"greekMeaning": "Act of sneezing; figurative of snorting",
		"greekAdditional": [
			"ἀναπνοή (anapnoē) – breath or exhalation",
			"ῥέγχος (rhenchos) – snorting or snoring"
		],
		"kjv": "Neesings",
		"foundin": "Strong’s: H7838 (עֲטִישׁוֹת)"
	},
	"Nesh": {
		"translatedEnglish": "Tender / Delicate",
		"hebrewOriginal": "רַךְ (rakh)",
		"greekOriginal": "ἁπαλός (hapalos)",
		"greekMeaning": "Soft, delicate (Middle English term)",
		"greekAdditional": [
			"μαλακός (malakos) – soft or gentle",
			"λεπτός (leptos) – fine or subtle"
		],
		"kjv": "Nesh"
	},
	"Offend": {
		"translatedEnglish": "Cause to stumble",
		"hebrewOriginal": "מִכְשׁוֹל (mikshol)",
		"greekOriginal": "σκανδαλίζω (skandalizō)",
		"greekMeaning": "To trip up into sin-not just hurt feelings",
		"greekAdditional": [
			"προσκόπτω (proskoptō) – to stumble or strike against",
			"παραπλήσσω (paraplēssō) – to shock or unsettle"
		],
		"kjv": "Offend",
		"foundin": "Vine’s: 'Offend'; Strong’s: G4624 (σκανδαλίζω)"
	},
	"Oil": {
		"translatedEnglish": "Anointing / Empowerment / Presence",
		"hebrewOriginal": "שֶׁמֶן (shemen)",
		"greekOriginal": "ἔλαιον (elaion)",
		"greekMeaning": "Symbol of consecration and divine enablement-not just cooking oil",
		"greekAdditional": [
			"χρίσμα (chrisma) – anointing or consecration",
			"μύρον (myron) – fragrant oil used in sacred rites"
		],
		"kjv": "Oil",
		"foundin": "Vine’s: 'Oil'; Strong’s: G1637 (ἔλαιον)"
	},
	"Omer": {
		"translatedEnglish": "Dry measure of grain",
		"hebrewOriginal": "עֹמֶר (ʿōmer) – sheaf, measure",
		"greekOriginal": "γομόρις (gomoris)",
		"greekMeaning": "Ancient dry measure for grain, about 2.3 liters",
		"greekAdditional": [
			"μέτρον (métron) – measure",
			"στάχυς (stáchys) – ear of grain"
		],
		"kjv": "Omer",
		"foundin": "Strong’s: H6016 (עֹמֶר)"
	},
	"Onycha": {
		"translatedEnglish": "Aromatic mollusk shell used in incense",
		"hebrewOriginal": "שְׁחֵלֶת (sheḥeleth) – onycha",
		"greekOriginal": "ὄνυξ (ónyx)",
		"greekMeaning": "Claw, nail; shell‑derived incense ingredient",
		"greekAdditional": [
			"στίκτη (stíktē) – aromatic resin shell",
			"κογχύλιον (konkhýlion) – sea shell"
		],
		"kjv": "Onycha",
		"foundin": "Strong’s: H7827 (שְׁחֵלֶת)"
	},
	"Ordinances": {
		"translatedEnglish": "Decrees / Statutes / Traditions",
		"hebrewOriginal": "חֻקָּה (chuqqah) / מִשְׁפָּט (mishpat)",
		"greekOriginal": "δόγμα (dogma) / παράδοσις (paradosis)",
		"greekMeaning": "Authoritative rulings or handed-down practices",
		"greekAdditional": [
			"ἐντολή (entolē) – command or instruction",
			"νόμος (nomos) – law or principle"
		],
		"kjv": "Ordinances",
		"foundin": "Vine’s: 'Ordinance'; Strong’s: G1378 (δόγμα)"
	},

	"Ouches": {
		"translatedEnglish": "Settings / Mounts (for gems)",
		"hebrewOriginal": "מִשְׁבְּצוֹת (mishbetzot)",
		"greekOriginal": "ἐνθέματα (enthemata)",
		"greekMeaning": "Decorative mountings for stones/jewels",
		"greekAdditional": [
			"κόσμημα (kosmēma) – ornament or decorative piece",
			"δέσις λίθου (desis lithou) – stone setting or clasp",
			"ἐγκαρφώματα (engkarphōmata) – inlaid or embedded decorations"
		],
		"kjv": "Ouches",
		"foundin": "Strong’s: H4865 (מִשְׁבְּצוֹת)"
	},
	"Pannier": {
		"translatedEnglish": "Large basket for carrying loads",
		"hebrewOriginal": "דֻּד (dud) – pot, basket, jar",
		"greekOriginal": "σπυρίς (spyrís)",
		"greekMeaning": "Large basket, often for provisions",
		"greekAdditional": [
			"κανοῦν (kanoûn) – basket",
			"ταρσός (tarsós) – wicker frame"
		],
		"kjv": "Basket",
		"foundin": "Strong’s: G4711 (σπυρίς)"
	},
	"Passed Over": {
		"translatedEnglish": "Crossed / Transitioned / Spared",
		"hebrewOriginal": "עָבַר (avar)",
		"greekOriginal": "παρέρχομαι (parerchomai)",
		"greekMeaning": "To move across or bypass-not ignore",
		"greekAdditional": [
			"διαβαίνω (diabainō) – to cross over",
			"μεταβαίνω (metabainō) – to move from one state/place to another"
		],
		"kjv": "Passed Over",
		"foundin": "Strong’s: G3928 (παρέρχομαι)"
	},
	"Patience": {
		"translatedEnglish": "Endurance / Longsuffering / Steadfastness",
		"hebrewOriginal": "אֶרֶךְ אַפַּיִם (erekh appayim)",
		"greekOriginal": "ὑπομονή (hypomonē), μακροθυμία (makrothymia)",
		"greekMeaning": "Makrothymia: restraint under provocation; Hypomonē: endurance under trial",
		"greekAdditional": [
			"ἀνεξικακία (anexikakia) – tolerance or forbearance",
			"καρτερία (karteria) – perseverance or steadfastness"
		],
		"kjv": "Patience",
		"foundin": "Vine’s: 'Patience'; Strong’s: G5281 (ὑπομονή)"
	},
	"Patriarch": {
		"translatedEnglish": "Forefather / Foundational ancestor",
		"hebrewOriginal": "אָבוֹת (avot)",
		"greekOriginal": "πατριάρχης (patriarchēs)",
		"greekMeaning": "Ancestral leader-not just a male elder",
		"greekAdditional": [
			"προγόνος (progonos) – forebear or ancestor",
			"γενάρχης (genarchēs) – founder of a lineage"
		],
		"kjv": "Patriarch",
		"foundin": "Strong’s: G3966 (πατριάρχης)"
	},
	"Pavilion": {
		"translatedEnglish": "Tent or covered shelter",
		"hebrewOriginal": "סֻכָּה (sukkāh) – booth, shelter",
		"greekOriginal": "σκηνή (skēnḗ)",
		"greekMeaning": "Tent, tabernacle, temporary dwelling",
		"greekAdditional": [
			"σκῆνος (skēnos) – tabernacle",
			"καλύβη (kalýbē) – hut"
		],
		"kjv": "Pavilion",
		"foundin": "Strong’s: H5521 (סֻכָּה)"
	},
	"Peace": {
		"translatedEnglish": "Wholeness / Harmony / Reconciliation",
		"hebrewOriginal": "שָׁלוֹם (shalom)",
		"greekOriginal": "εἰρήνη (eirēnē)",
		"greekMeaning": "Shalom: holistic well-being; Eirēnē: harmony, often relational or spiritual",
		"greekAdditional": [
			"κατάπαυσις (katapausis) – rest or cessation",
			"συμφωνία (symphōnia) – agreement or concord"
		],
		"kjv": "Peace",
		"foundin": "Vine’s: 'Peace'; Strong’s: G1515 (εἰρήνη)"
	},
	"Peculiar": {
		"translatedEnglish": "Special / Owned",
		"hebrewOriginal": "סְגוּלָּה (segulah)",
		"greekOriginal": "περιούσιος (periousios)",
		"greekMeaning": "Special possession, not odd",
		"greekAdditional": [
			"ἐκλεκτός (eklektos) – chosen or selected",
			"ἴδιος (idios) – one's own or private"
		],
		"kjv": "Peculiar",
		"foundin": "Strong’s: G4041 (περιούσιος)"
	},
	"Peradventure": {
		"translatedEnglish": "Perhaps / Possibly",
		"hebrewOriginal": "אוּלַי (ʾulay) – maybe, perhaps",
		"greekOriginal": "ἴσως (ísōs)",
		"greekMeaning": "Expresses uncertainty or possibility",
		"greekAdditional": [
			"μήπως (mēpōs) – lest perhaps",
			"τάχα (tácha) – possibly"
		],
		"kjv": "Peradventure",
		"foundin": "Strong’s: G1508 (ἴσως)"
	},

	"Perceive": {
		"translatedEnglish": "Understand / Discern",
		"hebrewOriginal": "הֵבִין (hevin)",
		"greekOriginal": "νοέω (noeō), καταλαμβάνω (katalambanō)",
		"greekMeaning": "To grasp mentally or spiritually-not just notice",
		"greekAdditional": [
			"συνίημι (syniēmi) – to comprehend or grasp",
			"διακρίνω (diakrinō) – to distinguish or discern"
		],
		"kjv": "Perceive",
		"foundin": "Strong’s: G3539 (νοέω)"
	},
	"Perdition": {
		"translatedEnglish": "Ruin / Destruction",
		"hebrewOriginal": "אֲבַדּוֹן (abaddon) / אָבַד (avad)",
		"greekOriginal": "ἀπώλεια (apōleia)",
		"greekMeaning": "Loss/ruin, not annihilation in every context",
		"greekAdditional": [
			"φθορά (phthora) – corruption or decay",
			"καταστροφή (katastrophē) – overthrow or devastation"
		],
		"kjv": "Perdition",
		"foundin": "Vine’s: 'Perdition'; Strong’s: G684 (ἀπώλεια)"
	},
	"Perfect": {
		"translatedEnglish": "Complete / Mature / Whole",
		"hebrewOriginal": "תָּם (tam), שָׁלֵם (shalem)",
		"greekOriginal": "τέλειος (teleios)",
		"greekMeaning": "Teleios: mature, complete-not flawless",
		"greekAdditional": [
			"πλήρης (plērēs) – full or complete",
			"ἀρτιος (artios) – well-fitted or fully equipped"
		],
		"kjv": "Perfect",
		"foundin": "Vine’s: 'Perfect'; Strong’s: G5046 (τέλειος)"
	},
	"Perfection": {
		"translatedEnglish": "Completion / Maturity / Fulfillment",
		"hebrewOriginal": "תָּם (tam), שָׁלֵם (shalem)",
		"greekOriginal": "τελείωσις (teleiōsis)",
		"greekMeaning": "Teleiōsis: process of becoming whole-not flawlessness",
		"greekAdditional": [
			"τελειότης (teleiotēs) – completeness or maturity",
			"πλήρωσις (plērōsis) – fulfillment or full measure"
		],
		"kjv": "Perfection",
		"foundin": "Strong’s: G5047 (τελείωσις)"
	},
	"Perish": {
		"translatedEnglish": "Be Lost / Ruined / Destroyed",
		"hebrewOriginal": "אָבַד (avad)",
		"greekOriginal": "ἀπόλλυμι (apollymi)",
		"greekMeaning": "To be ruined or lost-not necessarily eternal torment",
		"greekAdditional": [
			"φθείρω (phtheirō) – to corrupt or decay",
			"ἐξαφανίζομαι (exaphanizomai) – to vanish or be wiped out"
		],
		"kjv": "Perish",
		"foundin": "Vine’s: 'Perish'; Strong’s: G622 (ἀπόλλυμι)"
	},
	"Phylactery": {
		"translatedEnglish": "Scripture case worn as reminder",
		"hebrewOriginal": "טְפִלִּין (tefillin) – bound scroll case",
		"greekOriginal": "φυλακτήριον (phylaktērion)",
		"greekMeaning": "Amulet or case containing texts; emblem of covenant identity",
		"greekAdditional": [
			"περίαπτον (periápton) – amulet",
			"ἀποτρόπαιον (apotrópaion) – protective charm"
		],
		"kjv": "Phylactery",
		"foundin": "Strong’s: G5440 (φυλακτήριον)"
	},
	"Pilled": {
		"translatedEnglish": "Stripped / Peeled",
		"hebrewOriginal": "פָּשַׁט (pashat)",
		"greekOriginal": "ἀπογυμνόω (apogymnoō)",
		"greekMeaning": "To remove covering or bark",
		"greekAdditional": [
			"γυμνόω (gymnoō) – to make bare",
			"ἀποξέω (apoxeō) – to scrape off"
		],
		"kjv": "Pilled",
		"foundin": "Strong’s: G640 (ἀπογυμνόω)"
	},
	"Plummet": {
		"translatedEnglish": "Lead weight for measuring verticality",
		"hebrewOriginal": "אֲבְנֵא־בְדִיל (avnei-vedil) – stone of lead",
		"greekOriginal": "μόλυβδος (mólybdos)",
		"greekMeaning": "Lead used as a weight for a measuring line",
		"greekAdditional": [
			"κανών (kanṓn) – measuring rod or rule",
			"σταθμός (stathmós) – standard or measure"
		],
		"kjv": "Plummet",
		"foundin": "Strong’s: H4949 (בְּדִיל)"
	},
	"Pollutions (of idols)": {
		"translatedEnglish": "Defilements from idolatry",
		"hebrewOriginal": "טֻמְאָה (tum'ah)",
		"greekOriginal": "ἀλίσγημα (alisgēma)",
		"greekMeaning": "Ceremonial/moral contamination linked to idol practices",
		"greekAdditional": [
			"μίασμα (miasma) – defilement or stain",
			"βεβήλωσις (bebēlōsis) – profanation or desecration"
		],
		"kjv": "Pollutions",
		"foundin": "Strong’s: G169 (ἀλίσγημα)"
	},

	"Poniard": {
		"translatedEnglish": "Short dagger",
		"hebrewOriginal": "חֶרֶב קְצָרָה (cherev qetzarah)",
		"greekOriginal": "στυλέτος (stylétos)",
		"greekMeaning": "Small pointed weapon for close combat",
		"greekAdditional": [
			"μάχαιρα (mákhaira) – sword/dagger",
			"ξιφησκίον (xiphēskíon) – short sword",
			"ἐγχείριον (encheirion) – weapon held in hand"
		],
		"kjv": "Poniard",
		"foundin": "Strong’s: G3162 (μάχαιρα)"
	},
	"Power": {
		"translatedEnglish": "Authority / Ability",
		"hebrewOriginal": "כֹּחַ (koach), גְּבוּרָה (gevurah), שִׁלְטוֹן (shilton)",
		"greekOriginal": "ἐξουσία (exousia), δύναμις (dynamis)",
		"greekMeaning": "Exousia is delegated authority; dynamis is miraculous power",
		"greekAdditional": [
			"ἰσχύς (ischys) – strength or force",
			"ἐνέργεια (energeia) – active working or operation"
		],
		"kjv": "Power",
		"foundin": "Vine’s: 'Power'; Strong’s: G1411 (δύναμις)"
	},
	"Preach": {
		"translatedEnglish": "Proclaim / Herald / Announce",
		"hebrewOriginal": "בָּשַׂר (basar)",
		"greekOriginal": "κηρύσσω (kēryssō), εὐαγγελίζομαι (euangelizomai)",
		"greekMeaning": "Kēryssō: to herald publicly; Euangelizomai: to bring good news",
		"greekAdditional": [
			"λαλέω (laleō) – to speak or declare",
			"διαμαρτύρομαι (diamartyromai) – to testify or affirm solemnly"
		],
		"kjv": "Preach",
		"foundin": "Vine’s: 'Preach'; Strong’s: G2784 (κηρύσσω)"
	},
	"Predestinate": {
		"translatedEnglish": "Foreordain / Mark Out Beforehand",
		"hebrewOriginal": "קָבַע מֵרֹאשׁ (qava me-rosh)",
		"greekOriginal": "προορίζω (proorizō)",
		"greekMeaning": "To determine boundaries or purpose beforehand—not fatalistic control",
		"greekAdditional": [
			"προγινώσκω (proginōskō) – to foreknow or foresee",
			"προκαθορίζω (prokathorizō) – to predefine or preassign"
		],
		"kjv": "Predestinate",
		"foundin": "Vine’s: 'Predestinate'; Strong’s: G4309 (προορίζω)"
	},
	"Predestination": {
		"translatedEnglish": "Mark out beforehand",
		"hebrewOriginal": null,
		"greekOriginal": "προορίζω (proorizō)",
		"greekMeaning": "To determine boundary/goal in advance; teleological marking",
		"greekAdditional": [
			"προκαθορίζω (prokathorizō) – to predefine or set limits",
			"προτίθεμαι (protithemai) – to purpose or plan beforehand"
		],
		"kjv": "Predestinate/Predestination",
		"foundin": "Strong’s: G4309 (προορίζω)"
	},
	"Prevent": {
		"translatedEnglish": "Go before / Precede",
		"hebrewOriginal": "קִדֵּם (kidem)",
		"greekOriginal": "προφθάνω (prophthanō)",
		"greekMeaning": "To arrive ahead, not to stop",
		"greekAdditional": [
			"προέρχομαι (proerchomai) – to go before",
			"προλαμβάνω (prolambanō) – to anticipate or take before"
		],
		"kjv": "Prevent",
		"foundin": "Strong’s: G5348 (προφθάνω)"
	},
	"Priest": {
		"translatedEnglish": "Mediator / Intercessor / Sacred Servant",
		"hebrewOriginal": "כֹּהֵן (kohen)",
		"greekOriginal": "ἱερεύς (hiereus)",
		"greekMeaning": "One who serves in sacred space-not inherently hierarchical",
		"greekAdditional": [
			"λειτουργός (leitourgos) – public servant or minister",
			"ἀρχιερεύς (archiereus) – high priest or chief priest"
		],
		"kjv": "Priest",
		"foundin": "Vine’s: 'Priest'; Strong’s: G2409 (ἱερεύς)"
	},
	"Privily": {
		"translatedEnglish": "Secretly / In private",
		"hebrewOriginal": "בַּסֵּתֶר (baseter)",
		"greekOriginal": "λάθρα (lathra)",
		"greekMeaning": "Hidden, in secret, not openly",
		"greekAdditional": [
			"κρυφίως (kryphiōs) – secretly or covertly",
			"ἐν τῷ κρυπτῷ (en tō kryptō) – in the hidden place"
		],
		"kjv": "Privily",
		"foundin": "Strong’s: G2977 (λάθρα)"
	},
	"Privy": {
		"translatedEnglish": "Secret / Private",
		"hebrewOriginal": "סָתַר (satar)",
		"greekOriginal": "κρυπτός (kryptos)",
		"greekMeaning": "Hidden, concealed",
		"greekAdditional": [
			"λάθρᾳ (lathra) – secretly",
			"ἀπόρρητος (aporrētos) – forbidden/secret"
		],
		"kjv": "Privy",
		"foundin": "Strong’s: G2927 (κρυπτός)"
	},

	"Prophecy": {
		"translatedEnglish": "Inspired Message / Divine Insight / Forth-Telling",
		"hebrewOriginal": "נְבוּאָה (nevuah)",
		"greekOriginal": "προφητεία (prophēteia)",
		"greekMeaning": "Speaking divine truth-not always prediction",
		"greekAdditional": [
			"προφητεύω (prophēteuō) – to speak forth or declare divine truth",
			"ἀποκάλυψις (apokalypsis) – unveiling or revelation"
		],
		"kjv": "Prophecy",
		"foundin": "Vine’s: 'Prophecy'; Strong’s: G4394 (προφητεία)"
	},
	"Prophet": {
		"translatedEnglish": "Spokesperson / Inspired Messenger",
		"hebrewOriginal": "נָבִיא (navi)",
		"greekOriginal": "προφήτης (prophētēs)",
		"greekMeaning": "One who speaks forth divine insight-not just future predictions",
		"greekAdditional": [
			"κηρυξ (kēryx) – herald or public announcer",
			"διδάσκαλος (didaskalos) – teacher or instructor"
		],
		"kjv": "Prophet",
		"foundin": "Vine’s: 'Prophet'; Strong’s: G4396 (προφήτης)"
	},
	"Propitiation": {
		"translatedEnglish": "Atoning Sacrifice / Appeasement",
		"hebrewOriginal": "כָּפַר (kafar)",
		"greekOriginal": "ἱλαστήριον (hilastērion)",
		"greekMeaning": "A place or act of atonement—often referring to the mercy seat, where divine justice and mercy converge",
		"greekAdditional": [
			"λύτρον (lytron) – ransom or redemption price",
			"ἱλασμός (hilasmos) – appeasement or satisfaction of wrath",
			"ἐξιλάσκομαι (exilaskomai) – to make reconciliation or expiation"
		],
		"kjv": "Propitiation",
		"foundin": "Vine’s: 'Propitiation'; Strong’s: G2435 (ἱλαστήριον)"
	},
	"Prows": {
		"translatedEnglish": "Foreparts of ships",
		"hebrewOriginal": "חֹטֶם הַסְּפִינָה (chotem hasfina)",
		"greekOriginal": "πρωραῖον (prōraîon)",
		"greekMeaning": "The bow or forward part of a ship",
		"greekAdditional": [
			"πρῷρα (prōra) – prow, bow",
			"ἐπίκριον (epíkrion) – ship’s beak or ram",
			"κεφαλή πλοίου (kephalē ploiou) – ship’s head"
		],
		"kjv": "Prows"
	},
	"Put Away": {
		"translatedEnglish": "Removed / Dismissed / Separated",
		"hebrewOriginal": "שָׁלַח (shalach), סוּר (sur)",
		"greekOriginal": "ἀφίημι (aphiēmi), ἀποβάλλω (apoballō)",
		"greekMeaning": "To send away or release-not discard",
		"greekAdditional": [
			"ἐκβάλλω (ekballō) – to cast out or expel",
			"χωρίζω (chōrizō) – to separate or divide"
		],
		"kjv": "Put Away",
		"foundin": "Strong’s: G863 (ἀφίημι)"
	},
	"Quench": {
		"translatedEnglish": "Suppress / Extinguish",
		"hebrewOriginal": "כִּבָּה (kibah)",
		"greekOriginal": "σβέννυμι (sbennymi)",
		"greekMeaning": "To stifle or put out-not just cool down",
		"greekAdditional": [
			"ἀφανίζω (aphanizō) – to make disappear",
			"καταπαύω (katapauō) – to bring to rest or cease"
		],
		"kjv": "Quench",
		"foundin": "Vine’s: 'Quench'; Strong’s: G4570 (σβέννυμι)"
	},
	"Quick": {
		"translatedEnglish": "Alive / Living / Active",
		"hebrewOriginal": "חַי (chai)",
		"greekOriginal": "ζῶν (zōn)",
		"greekMeaning": "Zōn: living-not fast or speedy",
		"greekAdditional": [
			"ζωοποιέω (zōopoieō) – to make alive or give life",
			"ἐνεργός (energós) – active or effectual"
		],
		"kjv": "Quick",
		"foundin": "Strong’s: G2198 (ζάω)"
	},
	"Quickened": {
		"translatedEnglish": "Made alive",
		"hebrewOriginal": "חִיָּה (chiyyah)",
		"greekOriginal": "ζῳοποιέω (zōopoieō)",
		"greekMeaning": "To give life-not 'sped up'",
		"greekAdditional": [
			"ἐγείρω (egeirō) – to raise or awaken",
			"ἀναζωπυρέω (anazōpyreō) – to rekindle or revive"
		],
		"kjv": "Quickened",
		"foundin": "Vine’s: 'Quickened'; Strong’s: G2227 (ζῳοποιέω)"
	},
	"Quit You Like Men": {
		"translatedEnglish": "Be Courageous / Act Like Men",
		"hebrewOriginal": "חֲזַק וֶאֱמָץ (ḥazaq veʾematz)",
		"greekOriginal": "ἀνδρίζεσθε (andrizesthe)",
		"greekMeaning": "To act courageously; to conduct oneself with bravery",
		"greekAdditional": [
			"κραταιοῦσθε (krataiousthe) – be strong",
			"θαρσεῖτε (tharseite) – take courage"
		],
		"kjv": "Quit You Like Men",
		"foundin": "Strong’s: G407 (ἀνδρίζεσθε)"
	},
	"Ransom": {
		"translatedEnglish": "Price of release / Redemption",
		"hebrewOriginal": "פִּדְיוֹן (pidyon)",
		"greekOriginal": "λύτρον (lytron)",
		"greekMeaning": "Payment to liberate from bondage-not just rescue",
		"greekAdditional": [
			"ἀπολύτρωσις (apolytrōsis) – full release or redemption",
			"ἐξαγοράζω (exagorazō) – to buy out or rescue"
		],
		"kjv": "Ransom",
		"foundin": "Vine’s: 'Ransom'; Strong’s: G3083 (λύτρον)"
	},

	"Reckon": {
		"translatedEnglish": "Consider as true / Account",
		"hebrewOriginal": "חָשַׁב (chashav)",
		"greekOriginal": "λογίζομαι (logizomai)",
		"greekMeaning": "To count/credit to one’s account-not 'guess'",
		"greekAdditional": [
			"ἐπιλογίζομαι (epilogizomai) – to reflect or consider",
			"συλογίζομαι (sylogizomai) – to reason or compute"
		],
		"kjv": "Reckon",
		"foundin": "Vine’s: 'Reckon'; Strong’s: G3049 (λογίζομαι)"
	},
	"Recompense": {
		"translatedEnglish": "Repay / Retribution",
		"hebrewOriginal": "גְּמוּל (gemul)",
		"greekOriginal": "ἀνταπόδοσις (antapodosis)",
		"greekMeaning": "To give back what is due-good or bad",
		"greekAdditional": [
			"μισθός (misthos) – wages or reward",
			"ἀπόδοσις (apodosis) – giving back or settlement"
		],
		"kjv": "Recompense",
		"foundin": "Strong’s: G469 (ἀνταπόδοσις)"
	},
	"Reconcile": {
		"translatedEnglish": "Restore Relationship / Exchange Hostility for Peace",
		"hebrewOriginal": "כָּפַר (kapar) [contextual]",
		"greekOriginal": "καταλλάσσω (katallassō)",
		"greekMeaning": "To bring into harmony-not just forgive",
		"greekAdditional": [
			"διαλλαγή (diallagē) – mutual reconciliation",
			"εἰρηνεύω (eirēneuō) – to make peace or bring harmony"
		],
		"kjv": "Reconcile",
		"foundin": "Vine’s: 'Reconcile'; Strong’s: G2644 (καταλλάσσω)"
	},
	"Reconciliation": {
		"translatedEnglish": "Restored relationship / Peace",
		"hebrewOriginal": "כִּפֶּר (kipper)",
		"greekOriginal": "καταλλαγή (katallagē)",
		"greekMeaning": "Exchange of hostility for peace",
		"greekAdditional": [
			"εἰρηνεύω (eirēneuō) – to make peace",
			"διαλλαγή (diallagē) – mutual reconciliation"
		],
		"kjv": "Reconciliation",
		"foundin": "Vine’s: 'Reconciliation'; Strong’s: G2643 (καταλλαγή)"
	},
	"Redeem": {
		"translatedEnglish": "Buy back / Rescue / Liberate",
		"hebrewOriginal": "פָּדָה (padah), גָּאַל (ga'al)",
		"greekOriginal": "λυτρόω (lytroō), ἐξαγοράζω (exagorazō)",
		"greekMeaning": "To pay a ransom or free from bondage-not just forgive",
		"greekAdditional": [
			"ἀπολύτρωσις (apolytrōsis) – full release or redemption",
			"λύτρον (lytron) – ransom price"
		],
		"kjv": "Redeem",
		"foundin": "Vine’s: 'Redeem'; Strong’s: G3084 (λυτρόω)"
	},
	"Redemption": {
		"translatedEnglish": "Ransom / Liberation / Buyback",
		"hebrewOriginal": "פָּדָה (padah), גָּאַל (ga'al)",
		"greekOriginal": "ἀπολύτρωσις (apolytrōsis)",
		"greekMeaning": "To release by payment or rescue-not just forgiveness",
		"greekAdditional": [
			"λύτρωσις (lytrōsis) – deliverance or ransom",
			"ἐξαγοράζω (exagorazō) – to buy out or redeem"
		],
		"kjv": "Redemption",
		"foundin": "Vine’s: 'Redemption'; Strong’s: G629 (ἀπολύτρωσις)"
	},
	"Redress": {
		"translatedEnglish": "Make Right / Restore / Compensate",
		"hebrewOriginal": "שׁוּב (shuv), פָּקַד (paqad)",
		"greekOriginal": "ἀποκαθίστημι (apokathistēmi)",
		"greekMeaning": "To restore or make whole-not just legal compensation",
		"greekAdditional": [
			"ἀναπληρόω (anaplēroō) – to fill up or make complete",
			"ἐπανορθόω (epanorthōō) – to correct or restore"
		],
		"kjv": "Redress",
		"foundin": "Strong’s: G600 (ἀποκαθίστημι)"
	},
	"Regeneration": {
		"translatedEnglish": "New birth / Renewal",
		"hebrewOriginal": "חָדָשׁ (chadash)",
		"greekOriginal": "παλιγγενεσία (palingenesia)",
		"greekMeaning": "Genesis-again; spiritual rebirth/renewal",
		"greekAdditional": [
			"ἀναγέννησις (anagennēsis) – rebirth or regeneration",
			"καινὴ κτίσις (kainē ktisis) – new creation"
		],
		"kjv": "Regeneration",
		"foundin": "Vine’s: 'Regeneration'; Strong’s: G3824 (παλιγγενεσία)"
	},

	"Reign": {
		"translatedEnglish": "Rule / Dominion / Active Governance",
		"hebrewOriginal": "מָשַׁל (mashal)",
		"greekOriginal": "βασιλεύω (basileuō)",
		"greekMeaning": "To actively govern-not just ceremonial title",
		"greekAdditional": [
			"ἄρχω (archō) – to lead or govern",
			"κυριεύω (kyrieūō) – to exercise lordship"
		],
		"kjv": "Reign",
		"foundin": "Strong’s: G936 (βασιλεύω)"
	},
	"Reins": {
		"translatedEnglish": "Kidneys / Inner Being",
		"hebrewOriginal": "כִּלְיוֹת (kilyot)",
		"greekOriginal": "νεφροί (nephroi)",
		"greekMeaning": "Kidneys as the seat of emotion/intent (figurative)",
		"greekAdditional": [
			"καρδία (kardia) – heart",
			"σπλάγχνα (splanchna) – inner affections"
		],
		"kjv": "Reins",
		"foundin": "Strong’s: H3629 (כִּלְיָה)"
	},
	"Remission": {
		"translatedEnglish": "Release / Forgiveness",
		"hebrewOriginal": "סְלִיחָה (selichah)",
		"greekOriginal": "ἄφεσις (aphesis)",
		"greekMeaning": "Release from debt/bondage; pardon",
		"greekAdditional": [
			"χάρις (charis) – grace or favor",
			"παράκλησις (paraklēsis) – comfort or appeal"
		],
		"kjv": "Remission",
		"foundin": "Vine’s: 'Remission'; Strong’s: G859 (ἄφεσις)"
	},
	"Remnant": {
		"translatedEnglish": "Surviving Group / Faithful Few / Preserved Line",
		"hebrewOriginal": "שְׁאֵרִית (she'erit)",
		"greekOriginal": "λεῖμμα (leimma)",
		"greekMeaning": "Those preserved for purpose-not just leftovers",
		"greekAdditional": [
			"κατάλειμμα (kataleimma) – that which remains",
			"ἐκλογή (eklogē) – chosen or selected group"
		],
		"kjv": "Remnant",
		"foundin": "Vine’s: 'Remnant'; Strong’s: G3005 (λεῖμμα)"
	},
	"Rent": {
		"translatedEnglish": "Tore / Split / Broke Open",
		"hebrewOriginal": "קָרַע (qara)",
		"greekOriginal": "ῥήγνυμι (rhēgnymi)",
		"greekMeaning": "To tear violently-not lease property",
		"greekAdditional": [
			"σχίζω (schizō) – to split or tear",
			"διαρρήγνυμι (diarrēgnumi) – to tear apart violently"
		],
		"kjv": "Rent",
		"foundin": "Strong’s: G4486 (ῥήγνυμι)"
	},
	"Repent": {
		"translatedEnglish": "Change of Mind / Turn Around",
		"hebrewOriginal": "שׁוּב (shuv)",
		"greekOriginal": "μετανοέω (metanoeō)",
		"greekMeaning": "To change one’s mind or purpose-not merely feel remorse",
		"greekAdditional": [
			"ἐπιστρέφω (epistrephō) – to turn back or return",
			"μεταμέλομαι (metamelomai) – to regret or reconsider"
		],
		"kjv": "Repent",
		"foundin": "Vine’s: 'Repent'; Strong’s: G3340 (μετανοέω)"
	},
	"Repentance": {
		"translatedEnglish": "Change of mind / Transformation",
		"hebrewOriginal": "תְּשׁוּבָה (teshuvah)",
		"greekOriginal": "μετάνοια (metanoia)",
		"greekMeaning": "A complete change of heart and direction, not just regret",
		"greekAdditional": [
			"μεταμέλομαι (metamelomai) – to feel remorse or regret",
			"ἐπιστρέφω (epistrephō) – to turn back or return"
		],
		"kjv": "Repentance",
		"foundin": "Vine’s: 'Repentance'; Strong’s: G3341 (μετάνοια)"
	},
	"Repented": {
		"translatedEnglish": "Regretted / Changed Course / Reconsidered",
		"hebrewOriginal": "נִחַם (nicham)",
		"greekOriginal": "μεταμέλομαι (metamelomai)",
		"greekMeaning": "To feel sorrow or change intent-not moral repentance",
		"greekAdditional": [
			"μετανοέω (metanoeō) – to change one’s mind or direction",
			"ἀναλογίζομαι (analogizomai) – to reconsider or reflect"
		],
		"kjv": "Repented",
		"foundin": "Strong’s: G3338 (μεταμέλομαι)"
	},
	"Reprobate": {
		"translatedEnglish": "Unapproved / Rejected After Testing",
		"hebrewOriginal": "מָאַס (ma'as)",
		"greekOriginal": "ἀδόκιμος (adokimos)",
		"greekMeaning": "Adokimos: failed the test-not inherently evil",
		"greekAdditional": [
			"ἀθετέω (atheteō) – to reject or nullify",
			"ἐκπίπτω (ekpiptō) – to fall away or be cast off"
		],
		"kjv": "Reprobate",
		"foundin": "Vine’s: 'Reprobate'; Strong’s: G96 (ἀδόκιμος)"
	},
	"Reproof": {
		"translatedEnglish": "Correction / Conviction",
		"hebrewOriginal": "תוֹכֵחָה (tochechah)",
		"greekOriginal": "ἔλεγχος (elenchos)",
		"greekMeaning": "Expose error for restoration-not condemnation",
		"greekAdditional": [
			"νουθεσία (nouthesia) – admonition or warning",
			"ἐπανόρθωσις (epanorthōsis) – restoration or correction"
		],
		"kjv": "Reproof",
		"foundin": "Vine’s: 'Reproof'; Strong’s: G1650 (ἔλεγχος)"
	},

	"Rereward": {
		"translatedEnglish": "Rear guard / Troops at the back",
		"hebrewOriginal": "אָסֵף (āsēf) – gatherer, rear guard",
		"greekOriginal": "ὀπισθοφυλακή (opisthophylakḗ)",
		"greekMeaning": "Guard stationed at the rear",
		"greekAdditional": [
			"ὀπίσω (opísō) – behind",
			"φρουρά (phrourá) – guard, garrison"
		],
		"kjv": "Rereward",
		"foundin": "Strong’s: H622 (אָסַף)"
	},
	"Rest": {
		"translatedEnglish": "Relief / Renewal / Sabbath peace",
		"hebrewOriginal": "מְנוּחָה (menuchah), שַׁבָּת (shabbat)",
		"greekOriginal": "ἀνάπαυσις (anapausis)",
		"greekMeaning": "Spiritual refreshment-not just sleep or inactivity",
		"greekAdditional": [
			"κατάπαυσις (katapausis) – divine rest or cessation",
			"εἰρήνη (eirēnē) – peace or wholeness"
		],
		"kjv": "Rest",
		"foundin": "Vine’s: 'Rest'; Strong’s: G372 (ἀνάπαυσις)"
	},
	"Resurrection": {
		"translatedEnglish": "Rising / Awakening / Restoration to Life",
		"hebrewOriginal": "תְּחִיָּה (techiyyah)",
		"greekOriginal": "ἀνάστασις (anastasis)",
		"greekMeaning": "Standing up again-bodily or spiritually",
		"greekAdditional": [
			"ἐγείρω (egeirō) – to raise or awaken",
			"ζωοποιέω (zōopoieō) – to make alive or quicken"
		],
		"kjv": "Resurrection",
		"foundin": "Vine’s: 'Resurrection'; Strong’s: G386 (ἀνάστασις)"
	},
	"Revelation": {
		"translatedEnglish": "Unveiling / Disclosure / Manifestation",
		"hebrewOriginal": "גִּלּוּי (giluy)",
		"greekOriginal": "ἀποκάλυψις (apokalypsis)",
		"greekMeaning": "To uncover or disclose-not just end-time prophecy",
		"greekAdditional": [
			"φανέρωσις (phanerōsis) – manifestation or making known",
			"ἐπιφάνεια (epiphaneia) – appearance or visible showing"
		],
		"kjv": "Revelation",
		"foundin": "Vine’s: 'Revelation'; Strong’s: G602 (ἀποκάλυψις)"
	},
	"Righteousness": {
		"translatedEnglish": "Justice / Right Standing / Covenant Loyalty",
		"hebrewOriginal": "צְדָקָה (tsedaqah)",
		"greekOriginal": "δικαιοσύνη (dikaiosynē)",
		"greekMeaning": "Right relationship with God and others-not just moral perfection",
		"greekAdditional": [
			"εὐθύτης (euthytēs) – uprightness or integrity",
			"καλοκαγαθία (kalokagathia) – noble goodness (classical)"
		],
		"kjv": "Righteousness",
		"foundin": "Vine’s: 'Righteousness'; Strong’s: G1343 (δικαιοσύνη)"
	},
	"Riot": {
		"translatedEnglish": "Debauchery / Wild living",
		"hebrewOriginal": "זֹלְל וְסֹבֵא (zolel ve-sove)",
		"greekOriginal": "ἀσωτία (asōtia)",
		"greekMeaning": "Wasteful, dissolute living",
		"greekAdditional": [
			"μέθη (methē) – drunkenness",
			"ἀκρασία (akrasia) – lack of self-control"
		],
		"kjv": "Riot",
		"foundin": "Strong’s: G810 (ἀσωτία)"
	},
	"Rose Up": {
		"translatedEnglish": "Got Up / Took Action / Initiated",
		"hebrewOriginal": "קוּם (qum)",
		"greekOriginal": "ἀνίστημι (anistēmi)",
		"greekMeaning": "To rise or begin-not just physical movement",
		"greekAdditional": [
			"ἐγείρω (egeirō) – to awaken or raise up",
			"ἐξανίστημι (exanistēmi) – to rise up out of"
		],
		"kjv": "Rose Up",
		"foundin": "Strong’s: G450 (ἀνίστημι)"
	},
	"Sackbut": {
		"translatedEnglish": "Ancient stringed instrument",
		"hebrewOriginal": "נֵבֶל (nēvel) – harp or lyre",
		"greekOriginal": "σαμβύκη (sambýkē)",
		"greekMeaning": "Stringed instrument, similar to a harp",
		"greekAdditional": [
			"κιθάρα (kithára) – lyre",
			"ψαλτήριον (psaltḗrion) – psaltery"
		],
		"kjv": "Sackbut",
		"foundin": "Strong’s: H5481 (סַבְּכָּה)"
	},
	"Sackcloth": {
		"translatedEnglish": "Rough Garment of Mourning",
		"hebrewOriginal": "שַׂק (saq)",
		"greekOriginal": "σάκκος (sakkos)",
		"greekMeaning": "Coarse cloth worn in grief or repentance",
		"greekAdditional": [
			"πένθιμος ἐσθής (penthimos esthēs) – mourning garment",
			"τραχύς ἱματισμός (trachys himatismos) – rough clothing"
		],
		"kjv": "Sackcloth",
		"foundin": "Vine’s: 'Sackcloth'; Strong’s: G4526 (σάκκος)"
	},

	"Saint": {
		"translatedEnglish": "Holy One / Set-Apart Person",
		"hebrewOriginal": "חָסִיד (chasid), קָדוֹשׁ (qadosh)",
		"greekOriginal": "ἅγιος (hagios)",
		"greekMeaning": "Hagios: one set apart for divine purpose-not sinless elite",
		"greekAdditional": [
			"κλητός (klētos) – called or invited",
			"πιστός (pistos) – faithful or trustworthy"
		],
		"kjv": "Saint",
		"foundin": "Vine’s: 'Saint'; Strong’s: G40 (ἅγιος)"
	},
	"Saints": {
		"translatedEnglish": "Holy Ones / Set-Apart People",
		"hebrewOriginal": "קְדוֹשִׁים (qedoshim)",
		"greekOriginal": "ἅγιοι (hagioi)",
		"greekMeaning": "Those consecrated for divine purpose-not canonized figures",
		"greekAdditional": [
			"κλητοί (klētoi) – called ones",
			"πιστοί (pistoi) – faithful or trustworthy ones"
		],
		"kjv": "Saints",
		"foundin": "Strong’s: G40 (ἅγιοι)"
	},
	"Salvation": {
		"translatedEnglish": "Deliverance / Rescue / Restoration",
		"hebrewOriginal": "יְשׁוּעָה (yeshuah)",
		"greekOriginal": "σωτηρία (sōtēria)",
		"greekMeaning": "Sōtēria: rescue from danger, restoration-not just eternal destiny",
		"greekAdditional": [
			"ῥύομαι (rhyomai) – to rescue or deliver",
			"ἀνάσωσις (anasōsis) – recovery or restoration"
		],
		"kjv": "Salvation",
		"foundin": "Vine’s: 'Salvation'; Strong’s: G4991 (σωτηρία)"
	},
	"Sanctification": {
		"translatedEnglish": "Ongoing Consecration / Growth in Holiness",
		"hebrewOriginal": "הִתְקַדֵּשׁ (hitkadesh)",
		"greekOriginal": "ἁγιασμός (hagiasmos)",
		"greekMeaning": "Process of being set apart-not instant perfection",
		"greekAdditional": [
			"ἁγνισμός (hagnismos) – purification or cleansing",
			"τελειοποίηση (teleiopoiēsis) – perfecting or maturing"
		],
		"kjv": "Sanctification",
		"foundin": "Vine’s: 'Sanctification'; Strong’s: G38 (ἁγιασμός)"
	},
	"Sanctify": {
		"translatedEnglish": "Set Apart / Consecrate / Dedicate",
		"hebrewOriginal": "קָדַשׁ (qadash)",
		"greekOriginal": "ἁγιάζω (hagiazō)",
		"greekMeaning": "To make holy by setting apart-not moral perfection",
		"greekAdditional": [
			"καθαρίζω (katharizō) – to cleanse or purify",
			"ἀφορίζω (aphorizō) – to separate or designate"
		],
		"kjv": "Sanctify",
		"foundin": "Vine’s: 'Sanctify'; Strong’s: G37 (ἁγιάζω)"
	},
	"Sanctuary": {
		"translatedEnglish": "Sacred place / Refuge",
		"hebrewOriginal": "מִקְדָּשׁ (miqdash)",
		"greekOriginal": "ἁγίασμα (hagiasma)",
		"greekMeaning": "A place set apart for God's presence, not just a building",
		"greekAdditional": [
			"ναός (naos) – inner temple or dwelling place",
			"σκηνή (skēnē) – tabernacle or tent of meeting"
		],
		"kjv": "Sanctuary",
		"foundin": "Strong’s: G39 (ἁγίασμα)"
	},
	"Sardonyx": {
		"translatedEnglish": "Onyx with red/brown sard bands",
		"hebrewOriginal": "שֹׁהַם (shoham)",
		"greekOriginal": "σαρδόνυξ (sardónyx)",
		"greekMeaning": "Banded stone of sard and onyx layers",
		"greekAdditional": [
			"σαρδῖον (sardîon) – sard stone",
			"ὄνυξ (ónyx) – onyx"
		],
		"kjv": "Sardonyx",
		"foundin": "Strong’s: G4557 (σαρδόνυξ)"
	},
	"Scant": {
		"translatedEnglish": "Reduce / Withhold",
		"hebrewOriginal": "גָּזַל (gāzal) – to rob, take away unjustly",
		"greekOriginal": "στερέω (steréō)",
		"greekMeaning": "To deprive, withhold, or deny what is due",
		"greekAdditional": [
			"ἐλαττόω (elattóō) – to diminish, make less",
			"ἀποστερέω (aposteréō) – to defraud, withhold unlawfully",
			"λείπω (leípō) – to leave lacking"
		],
		"kjv": "Scant",
		"foundin": "Strong’s: G473 (στερέω)"
	},
	"Scrip": {
		"translatedEnglish": "Small bag for provisions",
		"hebrewOriginal": "תַּרְמִיל (tarmil) – travel bag, pouch",
		"greekOriginal": "πήρα (pḗra)",
		"greekMeaning": "Traveller’s bag or pouch for supplies",
		"greekAdditional": [
			"ἀγγεῖον (angeîon) – container, vessel",
			"θυλάκιον (thylákion) – small sack or pouch"
		],
		"kjv": "Scrip",
		"foundin": "Strong’s: G4082 (πήρα)"
	},

	"Seal": {
		"translatedEnglish": "Mark / Authentication / Ownership",
		"hebrewOriginal": "חוֹתָם (chotam)",
		"greekOriginal": "σφραγίς (sphragis)",
		"greekMeaning": "Symbol of protection or ownership-not just wax stamp",
		"greekAdditional": [
			"χαράσσω (charassō) – to engrave or inscribe",
			"τεκμήριον (tekmērion) – proof or token"
		],
		"kjv": "Seal",
		"foundin": "Vine’s: 'Seal'; Strong’s: G4973 (σφραγίς)"
	},
	"Seditions": {
		"translatedEnglish": "Divisions / Dissensions",
		"hebrewOriginal": "מֶרִי (meri)",
		"greekOriginal": "διχοστασίες (dichostasies)",
		"greekMeaning": "Splits within a group; party-making",
		"greekAdditional": [
			"ἀνταρσία (antarsia) – insurrection or revolt",
			"ἀποστασία (apostasia) – defection or falling away"
		],
		"kjv": "Seditions",
		"foundin": "Strong’s: G1370 (διχοστασία)"
	},
	"Shambles": {
		"translatedEnglish": "Meat Market / Slaughterhouse",
		"hebrewOriginal": "שׁוּק הַבָּשָׂר (shuq habasar)",
		"greekOriginal": "μάκελλον (makellon)",
		"greekMeaning": "Place where meat is sold",
		"greekAdditional": [
			"κρεωπολεῖον (kreōpoleion) – butcher’s shop",
			"σφαγεῖον (sfageion) – slaughterhouse"
		],
		"kjv": "Shambles",
		"foundin": "Strong’s: G3111 (μάκελλον)"
	},
	"Shittim": {
		"translatedEnglish": "Acacia wood",
		"hebrewOriginal": "שִׁטִּים (shiṭṭîm) – acacia trees",
		"greekOriginal": "ἀκακία (akakía)",
		"greekMeaning": "Acacia tree or its timber",
		"greekAdditional": [
			"ξύλον (xýlon) – wood/timber"
		],
		"kjv": "Shittim",
		"foundin": "Strong’s: H7848 (שִׁטִּים)"
	},
	"Signet": {
		"translatedEnglish": "Seal for authentication",
		"hebrewOriginal": "חוֹתָם (ḥōtām) – seal, signet ring",
		"greekOriginal": "σφραγίς (sphragís)",
		"greekMeaning": "Seal or stamp as mark of authenticity",
		"greekAdditional": [
			"ἀρραβών (arrabṓn) – pledge, earnest",
			"χαράσσω (charássō) – to engrave"
		],
		"kjv": "Signet",
		"foundin": "Strong’s: H2368 (חוֹתָם)"
	},
	"Simple": {
		"translatedEnglish": "Naive / Gullible",
		"hebrewOriginal": "פֶּתִי (peti)",
		"greekOriginal": "ἄκακος (akakos)",
		"greekMeaning": "Inexperienced, not uncomplicated",
		"greekAdditional": [
			"ἀπλοῦς (aplous) – simple or sincere (contextual)",
			"ἀπειρία (apeiria) – lack of experience"
		],
		"kjv": "Simple",
		"foundin": "Strong’s: G172 (ἄκακος)"
	},
	"Sin": {
		"translatedEnglish": "Missing the Mark / Transgression / Lawlessness",
		"hebrewOriginal": "חֵטְא (chet), פֶּשַׁע (pesha), עָוֹן (avon)",
		"greekOriginal": "ἁμαρτία (hamartia), παράπτωμα (paraptōma), ἀνομία (anomia)",
		"greekMeaning": "Hamartia: missing the mark; Paraptōma: a slip or trespass; Anomia: lawlessness",
		"greekAdditional": [
			"παρακοή (parakoē) – disobedience or refusal to hear",
			"ἔγκλημα (engklēma) – accusation or offense"
		],
		"kjv": "Sin",
		"foundin": "Vine’s: 'Sin'; Strong’s: G266 (ἁμαρτία)"
	},
	"Sleep": {
		"translatedEnglish": "Death / Spiritual Slumber / Inactivity",
		"hebrewOriginal": "שֵׁנָה (shenah)",
		"greekOriginal": "καθεύδω (katheudō), κοιμάομαι (koimaomai)",
		"greekMeaning": "Koimaomai: euphemism for death; Katheudō: spiritual dullness",
		"greekAdditional": [
			"νυστάζω (nystazō) – to nod off or grow drowsy",
			"ἀδρανέω (adraneō) – to be inactive or sluggish"
		],
		"kjv": "Sleep",
		"foundin": "Vine’s: 'Sleep'; Strong’s: G2837 (κοιμάομαι)"
	},
	"Sod": {
		"translatedEnglish": "Boiled",
		"hebrewOriginal": "בָּשַׁל (bashal)",
		"greekOriginal": "ἑψάω (hepsaō)",
		"greekMeaning": "Cooked in liquid",
		"greekAdditional": [
			"ζέω (zeō) – to boil",
			"μαγειρεύω (mageireuō) – to cook"
		],
		"kjv": "Sod",
		"foundin": "Strong’s: H1310 (בָּשַׁל)"
	},

	"Sodomites": {
		"translatedEnglish": "Male cult prostitutes",
		"hebrewOriginal": "קָדֵשׁ (qādēsh)",
		"greekOriginal": "ἱερόδουλος (hierodoulos)",
		"greekMeaning": "Temple-servant/prostitute attached to pagan worship—not a blanket term for all same-sex relations",
		"greekAdditional": [
			"πόρνος (pornos) – fornicator or prostitute",
			"τελεστής (telestēs) – ritual performer (rare)"
		],
		"kjv": "Sodomites",
		"foundin": "Strong’s: H6945 (קָדֵשׁ)"
	},
	"Sojourn": {
		"translatedEnglish": "Stay Temporarily / Dwell as a Foreigner",
		"hebrewOriginal": "גּוּר (gur)",
		"greekOriginal": "παροικέω (paroikeō)",
		"greekMeaning": "To reside without permanent status-not just travel",
		"greekAdditional": [
			"ξενίζω (xenizō) – to host or dwell as a stranger",
			"ἀποδημέω (apodēmeō) – to travel away from home"
		],
		"kjv": "Sojourn",
		"foundin": "Strong’s: G3939 (παροικέω)"
	},
	"Soul": {
		"translatedEnglish": "Life / Inner being / Self",
		"hebrewOriginal": "נֶפֶשׁ (nefesh)",
		"greekOriginal": "ψυχή (psychē)",
		"greekMeaning": "The whole person or life force-not a ghost-like entity",
		"greekAdditional": [
			"ζωή (zōē) – life, especially divine life",
			"καρδία (kardia) – heart or inner self"
		],
		"kjv": "Soul",
		"foundin": "Vine’s: 'Soul'; Strong’s: G5590 (ψυχή)"
	},
	"Spindle": {
		"translatedEnglish": "Rod used for spinning fibers",
		"hebrewOriginal": "פֶּלֶךְ (pelekh) – spindle",
		"greekOriginal": "ἄτρακτος (átraktos)",
		"greekMeaning": "Rod for twisting and spinning thread",
		"greekAdditional": [
			"ἠλακάτη (ēlakátē) – distaff",
			"νῆμα (nêma) – thread"
		],
		"kjv": "Spindle",
		"foundin": "Strong’s: H6418 (פֶּלֶךְ)"
	},
	"Spirit": {
		"translatedEnglish": "Breath / Wind / Inner life",
		"hebrewOriginal": "רוּחַ (ruach)",
		"greekOriginal": "πνεῦμα (pneuma)",
		"greekMeaning": "The animating force or divine presence-not a ghost",
		"greekAdditional": [
			"ζωή (zōē) – life, especially divine life",
			"ψυχή (psychē) – soul or inner essence"
		],
		"kjv": "Spirit",
		"foundin": "Vine’s: 'Spirit'; Strong’s: G4151 (πνεῦμα)"
	},
	"Staves": {
		"translatedEnglish": "Staffs / Rods",
		"hebrewOriginal": "מַטֶּה (matteh)",
		"greekOriginal": "ῥάβδος (rhabdos)",
		"greekMeaning": "Wooden rods used for walking or defense",
		"greekAdditional": [
			"βακτηρία (baktēria) – walking stick",
			"σκήπτρον (skēptron) – scepter or rod of authority"
		],
		"kjv": "Staves",
		"foundin": "Strong’s: G4464 (ῥάβδος)"
	},
	"Stomacher": {
		"translatedEnglish": "Ornamental Bodice",
		"hebrewOriginal": "פֹּאת (poʾt)",
		"greekOriginal": "θώραξ κόσμου (thōrax kosmou)",
		"greekMeaning": "Decorative covering for the chest",
		"greekAdditional": [
			"κόσμος (kosmos) – adornment or ornament",
			"ἐσθής (esthēs) – garment or attire"
		],
		"kjv": "Stomacher",
		"foundin": "Strong’s: H6420 (פֹּאת)"
	},
	"Strait": {
		"translatedEnglish": "Narrow / Difficult",
		"hebrewOriginal": "צַר (tzar)",
		"greekOriginal": "στενός (stenos)",
		"greekMeaning": "Narrow or hard, not a waterway",
		"greekAdditional": [
			"θλῖψις (thlipsis) – pressure or affliction",
			"ἀναγκή (anankē) – necessity or distress"
		],
		"kjv": "Strait",
		"foundin": "Strong’s: G4728 (στενός)"
	},
	"Stranger": {
		"translatedEnglish": "Foreigner / Outsider / Non-Covenant Member",
		"hebrewOriginal": "גֵּר (ger), נָכְרִי (nokhri)",
		"greekOriginal": "ξένος (xenos), ἀλλογενής (allogenēs)",
		"greekMeaning": "Non-native or non-covenant person-not necessarily hostile",
		"greekAdditional": [
			"παροικος (paroikos) – one dwelling nearby but not native",
			"προσήλυτος (prosēlytos) – convert or outsider drawn in"
		],
		"kjv": "Stranger",
		"foundin": "Vine’s: 'Stranger'; Strong’s: G3581 (ξένος)"
	},

	"Subdue": {
		"translatedEnglish": "Bring Under Control / Govern / Tame",
		"hebrewOriginal": "כָּבַשׁ (kabash)",
		"greekOriginal": "ὑποτάσσω (hypotassō)",
		"greekMeaning": "To manage or steward-not violent domination",
		"greekAdditional": [
			"κρατέω (krateō) – to hold or exercise control",
			"κυριεύω (kyrieūō) – to have lordship or mastery"
		],
		"kjv": "Subdue",
		"foundin": "Strong’s: G5293 (ὑποτάσσω)"
	},
	"Suborned": {
		"translatedEnglish": "Secretly induced / Bribed",
		"hebrewOriginal": "סִיתֵּם בַּסֵּתֶר (sittēm ba-seter)",
		"greekOriginal": "ὑποβάλλω (hypoballō)",
		"greekMeaning": "To instigate covertly, often by bribery",
		"greekAdditional": [
			"διαβάλλω (diaballō) – to slander or manipulate",
			"παρακινέω (parakineō) – to stir up or incite"
		],
		"kjv": "Suborned",
		"foundin": "Strong’s: G5264 (ὑποβάλλω)"
	},
	"Suffer": {
		"translatedEnglish": "Allow / Permit",
		"hebrewOriginal": "הִרְשָׁה (hirsha), נָתַן רְשׁוּת (natan reshut)",
		"greekOriginal": "ἐάω (eaō)",
		"greekMeaning": "To allow or permit, not to endure pain",
		"greekAdditional": [
			"συγχωρέω (synchōreō) – to allow or concede",
			"ἀνέχομαι (anechomai) – to tolerate or endure (contextual)"
		],
		"kjv": "Suffer",
		"foundin": "Vine’s: 'Suffer'; Strong’s: G1439 (ἐάω)"
	},
	"Superfluity": {
		"translatedEnglish": "Overflow / Excess",
		"hebrewOriginal": "רֹב (rov)",
		"greekOriginal": "περισσεία (perisseia)",
		"greekMeaning": "Superabundance, excess beyond need",
		"greekAdditional": [
			"πλεονασμός (pleonasmos) – surplus or redundancy",
			"ὑπερβολή (hyperbolē) – exaggeration or overflow"
		],
		"kjv": "Superfluity",
		"foundin": "Strong’s: G4050 (περισσεία)"
	},
	"Superstition": {
		"translatedEnglish": "Religious devotion / Reverence",
		"hebrewOriginal": "יִרְאָה (yir'ah)",
		"greekOriginal": "δεισιδαιμονία (deisidaimonia)",
		"greekMeaning": "Piety/religiousness; can be neutral or positive—KJV 'too superstitious' can mislead as 'too religious'",
		"greekAdditional": [
			"εὐσέβεια (eusebeia) – godliness or reverence",
			"σεβασμός (sebasmos) – respectful awe or devotion"
		],
		"kjv": "Superstition",
		"foundin": "Strong’s: G1175 (δεισιδαιμονία)"
	},
	"Tabernacle": {
		"translatedEnglish": "Dwelling Place / Temporary Shelter / Divine Presence",
		"hebrewOriginal": "מִשְׁכָּן (mishkan)",
		"greekOriginal": "σκηνή (skēnē)",
		"greekMeaning": "Tent of meeting-not just a structure",
		"greekAdditional": [
			"κατοικητήριον (katoikētērion) – dwelling place",
			"ἐπίσκηνος (episkēnos) – overshadowed or tented presence"
		],
		"kjv": "Tabernacle",
		"foundin": "Vine’s: 'Tabernacle'; Strong’s: G4633 (σκηνή)"
	},
	"Taches": {
		"translatedEnglish": "Fasteners / Clasps",
		"hebrewOriginal": "קַרְס (qeres)",
		"greekOriginal": "ἀγκίστρωμα (ankistrōma)",
		"greekMeaning": "Hooks or clasps for joining",
		"greekAdditional": [
			"σύνδεσμος (syndesmos) – connector or fastener",
			"κρικοειδές (krikoeides) – ring-shaped clasp"
		],
		"kjv": "Taches",
		"foundin": "Strong’s: H7165 (קַרְס)"
	},
	"Tarried": {
		"translatedEnglish": "Delayed / Stayed Longer / Waited",
		"hebrewOriginal": "שָׁהָה (shahah)",
		"greekOriginal": "διατρίβω (diatribō)",
		"greekMeaning": "To linger or remain-not poetic delay",
		"greekAdditional": [
			"ὑπομένω (hypomenō) – to remain under pressure",
			"ἐπιμένω (epimenō) – to stay on or persist"
		],
		"kjv": "Tarried",
		"foundin": "Strong’s: G1304 (διατρίβω)"
	},


	"Temperance": {
		"translatedEnglish": "Self-control",
		"hebrewOriginal": "מוּסָר (musar)",
		"greekOriginal": "ἐγκράτεια (enkrateia)",
		"greekMeaning": "Mastery over desires",
		"greekAdditional": [
			"σωφροσύνη (sōphrosynē) – soundness of mind or moderation",
			"ἀσκησις (askēsis) – discipline or training (classical)"
		],
		"kjv": "Temperance",
		"foundin": "Vine’s: 'Temperance'; Strong’s: G1466 (ἐγκράτεια)"
	}
};

const mistranslatedWordsArray2 = new Array();

mistranslatedWordsArray2[0] = {
	"Temple": {
		"translatedEnglish": "Sacred Space / Dwelling of God / Covenant Center",
		"hebrewOriginal": "הֵיכָל (heikhal), בֵּית (beit)",
		"greekOriginal": "ναός (naos), ἱερόν (hieron)",
		"greekMeaning": "Naos: inner sanctuary; Hieron: temple complex-not just building",
		"greekAdditional": [
			"οἶκος θεοῦ (oikos theou) – house of God",
			"ἱερατεία (hierateia) – priestly service or temple function"
		],
		"kjv": "Temple",
		"foundin": "Vine’s: 'Temple'; Strong’s: G3485 (ναός)"
	},
	"Temptation": {
		"translatedEnglish": "Testing / Trial / Provocation",
		"hebrewOriginal": "נִסָּיוֹן (nissayon)",
		"greekOriginal": "πειρασμός (peirasmos)",
		"greekMeaning": "Peirasmos: test or trial-not always enticement to sin",
		"greekAdditional": [
			"δοκιμή (dokimē) – proving or testing for approval",
			"θλῖψις (thlipsis) – pressure or affliction"
		],
		"kjv": "Temptation",
		"foundin": "Vine’s: 'Temptation'; Strong’s: G3986 (πειρασμός)"
	},
	"Testament": {
		"translatedEnglish": "Covenant / Agreement / Divine Contract",
		"hebrewOriginal": "בְּרִית (berit)",
		"greekOriginal": "διαθήκη (diathēkē)",
		"greekMeaning": "Diathēkē: covenant-not merely a legal will",
		"greekAdditional": [
			"συνθήκη (synthēkē) – mutual agreement or treaty",
			"ὅρκος (horkos) – oath or solemn pledge"
		],
		"kjv": "Testament",
		"foundin": "Vine’s: 'Testament'; Strong’s: G1242 (διαθήκη)"
	},
	"Throne": {
		"translatedEnglish": "Seat of Authority / Judgment / Covenant Rule",
		"hebrewOriginal": "כִּסֵּא (kisse)",
		"greekOriginal": "θρόνος (thronos)",
		"greekMeaning": "Symbol of rule-not just furniture",
		"greekAdditional": [
			"βῆμα (bēma) – judgment seat or platform",
			"καθέδρα (kathedra) – seat of teaching or authority"
		],
		"kjv": "Throne",
		"foundin": "Vine’s: 'Throne'; Strong’s: G2362 (θρόνος)"
	},
	"Throughly": {
		"translatedEnglish": "Completely / Thoroughly",
		"hebrewOriginal": "מְאֹד (meʾōd) – exceedingly",
		"greekOriginal": "διεξέρχομαι (diexérchomai)",
		"greekMeaning": "To go through completely; to examine thoroughly",
		"greekAdditional": [
			"τελείως (teleíōs) – perfectly, entirely",
			"ἐκτενῶς (ektenōs) – earnestly, intensely"
		],
		"kjv": "Throughly",
		"foundin": "Strong’s: G1330 (διεξέρχομαι)"
	},
	"Thurible": {
		"translatedEnglish": "Censer / Vessel for burning incense",
		"hebrewOriginal": "מַקְטֵרֶת (maqtēret) – censer, incense pan",
		"greekOriginal": "θυμιατήριον (thymiatērion)",
		"greekMeaning": "Incense vessel used in ritual as symbolic communication",
		"greekAdditional": [
			"λιβανωτός (libanōtós) – frankincense vessel"
		],
		"kjv": "Censer",
		"foundin": "Strong’s: G2368 (θυμιατήριον)"
	},
	"Transfigure": {
		"translatedEnglish": "Transform / Radiate divine nature",
		"hebrewOriginal": "הִשְׁתַּנָּה (hishtanah)",
		"greekOriginal": "μεταμορφόω (metamorphoō)",
		"greekMeaning": "To change form in a way that reveals inner glory",
		"greekAdditional": [
			"ἀνακαινίζω (anakainizō) – to renew or make new",
			"ἐμφανίζω (emphanizō) – to make visible or manifest"
		],
		"kjv": "Transfigure",
		"foundin": "Vine’s: 'Transfigure'; Strong’s: G3339 (μεταμορφόω)"
	},

	"Transgression": {
		"translatedEnglish": "Overstepping a boundary",
		"hebrewOriginal": "פֶּשַׁע (peshaʿ)",
		"greekOriginal": "παράβασις (parabasis)",
		"greekMeaning": "Willful crossing of a line (distinct from 'trespass' παραπτώμα)",
		"greekAdditional": [
			"παρακοή (parakoē) – disobedience or refusal to hear",
			"ἀνομία (anomia) – lawlessness or disregard"
		],
		"kjv": "Transgression",
		"foundin": "Vine’s: 'Transgression'; Strong’s: G3847 (παράβασις)"
	},
	"Tribulation": {
		"translatedEnglish": "Pressure / Affliction",
		"hebrewOriginal": "צָרָה (tzarah)",
		"greekOriginal": "θλῖψις (thlipsis)",
		"greekMeaning": "Crushing pressure or distress-not just trouble",
		"greekAdditional": [
			"στενοχωρία (stenochōria) – confinement or distress",
			"δοκιμασία (dokimasia) – testing or proving"
		],
		"kjv": "Tribulation",
		"foundin": "Vine’s: 'Tribulation'; Strong’s: G2347 (θλῖψις)"
	},
	"Trow": {
		"translatedEnglish": "Think / Believe",
		"hebrewOriginal": "חָשַׁב (chashav)",
		"greekOriginal": "νομίζω (nomizō)",
		"greekMeaning": "To consider or suppose",
		"greekAdditional": [
			"δοκέω (dokeō) – to seem/think",
			"πιστεύω (pisteuō) – to believe or trust"
		],
		"kjv": "Trow",
		"foundin": "Strong’s: G3543 (νομίζω)"
	},
	"Trumpet": {
		"translatedEnglish": "Signal / Announcement / Call to Action",
		"hebrewOriginal": "שׁוֹפָר (shofar)",
		"greekOriginal": "σάλπιγξ (salpinx)",
		"greekMeaning": "Instrument of proclamation-not just musical horn",
		"greekAdditional": [
			"κεραυνός (keraunos) – thunder or loud signal (figurative)",
			"φωνή (phōnē) – voice or sound used as a call"
		],
		"kjv": "Trumpet",
		"foundin": "Vine’s: 'Trumpet'; Strong’s: G4536 (σάλπιγξ)"
	},
	"Truth": {
		"translatedEnglish": "Reality / Faithfulness / Reliability",
		"hebrewOriginal": "אֱמֶת (emet)",
		"greekOriginal": "ἀλήθεια (alētheia)",
		"greekMeaning": "Alētheia: unveiled reality, dependability-not just factual correctness",
		"greekAdditional": [
			"πιστότης (pistotēs) – faithfulness or reliability",
			"γνησιότης (gnēsiotēs) – genuineness or authenticity"
		],
		"kjv": "Truth",
		"foundin": "Vine’s: 'Truth'; Strong’s: G225 (ἀλήθεια)"
	},
	"Unclean": {
		"translatedEnglish": "Ritually Impure / Unfit for Worship",
		"hebrewOriginal": "טָמֵא (tame)",
		"greekOriginal": "ἀκάθαρτος (akathartos)",
		"greekMeaning": "Ceremonially defiled-not morally evil",
		"greekAdditional": [
			"μίασμα (miasma) – defilement or pollution",
			"βεβήλωσις (bebēlōsis) – profanation or desecration"
		],
		"kjv": "Unclean",
		"foundin": "Vine’s: 'Unclean'; Strong’s: G169 (ἀκάθαρτος)"
	},
	"Uncleanness": {
		"translatedEnglish": "Impurity (ritual/moral)",
		"hebrewOriginal": "טֻמְאָה (tum'ah)",
		"greekOriginal": "ἀκαθαρσία (akatharsia)",
		"greekMeaning": "State of impurity, often sexual or idolatrous",
		"greekAdditional": [
			"μίασμα (miasma) – defilement or stain",
			"βεβήλωσις (bebēlōsis) – profanation or desecration"
		],
		"kjv": "Uncleanness",
		"foundin": "Vine’s: 'Uncleanness'; Strong’s: G167 (ἀκαθαρσία)"
	},
	"Unfeigned": {
		"translatedEnglish": "Without hypocrisy",
		"hebrewOriginal": null,
		"greekOriginal": "ἀνυπόκριτος (anypokritos)",
		"greekMeaning": "Sincere/genuine; no pretense",
		"greekAdditional": [
			"ἀληθινός (alēthinos) – true or authentic",
			"εἰλικρινής (eilikrinēs) – pure or transparent"
		],
		"kjv": "Unfeigned",
		"foundin": "Vine’s: 'Unfeigned'; Strong’s: G505 (ἀνυπόκριτος)"
	},

	"Untoward": {
		"translatedEnglish": "Perverse / Unruly",
		"hebrewOriginal": "עִקֵּשׁ (iqqesh)",
		"greekOriginal": "σκολιός (skolios)",
		"greekMeaning": "Morally twisted or difficult",
		"greekAdditional": [
			"ἀνυπότακτος (anupotaktos) – insubordinate",
			"διαστρέφω (diastrephō) – to distort or pervert"
		],
		"kjv": "Untoward",
		"foundin": "Strong’s: G4646 (σκολιός)"
	},
	"Usury": {
		"translatedEnglish": "Interest on loans",
		"hebrewOriginal": "נֶשֶׁךְ (neshekh)",
		"greekOriginal": "τόκος (tokos)",
		"greekMeaning": "Charging interest (often to the vulnerable); in modern English 'usury' suggests exorbitant interest",
		"greekAdditional": [
			"δανεισμός (daneismos) – lending or loaning",
			"κερδοσκοπία (kerdoskopia) – profiteering or gain-seeking"
		],
		"kjv": "Usury",
		"foundin": "Strong’s: G5110 (τόκος)"
	},
	"Vain": {
		"translatedEnglish": "Empty / Futile",
		"hebrewOriginal": "רֵיק (reik), שָׁוְא (shav)",
		"greekOriginal": "κενός (kenos), μάταιος (mataios)",
		"greekMeaning": "Lacking substance or purpose-not just arrogant",
		"greekAdditional": [
			"ἀνωφελής (anōphelēs) – useless or unprofitable",
			"ἀργός (argos) – idle or ineffective"
		],
		"kjv": "Vain",
		"foundin": "Vine’s: 'Vain'; Strong’s: G3152 (κενός)"
	},
	"Variance": {
		"translatedEnglish": "Discord / Quarrels",
		"hebrewOriginal": "מָדוֹן (madon)",
		"greekOriginal": "ἔρις (eris) / διχοστασία (dichostasia)",
		"greekMeaning": "Contention and factionalism-not merely 'differences of opinion'",
		"greekAdditional": [
			"στάσις (stasis) – strife or rebellion",
			"φιλονικία (philonikia) – love of contention"
		],
		"kjv": "Variance",
		"foundin": "Strong’s: G2054 (ἔρις)"
	},
	"Vile affections": {
		"translatedEnglish": "Dishonorable passions",
		"hebrewOriginal": "בֹּשֶׁת (boshet)",
		"greekOriginal": "πάθη ἀτιμίας (pathē atimias)",
		"greekMeaning": "Passions characterized by shame/dishonor",
		"greekAdditional": [
			"ἐπιθυμία (epithymia) – lust or craving",
			"ἀσέλγεια (aselgeia) – shameless behavior"
		],
		"kjv": "Vile affections",
		"foundin": "Strong’s: G819 (ἀτιμία)"
	},
	"Virtue": {
		"translatedEnglish": "Moral Excellence / Power / Valor",
		"hebrewOriginal": "חַיִל (chayil)",
		"greekOriginal": "ἀρετή (aretē), δύναμις (dynamis)",
		"greekMeaning": "Aretē: excellence of character; Dynamis: power or force",
		"greekAdditional": [
			"εὐσέβεια (eusebeia) – godliness or piety",
			"ἰσχύς (ischys) – strength or might"
		],
		"kjv": "Virtue",
		"foundin": "Vine’s: 'Virtue'; Strong’s: G703 (ἀρετή)"
	},
	"Visited": {
		"translatedEnglish": "Attended To / Intervened / Cared For",
		"hebrewOriginal": "פָּקַד (paqad)",
		"greekOriginal": "ἐπισκέπτομαι (episkeptomai)",
		"greekMeaning": "To inspect or care-not casual drop-in",
		"greekAdditional": [
			"ἐφορμάω (ephormaō) – to come upon with purpose",
			"ἐπιμελέομαι (epimeleomai) – to take care or attend to"
		],
		"kjv": "Visited",
		"foundin": "Strong’s: G1980 (ἐπισκέπτομαι)"
	},
	"Vouchsafe": {
		"translatedEnglish": "Grant / Deign to give",
		"hebrewOriginal": "חָנַן (chanan)",
		"greekOriginal": "χαρίζομαι (charizomai) / διδόναι (didonai)",
		"greekMeaning": "To graciously grant-not 'guarantee safety'",
		"greekAdditional": [
			"εὐδοκέω (eudokeō) – to be pleased to grant",
			"παρέχω (parechō) – to offer or provide"
		],
		"kjv": "Vouchsafe",
		"foundin": "Strong’s: G5483 (χαρίζομαι)"
	},

	"Walk": {
		"translatedEnglish": "Live / Conduct oneself",
		"hebrewOriginal": "הָלַךְ (halach)",
		"greekOriginal": "περιπατέω (peripateō)",
		"greekMeaning": "To live out one's values-not just physical movement",
		"greekAdditional": [
			"ζάω (zaō) – to live or be alive",
			"πολιτεύομαι (politeuomai) – to behave as a citizen"
		],
		"kjv": "Walk",
		"foundin": "Vine’s: 'Walk'; Strong’s: G4043 (περιπατέω)"
	},
	"Watch": {
		"translatedEnglish": "Stay Alert / Be Vigilant / Guard",
		"hebrewOriginal": "שָׁמַר (shamar)",
		"greekOriginal": "γρηγορέω (grēgoreō)",
		"greekMeaning": "To stay awake or spiritually attentive-not just observe",
		"greekAdditional": [
			"φυλάσσω (phylassō) – to guard or protect",
			"ἐγείρω (egeirō) – to awaken or stir up"
		],
		"kjv": "Watch",
		"foundin": "Vine’s: 'Watch'; Strong’s: G1127 (γρηγορέω)"
	},
	"Wax": {
		"translatedEnglish": "Grow / Become",
		"hebrewOriginal": "הָיָה (hayah)",
		"greekOriginal": "γίνομαι (ginomai)",
		"greekMeaning": "To become or grow into a state, not related to candle wax",
		"greekAdditional": [
			"αὐξάνω (auxanō) – to increase or grow",
			"τελειόω (teleioō) – to mature or complete"
		],
		"kjv": "Wax",
		"foundin": "Strong’s: G1096 (γίνομαι)"
	},
	"Waxed": {
		"translatedEnglish": "Grew / Increased / Became",
		"hebrewOriginal": "גָּדַל (gadal), הָיָה (hayah)",
		"greekOriginal": "γίνομαι (ginomai), αὐξάνω (auxanō)",
		"greekMeaning": "To become or grow-not candle-related",
		"greekAdditional": [
			"πληθύνω (plēthynō) – to multiply or increase",
			"τελειόω (teleioō) – to mature or reach completion"
		],
		"kjv": "Waxed",
		"foundin": "Strong’s: G837 (αὐξάνω)"
	},
	"Wist": {
		"translatedEnglish": "Knew / Perceived",
		"hebrewOriginal": "יָדַע (yādaʿ) – to know",
		"greekOriginal": "οἶδα (oîda)",
		"greekMeaning": "To know or be aware",
		"greekAdditional": [
			"γινώσκω (ginṓskō) – to recognize",
			"ἐπίσταμαι (epístamai) – to understand"
		],
		"kjv": "Wist",
		"foundin": "Strong’s: G1492 (οἶδα)"
	},
	"Witness": {
		"translatedEnglish": "Testimony / Martyr",
		"hebrewOriginal": "עֵד (ed)",
		"greekOriginal": "μαρτυρία (martyria), μάρτυς (martys)",
		"greekMeaning": "One who testifies-often at great personal cost",
		"greekAdditional": [
			"διαμαρτύρομαι (diamartyromai) – to affirm solemnly",
			"ὁμολογέω (homologeō) – to confess or declare openly"
		],
		"kjv": "Witness",
		"foundin": "Vine’s: 'Witness'; Strong’s: G3141 (μαρτυρία)"
	},
	"Witnesses": {
		"translatedEnglish": "Testifiers / Martyrs",
		"hebrewOriginal": "עֵדִים (edim)",
		"greekOriginal": "μάρτυρες (martures)",
		"greekMeaning": "Those who testify by word or life-often at great cost",
		"greekAdditional": [
			"διαμαρτύρομαι (diamartyromai) – to solemnly affirm",
			"ὁμολογέω (homologeō) – to confess or declare openly"
		],
		"kjv": "Witnesses",
		"foundin": "Strong’s: G3144 (μάρτυς)"
	},
	"Wittingly": {
		"translatedEnglish": "Knowingly / With awareness",
		"hebrewOriginal": "בְּיָדַע (bᵉyādaʿ) – with knowledge",
		"greekOriginal": "ἐπιστήμων (epistḗmōn)",
		"greekMeaning": "One who acts with knowledge or understanding",
		"greekAdditional": [
			"γινώσκω (ginṓskō) – to know",
			"ἐπίσταμαι (epístamai) – to understand"
		],
		"kjv": "Wittingly",
		"foundin": "Strong’s: G1990 (ἐπιστήμων)"
	},

	"Word": {
		"translatedEnglish": "Concept / Idea / Reasoning",
		"hebrewOriginal": "דָּבָר (davar)",
		"greekOriginal": "λόγος (logos)",
		"greekMeaning": "An account, reasoning, or principle-not merely a spoken word",
		"greekAdditional": [
			"ῥῆμα (rhēma) – spoken utterance",
			"νοῦς (nous) – mind or understanding"
		],
		"kjv": "Word",
		"foundin": "Vine’s: 'Word'; Strong’s: G3056 (λόγος)"
	},
	"World": {
		"translatedEnglish": "Cosmos / System / Society",
		"hebrewOriginal": "עוֹלָם (olam)",
		"greekOriginal": "κόσμος (kosmos)",
		"greekMeaning": "Orderly system, often opposed to God's ways",
		"greekAdditional": [
			"αἰών (aiōn) – age or era",
			"πολιτεία (politeia) – societal order or citizenship"
		],
		"kjv": "World",
		"foundin": "Vine’s: 'World'; Strong’s: G2889 (κόσμος)"
	},
	"Worship": {
		"translatedEnglish": "Bow / Prostrate / Revere",
		"hebrewOriginal": "הִשְׁתַּחֲוָה (hishtachavah)",
		"greekOriginal": "προσκυνέω (proskyneō)",
		"greekMeaning": "To physically bow or prostrate oneself in reverence-not just sing or praise",
		"greekAdditional": [
			"λατρεύω (latreuō) – to serve in a sacred context",
			"σεβασμός (sebasmos) – reverence or veneration"
		],
		"kjv": "Worship",
		"foundin": "Vine’s: 'Worship'; Strong’s: G4352 (προσκυνέω)"
	},
	"Wot": {
		"translatedEnglish": "Know",
		"hebrewOriginal": "יָדַע (yada)",
		"greekOriginal": "οἶδα (oida)",
		"greekMeaning": "To know or be aware",
		"greekAdditional": [
			"γινώσκω (ginōskō) – to perceive or understand",
			"ἐπίσταμαι (epistamai) – to be acquainted with"
		],
		"kjv": "Wot",
		"foundin": "Strong’s: G1492 (οἶδα)"
	},
	"Wrath": {
		"translatedEnglish": "Anger / Passion / Judicial Response",
		"hebrewOriginal": "חֵמָה (chemah), אַף (aph)",
		"greekOriginal": "ὀργή (orgē), θυμός (thymos)",
		"greekMeaning": "Orgē: settled indignation; Thymos: passionate outburst-not uncontrolled rage",
		"greekAdditional": [
			"ἀγανάκτησις (aganaktēsis) – indignation or righteous anger",
			"ἐκδίκησις (ekdikēsis) – vengeance or justice"
		],
		"kjv": "Wrath",
		"foundin": "Vine’s: 'Wrath'; Strong’s: G3709 (ὀργή)"
	},
	"Yoke": {
		"translatedEnglish": "Burden / Bond / Covenant Obligation",
		"hebrewOriginal": "עֹל (ol)",
		"greekOriginal": "ζυγός (zygós)",
		"greekMeaning": "Instrument of binding-can be oppressive or shared",
		"greekAdditional": [
			"δουλεία (douleia) – servitude or bondage",
			"συζεύγνυμι (syzeugnymi) – to be yoked or joined together"
		],
		"kjv": "Yoke",
		"foundin": "Vine’s: 'Yoke'; Strong’s: G2218 (ζυγός)"
	},
	"Zeal": {
		"translatedEnglish": "Passion / Fervor",
		"hebrewOriginal": "קִנְאָה (kin'ah)",
		"greekOriginal": "ζῆλος (zēlos)",
		"greekMeaning": "Intense devotion-not blind enthusiasm",
		"greekAdditional": [
			"σπουδή (spoudē) – earnestness or diligence",
			"θέρμη (thermē) – heat or fervency"
		],
		"kjv": "Zeal",
		"foundin": "Vine’s: 'Zeal'; Strong’s: G2205 (ζῆλος)"
	},
	"Blessed": {
		"translatedEnglish": "Favored / Approved / Consecrated",
		"hebrewOriginal": "בָּרוּךְ (barukh)",
		"greekOriginal": "μακάριος (makarios)",
		"greekMeaning": "Makarios: divinely favored—not merely happy",
		"greekAdditional": [
			"εὐλογημένος (eulogēmenos) – spoken well of or praised",
			"χαριτωμένος (charitōmenos) – graced or endowed"
		],
		"kjv": "Blessed",
		"foundin": "Vine’s: 'Blessed'; Strong’s: G3107 (μακάριος)"
	},
	"Elect": {
		"translatedEnglish": "Chosen / Designated for Purpose",
		"hebrewOriginal": "בָּחוּר (bachur)",
		"greekOriginal": "ἐκλεκτός (eklektos)",
		"greekMeaning": "Chosen for covenantal role—not elitism",
		"greekAdditional": [
			"κλητός (klētos) – invited or summoned",
			"προορισμένος (proorismenos) – foreordained"
		],
		"kjv": "Elect",
		"foundin": "Vine’s: 'Elect'; Strong’s: G1588 (ἐκλεκτός)"
	},
	"Justify": {
		"translatedEnglish": "Declare Righteous / Vindicate",
		"hebrewOriginal": "צָדַק (tsadaq)",
		"greekOriginal": "δικαιόω (dikaioō)",
		"greekMeaning": "Legal declaration of righteousness—not moral perfection",
		"greekAdditional": [
			"ἀθωόω (athōoō) – to acquit or absolve",
			"ἀποκαθιστάνω (apokathistanō) – to restore to rightful standing"
		],
		"kjv": "Justify",
		"foundin": "Vine’s: 'Justify'; Strong’s: G1344 (δικαιόω)"
	}
};

mistranslatedWordsArray2[1] = {
	"Condemn": {
		"translatedEnglish": "Declare Guilty / Disapprove",
		"hebrewOriginal": "רָשַׁע (rasha)",
		"greekOriginal": "κατακρίνω (katakrinō)",
		"greekMeaning": "Judicial verdict—not emotional rejection",
		"greekAdditional": [
			"καταδικάζω (katadikazō) – to sentence or convict",
			"ἀποδοκιμάζω (apodokimazō) – to reject after testing"
		],
		"kjv": "Condemn",
		"foundin": "Vine’s: 'Condemn'; Strong’s: G2632 (κατακρίνω)"
	},
	"Anoint": {
		"translatedEnglish": "Consecrate / Set Apart / Empower",
		"hebrewOriginal": "מָשַׁח (mashach)",
		"greekOriginal": "χρίω (chriō)",
		"greekMeaning": "To mark for divine purpose—not ceremonial oil alone",
		"greekAdditional": [
			"ἀλείφω (aleiphō) – to apply oil",
			"καθιερώνω (kathierōnō) – to dedicate or consecrate"
		],
		"kjv": "Anoint",
		"foundin": "Vine’s: 'Anoint'; Strong’s: G5548 (χρίω)"
	},
	"Forgive": {
		"translatedEnglish": "Release / Cancel Debt / Pardon",
		"hebrewOriginal": "סָלַח (salach)",
		"greekOriginal": "ἀφίημι (aphiēmi)",
		"greekMeaning": "To release from obligation—not just emotional letting go",
		"greekAdditional": [
			"χαρίζομαι (charizomai) – to grant or show grace",
			"λύω (lyō) – to loosen or free"
		],
		"kjv": "Forgive",
		"foundin": "Vine’s: 'Forgive'; Strong’s: G863 (ἀφίημι)"
	},
	"Kingdom": {
		"translatedEnglish": "Reign / Realm / Divine Order",
		"hebrewOriginal": "מַלְכוּת (malkuth)",
		"greekOriginal": "βασιλεία (basileia)",
		"greekMeaning": "Active rule—not just a place",
		"greekAdditional": [
			"κυριαρχία (kyriarchia) – lordship or dominion",
			"οἰκονομία (oikonomia) – administration or stewardship"
		],
		"kjv": "Kingdom",
		"foundin": "Vine’s: 'Kingdom'; Strong’s: G932 (βασιλεία)"
	},
	"Heart": {
		"translatedEnglish": "Inner Self / Will / Core Identity",
		"hebrewOriginal": "לֵב (lev), לֵבָב (levav)",
		"greekOriginal": "καρδία (kardia)",
		"greekMeaning": "Seat of thought, emotion, and will—not just feelings",
		"greekAdditional": [
			"ψυχή (psychē) – soul or life essence",
			"διάνοια (dianoia) – understanding or intent"
		],
		"kjv": "Heart",
		"foundin": "Vine’s: 'Heart'; Strong’s: G2588 (καρδία)"
	},
	"Mind": {
		"translatedEnglish": "Understanding / Reason / Intent",
		"hebrewOriginal": "דַּעַת (daʿat), לֵבָב (levav)",
		"greekOriginal": "νοῦς (nous)",
		"greekMeaning": "Faculty of thought—not brain or intellect alone",
		"greekAdditional": [
			"διάνοια (dianoia) – deep thought or intention",
			"φρόνημα (phronēma) – mindset or disposition"
		],
		"kjv": "Mind",
		"foundin": "Vine’s: 'Mind'; Strong’s: G3563 (νοῦς)"
	}
};

module.exports = {
	dailyVerses,
	wordReplacements,
	htmlColorswCaps,
	htmlColors,
	alternativeVerses,
	chapters,
	chaptersNickname,
	nicknameMap,
	chaptersMap,
	badWords,
	urlExtensions,
	prayerTypes,
	mistranslatedWordsArray,
	mistranslatedWordsArray2
};