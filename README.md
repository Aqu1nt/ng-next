# ng-next
Ng-next provides a simple way to mix angular 1.x with ES6 / ES7, its key parts are 
* Decorators for angular & ui-router
* Async / Await integration to make it compatible with angulars $digest cycle

This little library is pretty new and under active development. Please report bugs and improvements :)

## Installation
Ng-next is available on npm
`npm install --save ng-next`

## Usage

### Async / Await
If you're totally hyped about `async / await`, you can use it now without having to call `$rootScope.$digest()` every
time you `await` something. It just works!

This is achieved by injecting proxies into the default `Promise` class, which is used by `async / await`.
The proxies get injected into `Promise` the first time you call `import "ng-next"`

##### Configuration
If you have a huge amount of `async / await` or `Promise.then` statements in your code and they get called extremely often this can
cause slight performance issues depending on the scope of your application.

For this case you can limit all `$rootScope.$digest()` calls by setting a minimum duration that has to pass before $rootScope gets $digested again.
 
`import {config} from "ng-next"
 config.DEBOUNCE_DIGEST_MILLIS = [millis] //Debounce for [millis]
 config.DEBOUNCE_DIGEST_MILLIS = false   //Disable debounce`