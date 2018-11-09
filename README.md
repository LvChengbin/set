# Set

[![Greenkeeper badge](https://badges.greenkeeper.io/LvChengbin/set.svg)](https://greenkeeper.io/)

Polyfill of ES6 Set for old browsers. Tested on IE 9/10.

## Usage

```js
$ npm i @lvchengbin/set --save
```

```js
import Set from '@lvchengbin/set';
const set = new Set( [ 'a', 'b', '1', '2', 1, 2 ] );
set.set( 3 );
```
If you want to use the library in browsers that loading with `<SCRIPT>` tag, you can git it from [set.js](https://raw.githubusercontent.com/LvChengbin/set/master/dist/set.js), and for browsers do not support ES6, please use [set.bc.js](https://raw.githubusercontent.com/LvChengbin/set/master/dist/set.bc.js).

```html
<script src="./set.bc.js"></script>
<script>
var set = new Set( [ [ 'x', 1 ], [ 'y', 2 ] ] );
console.log( set.size );
</script>
```
