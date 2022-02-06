<br />
    <p>
    <a href="https://www.npmjs.com/package/aoi.fb"><img src="https://cdn.discordapp.com/attachments/929747405916733460/934447223117340732/AoiFB_LogoTransparent_2.0.png" alt="aoi.fb" /></a>
  </p>

# aoi.fb

A Firebase database of wrapper using aoi.fb as API


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
    type: "custom",
    db: firebase,
    promisify: false
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

## AoiFB

aoi.fb, a Firebase database of wrapper using aoi.fb as API

Owned by [GR](https://github.com/guihrib/) `GR#3012`<br>
Developer [Luís Fernando](https://github.com/KrulDev) `Luís Fernando#1581`<br>

## Open Source

aoi.fb is a package and db made for developers using aoi.js. Also made by you! If you want to contribute just do a [pull-request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)