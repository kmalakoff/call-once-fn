# call-once-fn

Wraps a function so it runs only on its first call.

## Install

```sh
npm install call-once-fn
```

## Use

Save this as `example.cjs` and run `node example.cjs`:

```js
var assert = require('assert');
var once = require('call-once-fn');

var results = [];
var callback = once(function () {
  results.push(Array.prototype.slice.call(arguments));
});

callback('error', 'value1', 'value2');
callback('ignored');

assert.deepEqual(results, [['error', 'value1', 'value2']]);
console.log(results[0]);
```

The first call forwards all arguments and returns the wrapped function's result. Later calls return `undefined` without calling the wrapped function.

## License

MIT
