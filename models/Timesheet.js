const mongoose = require('mongoose');
const Schema = mongoose.Schema;


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


module.exports = mongoose.model('Timesheet', timesheetSchema)

