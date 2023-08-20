// Create web server application that handles GET and POST requests
// to the path '/comments' and returns JSON data.
// GET requests return the current comments array.
// POST requests add a new comment to the array, and then return the
// updated array.
// The comments array is stored in a file called comments.json.
// If the file does not exist, it is automatically created.
// The file is stored in the same directory as the web server application.
// The comments array should be saved to the file after every POST request.
// Use the following command to install express in the project directory:
// npm install express --save
// Use the following command to run the application:
// node comments.js

var express = require('express');
var app = express();
var fs = require('fs');

// Use the built-in express middleware for serving static files from './public'
app.use(express.static('./public'));

// Use the built-in express middleware for parsing JSON in request bodies
app.use(express.json());

// Use the built-in express middleware for parsing URL-encoded request bodies
app.use(express.urlencoded());

// Use the built-in express middleware for logging
app.use(express.logger());

// Use the built-in express middleware for serving favicon.ico
app.use(express.favicon());

// Use the built-in express middleware for serving index.html by default
app.use(express.static('./public'));

// Use the built-in express middleware for serving 404 errors
app.use(express.errorHandler());

// Handle GET requests to the path '/comments'
app.get('/comments', function(request, response) {
  // Read the file comments.json
  fs.readFile('comments.json', function(error, data) {
    if (error) {
      // If there is an error, send a 500 error response
      response.send(500);
    } else {
      // Parse the file contents as JSON
      var comments = JSON.parse(data);
      // Send the comments array as the response
      response.send(comments);
    }
  });
});

// Handle POST requests to the path '/comments'
app.post('/comments', function(request, response) {
  // Read the file comments.json
  fs.readFile('comments.json', function(error, data) {
    if (error) {
      // If there is an error, send a 500 error response
      response.send(500);
    } else {
      // Parse the file contents as JSON
      var comments = JSON.parse(data);
      // Add a new comment to


