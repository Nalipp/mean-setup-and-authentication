var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.get('/', function(req, res, next) {
  Message.find()
    .exec(function(err, messages) {
      if (err) {
        return res.status(500).json({
          title: 'An error occured getting all messages',
          error: err
        });
      }
      res.status(200).json({
        message: 'Success getting all messages',
        obj: messages
      });
  });
});

router.post('/', function(req, res, next) {
  var message = new Message({
    content: req.body.content
  });
  message.save(function(err, result) {
    if (err) {
      return res.status(500).json({
        title: 'An error occured saving the message',
        error: err
      });
    }
    res.status(201).json({
      message: 'Message saved',
      obj: result
    });
  });
});

router.patch('/:id', function(req, res, next) {
  Message.findById(req.params.id, function(err, message) {
    if (err) {
      return res.status(500).json({
        title: 'Message edit error has occured',
        error: err
      });
    }
    if (!message) {
      return res.status(500).json({
        title: 'Message not found',
        error: {message: 'Message for edit not found in database'}
      });
    }
    message.content = req.body.content;
    message.save(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'Message edit falied during save',
          error: err
        });
      }
      return res.status(200).json({
        message: 'Message update successful',
        obj: result
      });
    });
  });
});

router.delete('/:id', function(req, res, next) {
  Message.findById(req.params.id, function(err, message) {
    if (err) {
      return res.status(500).json({
        title: 'Message delete error has occured',
        error: err
      });
    }
    if (!message) {
      return res.status(500).json({
        title: 'Message not found',
        error: {message: 'Message for delete not found in database'}
      });
    }
    message.remove(function(err, result) {
      if (err) {
        return res.status(500).json({
          title: 'Message delete falied during delete',
          error: err
        });
      }
      return res.status(200).json({
        message: 'Message delete successful',
        obj: result
      });
    });
  });
});

module.exports = router;
