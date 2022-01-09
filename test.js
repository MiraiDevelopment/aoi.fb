const aoifb = require("aoi.fb")
const database = aoifb.create({
    apiKey: "AIzaSyDjenO0A70LsebM8DdL6H-bZrGsS1AncHw",
    authDomain: "trixiebotdc.firebaseapp.com",
    databaseURL: "https://trixiebotdc-default-rtdb.firebaseio.com",
    projectId: "trixiebotdc",
    storageBucket: "trixiebotdc.appspot.com",
    messagingSenderId: "896759388742",
    appId: "1:896759388742:web:e01af3fd66a7f71d5a8847",
    measurementId: "G-893PG2HDV9"
})

const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
  token: process.env.TOKEN,
  prefix: "PREFIX",
  intents: ["GUILDS", "GUILD_MESSAGES"],
  database: database
})

bot.onMessage()

bot.command({
  name: "ping",
  code: `Pong! $pingms`
})

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

run = "npx node test.js"
