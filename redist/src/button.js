const React = require('react');
const ReactDOM = require('react-dom/client');
const { builder } = require('./index');

function LikeButton() {
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

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(LikeButton));
