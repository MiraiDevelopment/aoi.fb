<br>
<div align="center">
    <a href="https://www.npmjs.com/package/aoi.fb"><img src="https://user-images.githubusercontent.com/61317250/152708623-0ba20c44-7b28-45b7-9181-a2d231b60395.png" alt="aoi.fb" /></a>
    <h1>aoi.fb</h1>
    <p>A Firebase database of wrapper using aoi.fb as API</p>
</div>
<br>

## Support - Have questions or want to talk and contact the developers?
### Log on to the support server now to get answers to your questions or to receive help with errors:
### [Official Server](https://discord.com/invite/GhUZQKRAAf)
## Table Of Contents

- [About](#about)
- [Installation](#installation)
  - [Setup](#setup)
- [Methods Examples](#methods-examples)
  - [SET](#set)
  - [GET](#get)
  - [ALL](#all)
  - [DELETE](#delete)
- [Others Examples](#others)
  - [PING](#ping)
  - [ARGSCOUNT](#argscount)
  - [ISSTRING](#isstring)
  - [ISNUMBER](#isnumber)
  - [PackageJson](#packagejson)
- [Terms](#terms)
- [AoiFB](#aoifb)
- [Open Source](#open-source)

|          |                                                         Documentation and tiny information       |                                                        |
|:--------:|:------------------------------------------------------------------------------------------------:|:------------------------------------------------------:|
| Methods  |                                            Description                                           |                           Use                          |
|   SET    |                                To set a value to a referenced key                                |        client.db.db.set('table', 'key', 'value')       |
|   GET    |                                  To get the value of a table                                     | client.db.db.get('table', 'key').then(a => a.value)    |
|   ALL    |                                Returns all values of the reference                               | client.db.db.all('table').then(a => a.map(b => b.key)) |
|  DELETE  | To delete all the values made in the reference, be it the whole table, ora directory further down|           client.db.db.delete('table', 'key')          |
|          |                                                                                                  |                                                        |
|  Others  |                                            Description                                           |                           Use                          |
|   PING   |                                 Requesting the database latency                                  |                    client.db.db.ping()                 |
| ARGSCOUNT|                        Counting arguments to the value of the requested key                      |         client.db.db.argsCount('table', 'key')         |
| ISSTRING |                              Checking if the key value is a string                               |          client.db.db.isString('table', 'key')         |
| ISNUMBER |                              Checking if the key value is a number                               |          client.db.db.isNumber('table', 'key')         |
## About
A Firebase database of wrapper using aoi.fb as API
[![NPM Version](https://img.shields.io/npm/v/aoi.fb.svg?maxAge=3600)](https://www.npmjs.com/package/aoi.fb)
[![NPM Downloads](https://img.shields.io/npm/dt/aoi.fb.svg?maxAge=3600)](https://www.npmjs.com/package/aoi.fb)
## Installation

**Node.JS 16.0.0 or newer is required.**  

```sh-session
npm install aoi.fb@latest
```

### Setup

**This file is mandatory and necessary for aoi.fb to work in aoi.jsV5! -- Why? Please look at the end of the [README](#terms)** 
**Create a file in the root folder of your project (in the same folder where your index is) with the name:** `att.sh`
**Then add the code below into the file:**
```sh-session
rm ./node_modules/aoi.js/src/classes/*
cp ./node_modules/aoi.fb/src/adjust/* ./node_modules/aoi.js/src/classes/
```
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

## Methods Examples
### Database Illustration
```fix
(Table)
main--
    money--
          key: money
          value: 1000
    prefix--
          key: prefix
          value: fb.
```

### SET
#### Example - 
```js
client.db.db.set('main', 'money', '1000') // Setting the value '1000' in the 'money' key that is in the 'main' table
// return: bolean (true)
```
### GET
#### Example - 
```js
client.db.db.get('main', 'money').then(a => a.value) // Asking for the value of the 'money' key
// return: '1000' 
```

### ALL
#### Example - 
```js
client.db.db.all('main').then(a => a.map(b => b.key)) // Requesting all keys and values within each of your 'main' tables
// return:  [ 'money', 'prefix' ] 
client.db.db.all('main').then(a => a.map(b => b.data.value)) // Requesting all values from your 'main' table
/* return: {
  money: '1000',
  prefix: 'fb.'
} */
```
### DELETE
#### Example - 
```js
client.db.db.delete('table') // Deleting your entire (main) database table
// return: bolean (true)
client.db.db.delete('main', 'money') // Deleting the 'money' key and the value inside
// return: bolean (true)
```

## Others
### PING
#### Example - 
```js
client.db.db.ping() // Requesting the database latency
// return: RandomNumberFromLatencyms
```

### ARGSCOUNT
#### Example - 
```js
client.db.db.argsCount('main', 'money')
// return: 4
```

### ISSTRING
#### Example - 
```js
client.db.db.isString('main', 'money') // Checking if 'money' is a string
// return: bolean (false)
client.db.db.isString('main', 'prefix') // Checking if 'prefix' is a string
// return: bolean (true)
```

### ISNUMBER
#### Example - 
```js
client.db.db.isString('main', 'prefix') // Checking if 'prefix' is a number
// return: bolean (false)
client.db.db.isNumber('main', 'money') // Checking if 'money' is a number
// return: bolean (true)
```

 ## PackageJson
**Your package.json should have a start script starting the node . that will start and run not only your index, but also the file nn att.sh**

 ```json
{
  "name": "YourBotName",
  "main": "index.js",
  "scripts": {
    "start": "node ."
  },
  "engines": {
    "node": "^16.6.0"
  },
  "devDependencies": {
    "node": "^16.6.0"
  },
  "dependencies": {
    "aoi.fb": "^5.2.8",
    "aoi.js": "^5.0.8"
  }
}
```

## Terms

What is the att.sh file in Aoi.fb version 5 used for?
The att.sh file is for when the project is started, and the database is created, the file is also started and executed, and inside the file, modifications are made to aoi.js so that Aoi.fb works in V5 of Aoi.js, and the adjustments are pulled from the "adjust" folder of the Aoi.fb source code.
**By creating this file and making use of aoi.fb you are aware that your version of aoi.jsV5 is being adapted or adjusted for the functionality of Aoi.fb .**

## AoiFB

aoi.fb, a Firebase database of wrapper using aoi.fb as API

Owned by [GR](https://github.com/guihrib/) `GR#3012`<br>
Developer [Luís Fernando](https://github.com/KrulDev) `Luís Fernando#1581`<br>

## Open Source

aoi.fb is a package and db made for developers using aoi.js. Also made by you! If you want to contribute just do a [pull-request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)