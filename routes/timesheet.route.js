let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
const { check, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const authorize = require("../routes/auth");

// Timesheet Model

let timesheetSchema = require('../models/Timesheet')



// CREATE Timesheet
router.route('/create-timesheet').post((req, res, next) => {
  timesheetSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});



// READ TimeSheets
router.route("/").get(authorize, (req, res) => {
  // console.log(">>>");
  timesheetSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});


// Get Single TimeSheet
router.route('/edit-timesheet/:id').get((req, res) => {
  timesheetSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update TimeSheet
router.route('/update-timesheet/:id').put((req, res, next) => {
  timesheetSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('TimeSheet updated successfully !')
    }
  })
})

// Delete Timesheet
router.route('/delete-timesheet/:id').delete((req, res, next) => {
  timesheetSchema.findByIdAndRemove(req.params.id, (error, data) => {
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
