const express = require('express');
const path = require('path');

// initialize express
const app = express();
const PORT = process.env.PORT || 3001;

// serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// start the server
app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}. Visit http://localhost:${PORT}/`)
);

module.exports = app;
