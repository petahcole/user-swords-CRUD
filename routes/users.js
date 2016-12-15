var express = require('express');
var router = express.Router();
var user = require("../db/user");
var sword = require("../db/swords")
/* GET users listing. */
router.get('/:id', (req, res, next) =>  {
  if(!isNaN(req.params.id)){
    user.getOne(req.params.id).then(user => {
      if (user) {
        delete user.password;
        res.json(user);
      }else{
        resError(res, 404, "User not found")
      }
    });
  } else {
    resError(res, 500, "Invalid ID")
  }
});

router.get('/:id/swords', (req, res, next) =>  {
  if(!isNaN(req.params.id)){
    sword.getByUser(req.params.id).then(sword => {
      res.json(sword);
    })
  }
 else {
    resError(res, 500, "Invalid ID")
  }
});



function resError(res, statusCode, message) {
  res.status(statusCode);
  res.json({message});
}
module.exports = router;
