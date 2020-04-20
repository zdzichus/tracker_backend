const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let projectSchema = new Schema({

                 project_name: {
                    type: String
                    },
                    duration: {
                      type: String
                    },
                    start_day: {
                      type: String
                    },
                    finish_day: {
                      type: String
                    }, 

                  }, {

  collection: 'projects'
})


module.exports = mongoose.model('User', projectSchema)


