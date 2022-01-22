<br />
    <p>
    <a href="https://www.npmjs.com/package/aoi.fb"><img src="https://cdn.discordapp.com/attachments/929747405916733460/934447223117340732/AoiFB_LogoTransparent_2.0.png" alt="aoi.fb" /></a>
  </p>

# aoi.fb

A Firebase database of wrapper using aoi.db as API


## Table Of Contents

- [About](#about)
- [Installation](#installation)
  - [Setup](#setup)
- [Methods](#methods)
  - [SET](#set)
  - [GET](#get)
  - [ALL](#all)
  - [DEL](#del)
- [Others](#others)
- [Aoi.FB](#aoi.fb)
- [Open Source](#open-source)

## About
A Firebase database of wrapper using aoi.db as API
[![NPM Version](https://img.shields.io/npm/v/aoi.fb.svg?maxAge=3600)](https://www.npmjs.com/package/aoi.fb)
[![NPM Downloads](https://img.shields.io/npm/dt/aoi.fb.svg?maxAge=3600)](https://www.npmjs.com/package/aoi.fb)
## Installation

**Node.JS 12.0.0 or newer is required.**  

```sh-session
npm install aoi.fb
```

### Setup

```js
const aoifb = require("aoi.fb")

const database = aoifb.create({
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
  database: database // Change database to aoi.fb
})

// Event
bot.onMessage()

// Command Example for Database Latency
bot.command({
  name: "ping",
  code: `Pong!
> Bot Latency: $pingms
> Database Latency: $djsEval[client.db.ping();yes]`
})

bot.readyCommand({
  channel: "",
  code: `$log[Ready on $userTag[$clientID]]`
})

```

## Methods
### SET
#### Description - To set a value to a referenced key
#### Use - 
```js
client.db.set('table', 'key', 'value')
```
### GET
#### Description - To get the value of a reference
#### Use - 
```js
client.db.get('table', 'key')
```

### ALL
#### Description - Returns all values of the reference
#### Use - 
```js
client.db.all('table')
```
### DEL
#### Description - To delete all the values made in the reference, be it the whole table, or a directory further down
#### Use - 
```js
client.db.del('table') or client.db.del('table', 'key')
```

## Others
### PING
#### Description  - Returning to Database Latency
#### Use - 
```js
client.db.ping()
```

## Aoi.FB

aoi.fb, a Firebase database of wrapper using aoi.db as API

Owned by [GR](https://github.com/guihrib/) </br>

## Open Source

aoi.fb is a package and db made for developers using aoi.js. Also made by you! If you want to contribute just do a [pull-request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)