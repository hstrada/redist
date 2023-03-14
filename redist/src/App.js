const React = require('react');
const { builder } = require('./connection');

function App() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return 'You liked this!';
  }

  return React.createElement(
    'button',
    {
      onClick: () => builder()
    },
    'Like'
  );
}

module.exports = { App };
