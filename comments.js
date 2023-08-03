// Create web server application
// 2016-02-01
// ------------------------------------------------------------------
//
// This file contains the code to create a web server application
// that supports the following RESTful endpoints:
//
// GET /comments
// GET /comments/{id}
// POST /comments
// PUT /comments/{id}
// DELETE /comments/{id}
//
// ------------------------------------------------------------------
/* jshint node: true */

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;
var comments = [
  {
    id: 1,