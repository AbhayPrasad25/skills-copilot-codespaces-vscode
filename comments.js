// Create web server
// Start server
// Create a route to handle GET request to /comments
// Create a route to handle POST request to /comments
// Create a route to handle PUT request to /comments
// Create a route to handle DELETE request to /comments
// Create a route to handle GET request to /comments/:id
// Create a route to handle POST request to /comments/:id/replies
// Create a route to handle PUT request to /comments/:id/replies
// Create a route to handle DELETE request to /comments/:id/replies
// Create a route to handle GET request to /comments/:id/replies/:id
// Create a route to handle GET request to /comments/:id/replies/:id/replies
// Create a route to handle POST request to /comments/:id/replies/:id/replies
// Create a route to handle PUT request to /comments/:id/replies/:id/replies
// Create a route to handle DELETE request to /comments/:id/replies/:id/replies
// Create a route to handle GET request to /comments/:id/replies/:id/replies/:id
// Create a route to handle GET request to /comments/:id/replies/:id/replies/:id/replies

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let comments = [
  {
    id: 1,
    text: 'Comment 1',
    replies: [
      {
        id: 1,
        text: 'Reply 1',
        replies: [
          {
            id: 1,
            text: 'Reply 1',
            replies: []
          }
        ]
      }
    ]
  }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

app.put('/comments', (req, res) => {
  const updatedComment = req.body;
  const index = comments.findIndex(comment => comment.id === updatedComment.id);
  if (index === -1) {
    res.status(404).send('Comment not found');
  } else {
    comments[index] = updatedComment;
    res.json(updatedComment);
  }
});

app.delete('/comments',