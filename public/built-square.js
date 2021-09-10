const reactDom = require("react-dom");

reactDom.render(
React.createElement('h1', { style: { backgroundColor: 'pink' } }, 'This text should have a pink backgrounddd!!'),
document.getElementById('app')
);