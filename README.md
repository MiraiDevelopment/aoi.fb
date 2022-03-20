<br>
<div align="center">
    <a href="https://www.npmjs.com/package/aoi.fb"><img src="https://user-images.githubusercontent.com/61317250/159102810-58b7c66b-0128-45da-a8a1-ee7a39c91539.png" alt="aoi.fb icon" /></a>
    <h1>aoi.fb</h1>
    <p>A Firebase database of wrapper using aoi.fb as API</p>
    <a href="https://discord.gg/gNFEMrHshn"><img src="https://img.shields.io/discord/786392360475951154?color=5865F2&logo=discord&logoColor=white" alt="discord server" /></a>
    <a href="https://www.npmjs.com/package/aoi.fb"><img src="https://img.shields.io/npm/v/aoi.fb.svg?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/aoi.fb"><img src="https://img.shields.io/npm/dt/aoi.fb.svg?maxAge=3600" alt="npm downlods" /></a>
</div>
<br>

## Support - Have questions or want to talk and contact the developers?
### Log on to the support server now to get answers to your questions or to receive help with errors:
<div align="center">
  <h3><a href="https://discord.gg/gNFEMrHshn"alt="server support">Official Server</a></h3>
</div>

## Table Of Contents

- [About](#about)
- [Installation](#installation)
  - [Setup](#setup)
- [Methods Examples](#methods-examples)
  - [SET](#set)
  - [GET](#get)
  - [ALL](#all)
  - [PUSH](#push)
  - [DELETE](#delete)
  - [UPDATE](#update)
- [Others Examples](#others)
  - [PING](#ping)
  - [ARGSCOUNT](#argscount)
  - [ISSTRING](#isstring)
  - [ISNUMBER](#isnumber)
  - [PackageJson](#packagejson)
- [AoiFB](#aoifb)
- [Open Source](#open-source)

|          |                                                         Documentation and tiny information       |                                                        |
|:--------:|:------------------------------------------------------------------------------------------------:|:------------------------------------------------------:|
| Methods  |                                            Description                                           |                           Use                          |
|   SET    |                                To set a value to a referenced key                                |        client.db.db.set('table', 'key', 'value')       |
|   GET    |                                  To get the value of a table                                     | client.db.db.get('table', 'key').then(a => a.value)    |
|   ALL    |                                Returns all values of the reference                               | client.db.db.all('table').then(a => a.map(b => b.key)) |
|   PUSH    |                   To push a value from the reference and add it to the array                    |        client.db.db.push('table', 'key', 'value')      |
|  DELETE  | To delete all the values made in the reference, be it the whole table, ora directory further down|           client.db.db.delete('table', 'key')          |
|  UPDATE  |                                 Updates to value of the reference                                |   client.db.db.update('table', 'key', { value1: 'a'})  |
|          |                                                                                                  |                                                        |
|  Others  |                                            Description                                           |                           Use                          |
|   PING   |                                 Requesting the database latency                                  |                    client.db.db.ping()                 |
| ARGSCOUNT|                        Counting arguments to the value of the requested key                      |         client.db.db.argsCount('table', 'key')         |
| ISSTRING |                              Checking if the key value is a string                               |          client.db.db.isString('table', 'key')         |
| ISNUMBER |                              Checking if the key value is a number                               |          client.db.db.isNumber('table', 'key')         |
## About
A Firebase database of wrapper using aoi.fb as API
## Installation

**Node.JS 16.6.0 or newer is required.**  

```sh-session
npm install aoi.fb
```

**Aoi.js v5.1.0 or newer is required.** **Check Check how to use in [Package.json](#packagejson)**

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

## Methods Examples
### Database Illustration
```fix
(Table)
main--
    tasklist--
          0: go shopping
          1: back to home
    values--
          a: 1
          b: 2
          c: 3
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
// return: boolean (true)
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

### PUSH
#### Example - 
```js
client.db.db.set('main', 'tasklist', ['go shopping']) // First value
// return: boolean (true)
client.db.db.push('main', 'tasklist', 'back to home') // New value pushed
// return: boolean (true)
```

### DELETE
#### Example - 
```js
client.db.db.delete('main') // Deleting your entire (main) database table
// return: boolean (true)
client.db.db.delete('main', 'money') // Deleting the 'money' key and the value inside
// return: boolean (true)
```

### UPDATE
#### Example - 
```js
client.db.db.update('main', 'values', {a: '0'}) // Updates the value of the "a" key from 1 to zero without changing "b" and "c"
// return: boolean (true)
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
// return: boolean (false)
client.db.db.isString('main', 'prefix') // Checking if 'prefix' is a string
// return: boolean (true)
```

### ISNUMBER
#### Example - 
```js
client.db.db.isString('main', 'prefix') // Checking if 'prefix' is a number
// return: boolean (false)
client.db.db.isNumber('main', 'money') // Checking if 'money' is a number
// return: boolean (true)
```

 ## PackageJson
 
**Example of Replit**
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
    "aoi.fb": "5.6.5",
    "aoi.js": "5.1.1"
  }
}
```
<br>

<div align="center">
<h1>Mirai Development</h1>
<h2>AoiFB</h2>

<p>aoi.fb - a Firebase database of wrapper using aoi.fb as API</p>

Owned by <a href="https://github.com/guihrib/">GR</a> and Team <a href="https://github.com/MiraiDevelopment">Mirai Development</a></p>
    <a href="https://discord.gg/gNFEMrHshn"><img src="https://user-images.githubusercontent.com/61317250/159102888-8af9ff2c-2c42-41d2-8178-b99d8d0d59ab.png" alt="Mirai Development" /></a>
</div>

## Open Source

aoi.fb is a package and db made for developers using aoi.js. Also made by you! If you want to contribute just do a [pull-request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)

<p>Copyright © 2022 @MiraiDevelopment</p>
