# Voting Client

### 1. Client Project Setup
```
mkdir voting-client
cd voting-client
npm init -y
```
We're going to use [Webpack](http://webpack.github.io/) along with its development server, so let's add both to the project:
```
npm install -g webpack webpack-dev-server
npm install --save-dev webpack webpack-dev-server
```
Since we're going to use both ES6 and React's [JSX syntax](https://facebook.github.io/jsx/) in the client code, we need some tooling for those. Babel knows how to process both, so let's plug it in. We need both Babel itself and its Webpack loader:
```
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```
### 2. Unit Testing support
Unit test libraries that we used on the server - Mocha and Chai
```
npm install --save-dev mocha chai
```
We're going to test our React components as well, and that's going to require a DOM. One alternative would be to run tests in an actual web browser with a library like [Karma](http://karma-runner.github.io/0.13/index.html). However, we don't actually need to do that because [we can get away with](http://jaketrent.com/post/testing-react-with-jsdom/) using [jsdom](https://github.com/tmpvar/jsdom), a pure JavaScript DOM implementation that runs in Node:
```
npm install --save-dev jsdom
```
```
npm install --save immutable
npm install --save-dev chai-immutable
```
React and react-hot-loader
```
npm install --save react react-dom
npm install --save-dev react-hot-loader
```
Installing [PureRenderMixin](https://facebook.github.io/react/docs/pure-render-mixin.html)
```
npm install --save react-addons-pure-render-mixin
```
Installing [React Router](https://github.com/rackt/react-router)
```
npm install --save react-router@1.0.0-rc3
```
[Redux](http://redux.js.org/) is a predictable state container for JavaScript apps
```
npm install --save redux
```
[react-redux](https://github.com/rackt/react-redux) is official React bindings for Redux
```
npm install --save react-redux
```
Setting Up The Socket.io Client
```
npm install --save socket.io-client
```

