# Aoi.FB

A Firebase database of wrapper using aoi.db as API


## Table Of Contents

- [About](#about) 
- [Methods](#methods)
  - [CREATE](#create)
  - [GET](#get)
  - [SET](#set)
  - [ALL](#all)
- [Example](#example)

## About
A Firebase database of wrapper using aoi.db as API

## Methods
### CREATE
### GET
### SET
### ALL

## Others
### PING
## Example

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
  code: `Pong! $pingms`
})

bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

```