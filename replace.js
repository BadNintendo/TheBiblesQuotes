const fs = require("fs");

const wordReplacements = [
	{ KJV: "Thee",			NKJV: "You",			"2025": "You" },
	{ KJV: "Thou",			NKJV: "You",			"2025": "You" },
	{ KJV: "Thy",			NKJV: "Your",			"2025": "Your" },
	{ KJV: "Thine",			NKJV: "Yours",			"2025": "Yours" },
	{ KJV: "Suffer",		NKJV: "Permit",			"2025": "Endure" },
	{ KJV: "Wist",			NKJV: "Knew",			"2025": "Realized" },
	{ KJV: "Begat",			NKJV: "Was the father of","2025": "Fathered" },
	{ KJV: "Let",			NKJV: "Prevent",		"2025": "Allow" },
	{ KJV: "Draught",		NKJV: "Draft",			"2025": "Sip" },
	{ KJV: "Diverse",		NKJV: "Various",		"2025": "Different" },
	{ KJV: "Peradventure",	NKJV: "Perhaps",		"2025": "Maybe" },
	{ KJV: "Concupiscence",	NKJV: "Lust",			"2025": "Desire" },
	{ KJV: "Quickened",		NKJV: "Made alive",		"2025": "Revived" },
	{ KJV: "Verily",		NKJV: "Truly",			"2025": "Honestly" },
	{ KJV: "Hath",			NKJV: "Has",			"2025": "Has" },
	{ KJV: "Withal",		NKJV: "Besides",		"2025": "Moreover" },
	{ KJV: "Oft",			NKJV: "Often",			"2025": "Frequently" },
	{ KJV: "Eschew",		NKJV: "Avoid",			"2025": "Stay away from" },
	{ KJV: "Froward",		NKJV: "Perverse",		"2025": "Defiant" },
	{ KJV: "Churl",			NKJV: "Rude person",	"2025": "Jerk" },
	{ KJV: "Similitude",	NKJV: "Likeness",		"2025": "Resemblance" },
	{ KJV: "Smite",			NKJV: "Strike",			"2025": "Smite" },
	{ KJV: "Succour",		NKJV: "Help",			"2025": "Assist" },
	{ KJV: "Gainsay",		NKJV: "Contradict",		"2025": "Dispute" },
	{ KJV: "Betimes",		NKJV: "Early",			"2025": "Ahead of time" },
	{ KJV: "Trode",			NKJV: "Trod",			"2025": "Stepped" },
	{ KJV: "Broided",		NKJV: "Braided",		"2025": "Twisted" },
	{ KJV: "Prating",		NKJV: "Chattering",		"2025": "Rambling" },
	{ KJV: "Wantonness",	NKJV: "Lustful indulgence","2025": "Recklessness" },
	{ KJV: "Lest",			NKJV: "Unless",			"2025": "So that not" },
	{ KJV: "Woe",			NKJV: "Sorrow",			"2025": "Tragedy" },
	{ KJV: "Yonder",		NKJV: "Over there",		"2025": "Far away" },
	{ KJV: "Vex",			NKJV: "Annoy",			"2025": "Irritate" },
	{ KJV: "Abode",			NKJV: "Dwelling",		"2025": "Home" },
	{ KJV: "Circumspect",	NKJV: "Cautious",		"2025": "Careful" },
	{ KJV: "Wrought",		NKJV: "Made",			"2025": "Created" },
	{ KJV: "Kinsman",		NKJV: "Relative",		"2025": "Family member" },
	{ KJV: "Sore",			NKJV: "Severely",		"2025": "Extremely" },
	{ KJV: "Behoove",		NKJV: "Benefit",		"2025": "Be necessary for" },
	{ KJV: "Reckon",		NKJV: "Suppose",		"2025": "Think" },
	{ KJV: "Mote",			NKJV: "Speck",			"2025": "Tiny particle" },
	{ KJV: "Anon",			NKJV: "Immediately",	"2025": "Right away" },
	{ KJV: "Booty",			NKJV: "Plunder",		"2025": "Loot" },
	{ KJV: "Chasten",		NKJV: "Discipline",		"2025": "Correct" },
	{ KJV: "Cumber",		NKJV: "Burden",			"2025": "Weigh down" },
	{ KJV: "Damsel",		NKJV: "Young woman",	"2025": "Girl" },
	{ KJV: "Engrave",		NKJV: "Inscribe",		"2025": "Carve" },
	{ KJV: "Fain",			NKJV: "Gladly",			"2025": "Eagerly" },
	{ KJV: "Fillet",		NKJV: "Decorative band","2025": "Trim" },
	{ KJV: "Hewn",			NKJV: "Cut",			"2025": "Carved out" },
	{ KJV: "Importunity",	NKJV: "Persistence",	"2025": "Relentless asking" },
	{ KJV: "Jot",			NKJV: "Tiny amount",	"2025": "Bit" },
	{ KJV: "Lasciviousness",NKJV: "Lewdness",		"2025": "Immoral behavior" },
	{ KJV: "Malefactor",	NKJV: "Criminal",		"2025": "Wrongdoer" },
	{ KJV: "Minister",		NKJV: "Serve",			"2025": "Help out" },
	{ KJV: "Mischief",		NKJV: "Evil intent",	"2025": "Trouble" },
	{ KJV: "Ossifrage",		NKJV: "Vulture",		"2025": "Scavenger bird" },
	{ KJV: "Provender",		NKJV: "Animal food",	"2025": "Feed" },
	{ KJV: "Scourge",		NKJV: "Whip",			"2025": "Punish" },
	{ KJV: "Sepulchre",		NKJV: "Tomb",			"2025": "Grave" },
	{ KJV: "Sod",			NKJV: "Boiled",			"2025": "Cooked" },
	{ KJV: "Stammering",	NKJV: "Stuttering",		"2025": "Struggling to speak" },
	{ KJV: "Tarry",			NKJV: "Delay",			"2025": "Wait around" },
	{ KJV: "Tempt",			NKJV: "Test",			"2025": "Challenge" },
	{ KJV: "Unction",		NKJV: "Anointing",		"2025": "Blessing" },
	{ KJV: "Vagabond",		NKJV: "Wanderer",		"2025": "Nomad" },
	{ KJV: "Wailing",		NKJV: "Loud crying",	"2025": "Sobbing" },
	{ KJV: "Wax",			NKJV: "Grow",			"2025": "Increase" },
	{ KJV: "Wen",			NKJV: "Boil",			"2025": "Swelling" },
	{ KJV: "Yoke",			NKJV: "Burden",			"2025": "Heavy load" },
	{ KJV: "Abase",			NKJV: "Humble",			"2025": "Lower in status" },
	{ KJV: "Adjure",		NKJV: "Command solemnly","2025": "Strongly urge" },
	{ KJV: "Affright",		NKJV: "Terrify",		"2025": "Frighten" },
	{ KJV: "Affrighted",	NKJV: "Terrified",		"2025": "Frightened" },
	{ KJV: "Beseech",		NKJV: "Beg",			"2025": "Plead with" },
	{ KJV: "Brimstone",		NKJV: "Sulfur",			"2025": "Burning sulfur" },
	{ KJV: "Bulwark",		NKJV: "Defense",		"2025": "Protective barrier" },
	{ KJV: "Cistern",		NKJV: "Water reservoir","2025": "Storage tank" },
	{ KJV: "Covert",		NKJV: "Hidden place",	"2025": "Sheltered spot" },
	{ KJV: "Craven",		NKJV: "Cowardly",		"2025": "Fearful" },
	{ KJV: "Deign",			NKJV: "Condescend",		"2025": "Lower oneself" },
	{ KJV: "Fetter",		NKJV: "Chains",			"2025": "Restraints" },
	{ KJV: "Forebear",		NKJV: "Ancestor",		"2025": "Past family member" },
	{ KJV: "Garner",		NKJV: "Collect",		"2025": "Gather" },
	{ KJV: "Gird",			NKJV: "Prepare",		"2025": "Get ready" },
	{ KJV: "Hew",			NKJV: "Cut",			"2025": "Chop" },
	{ KJV: "Ignoble",		NKJV: "Dishonorable",	"2025": "Shameful" },
	{ KJV: "Imprecate",		NKJV: "Curse",			"2025": "Wish harm upon" },
	{ KJV: "Indite",		NKJV: "Compose",		"2025": "Write formally" },
	{ KJV: "Iniquity",		NKJV: "Wickedness",		"2025": "Immoral behavior" },
	{ KJV: "Knave",			NKJV: "Dishonest man",	"2025": "Trickster" },
	{ KJV: "Largess",		NKJV: "Generosity",		"2025": "Giving spirit" },
	{ KJV: "Lucid",			NKJV: "Clear",			"2025": "Lucid" },
	{ KJV: "Mirth",			NKJV: "Joy",			"2025": "Happiness" },
	{ KJV: "Perplex",		NKJV: "Confuse",		"2025": "Perplex" },
	{ KJV: "Progeny",		NKJV: "Descendants",	"2025": "Offspring" },
	{ KJV: "Rebuke",		NKJV: "Reprimand",		"2025": "Scold" },
	{ KJV: "Stalwart",		NKJV: "Strong",			"2025": "Reliable and firm" },
	{ KJV: "Supplication",	NKJV: "Earnest prayer",	"2025": "Humble request" },
	{ KJV: "Tribulation",	NKJV: "Trouble",		"2025": "Hardship" },
	{ KJV: "Accursed",		NKJV: "Cursed",			"2025": "Accursed" },
	{ KJV: "Artificer",		NKJV: "Craftsman",		"2025": "Skilled worker" },
	{ KJV: "Astonied",		NKJV: "Amazed",			"2025": "Astonied" },
	{ KJV: "Bowels",		NKJV: "Inner parts",	"2025": "Deep emotions" },
	{ KJV: "Bridechamber",	NKJV: "Wedding hall",	"2025": "Reception room" },
	{ KJV: "Cast lots",		NKJV: "Draw straws",	"2025": "Random selection" },
	{ KJV: "Churlish",		NKJV: "Rude",			"2025": "Unkind" },
	{ KJV: "Coffer",		NKJV: "Chest",			"2025": "Storage box" },
	{ KJV: "Disquieted",	NKJV: "Disturbed",		"2025": "Restless" },
	{ KJV: "Earnest",		NKJV: "Guarantee",		"2025": "Earnest" },
	{ KJV: "Emboldened",	NKJV: "Made bold",		"2025": "Encouraged" },
	{ KJV: "Ensign",		NKJV: "Banner",			"2025": "Flag" },
	{ KJV: "Habergeon",		NKJV: "Armor",			"2025": "Chainmail" },
	{ KJV: "Headlong",		NKJV: "Hastily",		"2025": "Recklessly" },
	{ KJV: "Illuminated",	NKJV: "Enlightened",	"2025": "Given clarity" },
	{ KJV: "Impenitent",	NKJV: "Unrepentant",	"2025": "Unremorseful" },
	{ KJV: "Incontinent",	NKJV: "Without self-control","2025": "Undisciplined" },
	{ KJV: "Infamy",		NKJV: "Disgrace",		"2025": "Shameful reputation" },
	{ KJV: "Levy",			NKJV: "Collect",		"2025": "Tax or gather troops" },
	{ KJV: "Minstrel",		NKJV: "Musician",		"2025": "Performer" },
	{ KJV: "Nettle",		NKJV: "Irritate",		"2025": "Annoy" },
	{ KJV: "Offscouring",	NKJV: "Rejected things","2025": "Worthless leftovers" },
	{ KJV: "Privily",		NKJV: "Secretly",		"2025": "Discreetly" },
	{ KJV: "Recompense",	NKJV: "Repayment",		"2025": "Compensation" },
	{ KJV: "Shambles",		NKJV: "Meat market",	"2025": "Marketplace" },
	{ KJV: "Swarthy",		NKJV: "Dark-skinned",	"2025": "Tanned complexion" },
	{ KJV: "Unseemly",		NKJV: "Inappropriate",	"2025": "Improper" },
	{ KJV: "Wont",			NKJV: "Accustomed",		"2025": "Used to" },
	{ KJV: "Yonder",		NKJV: "Over there",		"2025": "Way ahead" },
	{ KJV: "Abound",		NKJV: "Increase",		"2025": "Grow" },
	{ KJV: "Assay",			NKJV: "Attempt",		"2025": "Try" },
	{ KJV: "Bruit",			NKJV: "Report",			"2025": "Rumor" },
	{ KJV: "Cleft",			NKJV: "Split",			"2025": "Cleft" },
	{ KJV: "Discomfit",		NKJV: "Defeat",			"2025": "Overwhelm" },
	{ KJV: "Doleful",		NKJV: "Sad",			"2025": "Miserable" },
	{ KJV: "Furbish",		NKJV: "Polish",			"2025": "Refurbish" },
	{ KJV: "Graven",		NKJV: "Carved",			"2025": "Engraved" },
	{ KJV: "Haply",			NKJV: "Perhaps",		"2025": "Maybe" },
	{ KJV: "Impute",		NKJV: "Attribute",		"2025": "Assign" },
	{ KJV: "Lament",		NKJV: "Mourn",			"2025": "Grieve" },
	{ KJV: "Mischievous",	NKJV: "Harmful",		"2025": "Mischievous" },
	{ KJV: "Naught",		NKJV: "Nothing",		"2025": "Zero" },
	{ KJV: "Pate",			NKJV: "Head",			"2025": "Skull" },
	{ KJV: "Perish",		NKJV: "Die",			"2025": "Fade away" },
	{ KJV: "Reprove",		NKJV: "Correct",		"2025": "Criticize" },
	{ KJV: "Sunder",		NKJV: "Separate",		"2025": "Split apart" },
	{ KJV: "Tidings",		NKJV: "News",			"2025": "Update" },
	{ KJV: "Vesture",		NKJV: "Clothing",		"2025": "Outfit" },
	{ KJV: "Wane",			NKJV: "Decrease",		"2025": "Diminish" },
	{ KJV: "Waxed",			NKJV: "Grew",			"2025": "Expanded" },
	{ KJV: "Wist",			NKJV: "Knew",			"2025": "Realized" },
	{ KJV: "Wrath",			NKJV: "Anger",			"2025": "Rage" }
];

