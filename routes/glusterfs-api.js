var express = require('express');
var router = express.Router();
var gf = require('../model/glusterfs')

router.get('/hello', function (req, res, next) {
  res.json({
    greettng: 'hey'
  })
});

router.get('/peer', function (req, res, next) {
  gf.showPeerStatus().then(data => {
    res.json({
      data: data
    })
  }).catch(err => {
    res.json({
      error: err
    })
  });
});

module.exports = router;