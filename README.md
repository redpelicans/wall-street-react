# Wall Street React

Sandbox application in [React](http://facebook.github.io/react/) about stock exchange.

## Setup

    npm install

## Usage

    npm start
    npm run lint

## Conventions

### Folders & Files structure

* app/
  * index.js _(entry point)_
  * app.jsx
  * alt.js _(Flux dispatcher instantiation of [Alt](http://alt.js.org/))_
  * routes.jsx _(Routes configuration of [React Router](http://rackt.github.io/react-router/))_
  * components/
    * component/
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

### Components

There is 2 types of components:
* __Containers__ _(UserPage, FollowersSidebar, StoryContainer, FollowedUserList)_
  * wrap one or more dumb or smart components
  * hold state from Flux stores and pass it as objects to dumb components
  * call Flux actions and provide these as callbacks to dumb components
  * never have their own CSS styles
  * rarely emit DOM of their own, use dumb components for layout
* __Views__ _(Page, Sidebar, Story, UserInfo, List)_
  * have no dependencies on the rest of the app, e.g. Flux actions or stores.
  * often allow containment via this.props.children.
  * receive data and callbacks exclusively via props.
  * have a CSS file associated with them.
  * rarely have their own state.
  * might use other dumb components.

> _from [Dan Abramov](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)_
