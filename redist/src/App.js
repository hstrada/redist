const React = require('react');
const { builder } = require('./connection');

function App() {
  React.useEffect(() => {
    builder();
  }, []);

  return <h1>hello</h1>;
}

module.exports = { App };
