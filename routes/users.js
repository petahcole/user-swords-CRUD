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

router.get("/", (req, res, next) =>  {
  user.getAll(req.body).then(users  =>  {
    res.json(users)
  })
})

router.delete("/:id", (req, res, next)  =>  {
  user.makeInactive(req.params.id).then(id => {
    console.log(id);
    res.json({id})
  })

})

function resError(res, statusCode, message) {
  res.status(statusCode);
  res.json({message});
}


module.exports = router;
