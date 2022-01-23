const aoifb = require('./src');

const firebase = aoifb.create({
  apiKey: "AIzaSyBKkwtaAj861rNFVQJjQDYqWJv_4EX7g3o",
  authDomain: "aoifb-example.firebaseapp.com",
  databaseURL: "https://aoifb-example-default-rtdb.firebaseio.com",
  projectId: "aoifb-example",
  storageBucket: "aoifb-example.appspot.com",
  messagingSenderId: "218421416101",
  appId: "1:218421416101:web:d176bb0c7e46d5bf2d7d4c",
  measurementId: "G-KCM0E09BHL"
});

const aoijs = require('aoi.js');

const bot = new aoijs.Bot({
  token: "TOKEN",
  prefix: '$getServerVar[prefix]',
  intents: ["GUILDS", "GUILD_MESSAGES"],
  database: {
    type: "custom",
    db: firebase,
    promisify: false
  }
});

bot.variables({
  prefix: "fb.",
  coins: "0"
})

bot.onMessage()

bot.command({
  name: "djseval",
  code: `
<@$authorID>
\`\`\`js
$djsEval[$message;yes]
\`\`\`
`
})

bot.command({
  name: "eval",
  code: `
<@$authorID>
\`\`\`js
$eval[$message;yes]
\`\`\`
`
})

bot.command({
  name: "forEachUser",
  code: "$forEachUser[loop5]"
})

bot.awaitedCommand({
  name: "loop5",
  code: `$setUserVar[coins;$random[3545;45646]]`
})