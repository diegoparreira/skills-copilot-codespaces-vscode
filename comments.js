// Create web server

// create a new express app
const express = require('express');
const app = express();
// create a new router
const commentsRouter = express.Router();
// create a new route for the router
commentsRouter.get('/comments', (req, res) => {
  res.send('Comments will go here');
});
// mount the router to the app
app.use(commentsRouter);
// start the server
app.listen(4001, () => {
  console.log('Your app is listening on port 4001!');
});