var express = require('express');
var app = express();

var router = express.Router();

router.route('/people')

 .get(function(req, res) {
   req.models.person.find({}, function(err, people) {
     if (err) {
       res.json(err)
     } else {
       res.json(people);
     }
   })
 })

 .post(function(req, res) {
   //create person
   req.models.person.create({
     firstName: req.body.firstName,
     lastName: req.body.lastName,
     userName: req.body.userName
   }, function(err, person) {
     if (err) {
       res.send(err);
     } else {
       res.json(person);
     }
   })
 });

 router.route('/people/:id')
  .get(function(req, res) {
    req.models.person.get(req.params.id, function(err, person) {
      if (err) {
        res.send(err)
      } else {
        res.json(person);
      }
    })
  })

  .put(function(req, res) {
    req.models.person.get(req.params.id, function(err, person) {
      if (err) {
        res.send(err)
      } else {
        person.firstName = req.body.firstName;
        person.lastName = req.body.lastName;
        person.userName = req.body.userName;

        person.save(function(err) {
          if (err) {
            res.send(err);
          } else {
            res.json(person);
          }
        });
      }
    })
  })
  .delete(function(req, res) {
    req.models.person.get(req.params.id, function(err, person) {
      person.remove(function(err) {
        if (err) {
          res.send(err);
        } else {
          res.sendStatus(204);
        }
      })
    })
  })


   //save the person, check for errors

//whenever you run across upper case people in the documentation replace it with req.models.person. <== PAY ATTENTION TO THIS!!!!!
module.exports = router;
//get and post
//req.models.person instead of req person
