# Wall Street React

Sandbox application in [React](http://facebook.github.io/react/) about stock exchange.

## Setup

    npm install

## Usage

    npm start
    npm run lint

## Misc

### Folders & Files structure

* app/
  * index.js _(entry point)_
  * app.js
  * alt.js _(Flux dispatcher instantiation)_
  * components/
    * component/ _(rely on [AltFlux](http://alt.js.org/))_
      * actions.js
      * store.js
      * component.jsx
* public/
  * index.html
  * styles/
  * images/
  * fonts/
* build/
* ... _(config files like `webpack.config.js` and dev files like `server.js`)_
