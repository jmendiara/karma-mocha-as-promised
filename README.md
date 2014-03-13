karma-mocha-as-promised
======================

[Mocha as promised](https://github.com/domenic/mocha-as-promised) for [Karma](http://karma-runner.github.io)

* It uses (and will always use) the latest compatible versions of every library.
* It uses `peerDependencies` only.
* No `bower` dependency.

Installation
------------

Install the plugin from npm:

```sh
$ npm install karma-mocha-as-promised --save-dev
```

Add `mocha-as-promised` before `mocha` to the `frameworks` key in your Karma configuration:

```js
module.exports = function(config) {
  config.set({

    // frameworks to use
    frameworks: ['mocha-as-promised', 'mocha']

    // ...
```

---

License
-------

MIT Licensed

