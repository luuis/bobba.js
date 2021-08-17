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
* [Wiki Home](https://github.com/luuis/bobba.js/wiki)
* [Get started](https://github.com/luuis/bobba.js/wiki/Get-started)
* [Methods](https://github.com/luuis/bobba.js/wiki/Methods)
* [Data types](https://github.com/luuis/bobba.js/wiki/Data-types)

## Example

```js
const { HabboAPI, HabboHotel } = require('bobba');

const bobba = new HabboAPI({ hotel: HabboHotel.ES });

bobba.getHabbo('lDromedario').then(data => console.log(data));
```
