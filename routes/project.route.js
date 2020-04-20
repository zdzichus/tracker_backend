let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Projecct Model

let projectSchema = require('../models/Project')


// CREATE Project
router.route('/create-project').post((req, res, next) => {
  projectSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});


// READ Projects
router.route('/').get((req, res) => {
  projectSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Project
router.route('/edit-project/:id').get((req, res) => {
  projectSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Project
router.route('/update-project/:id').put((req, res, next) => {
  projectSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Project updated successfully !')
    }
  })
})

// Delete Project
router.route('/delete-project/:id').delete((req, res, next) => {
  projectSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;
