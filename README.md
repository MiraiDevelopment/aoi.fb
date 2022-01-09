# Aoi.JS Firebase

A Firebase Database wrapper using firebase with aoi.db like API


## Table Of Contents

- [About](#about) 
  - [Examples](#examples)

## About
A Firebase Database wrapper using firebase with aoi.db like API

## Examples

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