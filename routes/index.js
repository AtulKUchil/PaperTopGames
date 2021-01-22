var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    res.sendFile('home.html', {
      root: './client/html'
    });
 });

 router.get('/dots.html', (req, res) => {
    res.sendFile('dots.html', {
      root: './client/html'
    });
 });

 router.get('/xox.html', (req, res) => {
    res.sendFile('xox.html', {
      root: './client/html'
    });
 });

 router.get('/player1Wins.html', (req, res) => {
    res.sendFile('player1Wins.html', {
      root: './client/html'
    });
 });

 router.get('/player2Wins.html', (req, res) => {
    res.sendFile('player2Wins.html', {
      root: './client/html'
    });
 });

 router.get('/tied.html', (req, res) => {
    res.sendFile('tied.html', {
      root: './client/html'
    });
 });

 router.get('/home.html', (req, res) => {
    res.sendFile('home.html', {
      root: './client/html'
    });
 });

 router.get('/login.html', (req, res) => {
    res.sendFile('login.html', {
      root: './client/html'
    });
 });

 router.get('/signup.html', (req, res) => {
    res.sendFile('signup.html', {
      root: './client/html'
    });
 });








module.exports = router;
