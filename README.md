<br>
<div align="center">
    <a href="https://www.npmjs.com/package/aoi.fb"><img src="https://user-images.githubusercontent.com/61317250/159102810-58b7c66b-0128-45da-a8a1-ee7a39c91539.png" alt="aoi.fb icon" /></a>
    <h1>aoi.fb</h1>
    <p>A Firebase database of wrapper using aoi.fb as API</p>
    <a href="https://discord.gg/gNFEMrHshn"><img src="https://img.shields.io/discord/786392360475951154?style=for-the-badge&label=Chat&color=2490f8&logo=discord&logoColor=white" alt="discord server" /></a>
    <a href="https://www.npmjs.com/package/aoi.fb"><img src="https://img.shields.io/npm/v/aoi.fb.svg?style=for-the-badge&maxAge=3600&color=ec842c&logo=npm" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/aoi.fb"><img src="https://img.shields.io/npm/dt/aoi.fb.svg?style=for-the-badge&maxAge=3600&color=ec842c&logo=npm" alt="npm downlods" /></a>
</div>
<br>

## Support - Have questions or want to talk and contact the developers?
### Log on to the support server now to get answers to your questions or to receive help with errors:
<div align="center">
  <h3><a href="https://discord.gg/gNFEMrHshn"alt="server support">Official Server</a></h3>
</div>

## Table Of Contents
- [Installation](#installation)
  - [Setup](#setup)
- [AoiFB](#aoifb)
- [Open Source](#open-source)

<div align="center">
    <a href="https://github.com/MiraiDevelopment/aoi.fb/tree/docs" alt="Documentation">
        <img alt="Documentation" src="https://img.shields.io/static/v1?style=for-the-badge&maxAge=56600&label=Documentation&message=Aoi.fb&color=ec842c">
    </a>
</div>

## Installation

**Node.JS 16.6.0 or newer is required.**  

```sh-session
npm install aoi.fb
```

<b>Aoi.js v5.1.0 or newer is required. Check how to use in <a href="https://github.com/MiraiDevelopment/aoi.fb/tree/docs#packagejson">Package.json</a></b>

### Setup

**Then, in your index file, configure aoi.fb:**
```js
const aoifb = require("aoi.fb")
const firebase = aoifb.Create({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
})

const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
  token: "TOKEN", // Discord Bot Token
  prefix: "PREFIX",// Discord Bot Prefix
  intents: ["GUILDS", "GUILD_MESSAGES"], //Discord Bot Intents
  database: {
    type: "aoi.fb",
    db: firebase
  } // Change database to aoi.fb
})

// LoadCommands
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd, './Commands/', false)

// Events
bot.onMessage();
bot.onMessageUpdate();
bot.onMessageDelete();
bot.onInteractionCreate();

// Command Example for Database Latency
bot.command({
  name: "ping",
  code: `Pong!
> Bot Latency: $pingms
> Database Latency: $djsEval[client.db.db.ping();yes]`
})

bot.readyCommand({
  channel: "",
  code: `$log[Ready on $userTag[$clientID]]`
})
```

<br>

<div align="center">
<h1>Mirai Development</h1>
<h2>AoiFB</h2>

<p>aoi.fb - A Firebase database of wrapper using aoi.fb as API</p>

Owned by <a href="https://github.com/guihrib/">GR</a> and Team <a href="https://github.com/MiraiDevelopment">Mirai Development</a></p>
    <a href="https://discord.gg/gNFEMrHshn"><img src="https://user-images.githubusercontent.com/61317250/159178246-128e53fb-9b23-4fd4-b61f-94fe1784a48c.png" alt="Mirai Development" /></a>

</div>

## Open Source

aoi.fb is a package and db made for developers using aoi.js. Also made by you! If you want to contribute just do a [pull-request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

<p>Copyright © 2022 @MiraiDevelopment</p>
