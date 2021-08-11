<div align="center">
  <br />
  <p>
    <a href="https://www.npmjs.com/package/bobba"><img src="https://img.shields.io/npm/v/bobba.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/bobba"><img src="https://img.shields.io/npm/dt/bobba.svg?maxAge=3600" alt="NPM downloads" /></a>
  </p>
</div>

# Bobba.JS

Bobba.JS is a [Node.js](https://nodejs.org) wrapper that allows you to easily collect data from the (undocumented) Habbo API.

See the `example.js` file on how to you could use this library.

## How to use it

**Node.js 4 or newer is required.**

```sh-session
npm install bobba
```

## Documentation
*Work in progress*

## Example

```js
const { HabboAPI, HabboHotel } = require('bobba');

const api = new HabboAPI({ hotel: HabboHotel.ES });

api.getHabbo('lDromedario').then(data => console.log(data));
```
