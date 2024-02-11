// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comment array
const comments = [
  { name: 'A', comment: 'Hello World' },
  { name: 'B', comment: 'Hello World' },
  { name: 'C', comment: 'Hello World' },
];

// Create a route to get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Web server is running on port ${port}`);
});
```

```javascript
// Path: index.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a comment array
const comments = [
  { name: 'A', comment: 'Hello World' },
  { name: 'B', comment: 'Hello World' },
  { name: 'C', comment: 'Hello World' },
];

// Create a route to get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Web server is running on port ${port}`);
});
```

```javascript
// Path: index.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments.js
const comments = require('./comments');

// Create a route to get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Web server is running on port ${port}`);
});
```

```javascript
// Path: comments.js
// Create a comment array
const comments = [
  { name: 'A', comment: 'Hello World' },
  { name: 'B', comment: 'Hello World' },
  { name: 'C', comment: 'Hello World' },
];

// Export comments
module.exports = comments;
```

```javascript
// Path: index.js
// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Import comments.js
const comments = require('./comments');

// Create a route to get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

app listen(port, () => {
  console.log(`Web server is running on port ${port}`);
}