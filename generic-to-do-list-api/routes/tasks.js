const express = require('express');
const router  = express.Router();
const Task    = require('../models/task');


router.get('/tasks', (req, res, next) => {
    Task.find()
    .then((allTheTasks)=>{
        res.json(allTheTasks);
    })
    .catch((err)=>{
        res.json(err);
    });
});

router.post('/tasks/create', (req, res, next)=>{
  if(!req.user) {
    return res.json({message: 'Sorry, you must be logged in to create a task!'});
  }
    Task.create({
        title: req.body.title,
        description: req.body.description,
        doneyet: req.body.doneyet,
        owner: req.user._id
    })
    .then((response)=>{
        res.json(response);
    })
    .catch((err)=>{
        res.json(err);
    });
});


// task details route here




// edit task route here
router.post('/tasks/edit/:id', (req, res, next) => {
  Task.findByIdAndUpdate(req.params.id, req.body)
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err);
  });
});


// delete task route
router.delete('/tasks/delete/:id', (req, res, next) => {
  Task.findByIdAndRemove(req.params.id)
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err);
  });
});


module.exports = router;