// Function to filter text
function filterText(inputText) {
 	if (typeof inputText !== "string") return inputText;

 	wordReplacements.forEach(({ KJV, NKJV, "2025": slang }) => {
 		const replacement = slang || ""; // Replace with "2025" slang if defined
 		inputText = inputText.replace(new RegExp(`\\b${NKJV}\\b`, "gi"), replacement); // Replaces NKJV from object array with 2025
		inputText = inputText.replace(new RegExp(`\\b${KJV}\\b`, "gi"), replacement); // Replaces KJV from object array with 2025
 	});

 	return inputText;
}

// Function to process JSON file
function filterJson(jsonData) {
 	if (typeof jsonData === "string") {
 		return filterText(jsonData);
 	} else if (Array.isArray(jsonData)) {
 		return jsonData.map(item => filterJson(item));
 	} else if (typeof jsonData === "object" && jsonData !== null) {
 		let filteredObj = {};
 		Object.keys(jsonData).forEach(key => { filteredObj[key] = filterJson(jsonData[key]); });
 		return filteredObj;
 	}
 	return jsonData;
}

// Read NKJV.json and process it
fs.readFile("data/KJV.json", "utf8", (err, data) => {
 	if (err) {
 		console.error("Error reading file:", err);
 		return;
 	}

 	let parsedJson;
 	try {
 		parsedJson = JSON.parse(data);
 	} catch (error) {
 		console.error("Invalid JSON format:", error);
 		return;
 	}

 	// Filter content
 	const filteredData = filterJson(parsedJson);

 	// Save filtered data as 2025.json
 	fs.writeFile("data/2025.json", JSON.stringify(filteredData, null, 2), "utf8", (err) => {
 		if (err) {
 			console.error("Error writing file:", err);
 		} else {
 			console.log("Successfully saved as 2025.json!");
 		}
 	});
});