# karma-mocha-as-promised

[Mocha as promised](https://github.com/domenic/mocha-as-promised) for [Karma](http://karma-runner.github.io)

* It uses (and will always use) the latest compatible versions of every library.
* It uses `peerDependencies` only.
* No `bower` dependency.

## Installation

Install the plugin from npm:

```sh
$ npm install karma-mocha-as-promised --save-dev
```

## Usage

After installing [karma-mocha](https://github.com/karma-runner/karma-mocha),
add `mocha-as-promised` before `mocha` to the `frameworks` key in your Karma configuration:

```js
module.exports = function(config) {
  config.set({

    // frameworks to use
    frameworks: ['mocha-as-promised', 'mocha']

    // ...
```


### Usage with karma-requirejs

If you are going to use [karma-requirejs](https://github.com/karma-runner/karma-requirejs), make sure you place `requirejs` first in the order of your frameworks.

```js
frameworks: ['requirejs', 'mocha-as-promised', 'mocha']
```


## Contributors
[Martin Hansen](https://github.com/mokkabonna): Documentation update


## License
MIT Licensed

