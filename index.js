const aoifb = require('./src');
const database = aoifb.create({
  apiKey: "AIzaSyD35FshKMn3KD5OsfkeoR2S0ZXxwQXlYGA",
  authDomain: "jina-bot.firebaseapp.com",
  databaseURL: "https://jina-bot.firebaseio.com",
  projectId: "jina-bot",
  storageBucket: "jina-bot.appspot.com",
  messagingSenderId: "1069330553665",
  appId: "1:1069330553665:web:9d0fb5dfd36a95fd5b5fc0",
  measurementId: "G-748ENWY86K"
});

const aoi = require('aoi.js');
const bot = new aoi.Bot({
  token: "NzA1OTczMzQyMjM4NDA4NzE1.Xqze6Q.5NC0V8aLCUn03xB5U92iEqzv-W4",
  prefix: '$getServerVar[prefix]',
  intents: 'all',
  suppressAllErrors: true,
  database: {
    type: "custom",
    db: database,
    promisify: false
  }
});

bot.variables({
  prefix: "fb.",
  coins: "0"
})

bot.onMessage()

bot.command({
  name: "js",
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
  code: `$setUserVar[coins;$random[3545;45646]]` //Every users value for 'hello' will be 'bye'
})