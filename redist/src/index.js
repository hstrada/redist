const React = require('react');
const ReactDOM = require('react-dom/client');
const { App } = require('./App');

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));
