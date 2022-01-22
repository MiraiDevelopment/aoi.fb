# Aoi.FB

A Firebase database of wrapper using aoi.db as API


## Table Of Contents

- [About](#about) 
- [Initial setup example](#initial-setup-example)
- [Methods](#methods)
  - [SET](#set)
  - [GET](#get)
  - [ALL](#all)
  - [DEL](#del)
- [Others](#others)

## About
A Firebase database of wrapper using aoi.db as API

## Initial setup example

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
  token: "TOKEN",
  prefix: "PREFIX",
  intents: ["GUILDS", "GUILD_MESSAGES"],
  database: database
})

bot.onMessage()

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