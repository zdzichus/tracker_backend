const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let timesheetSchema = new Schema({

                    timesheet_vacation: {
                    type: String
                    },
                    
                    project_name: {
                    type: String
                    },
                    timesheet_sick_day: {
                      type: String
                    },
                    timesheet_project_work: {
                      type: String
                    },
                    timesheet_date: {
                      type: String
                    },

 
                  }, {

  collection: 'timesheets'
})

timesheetSchema.plugin(uniqueValidator, { message: 'timesheet already in use.' });
module.exports = mongoose.model('Timesheet', timesheetSchema)

