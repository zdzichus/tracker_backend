const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let timesheetSchema = new Schema({

                    timeshet_day: {
                    type: String
                    },
                    vacation: {
                      type: String
                    },
                    working_day: {
                      type: String
                    },
                    sick_day: {
                      type: String
                    },


                  }, {

  collection: 'timesheets'
})


module.exports = mongoose.model('Timesheet', timesheetSchema)

