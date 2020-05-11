const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

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

projectSchema.plugin(uniqueValidator, { message: 'Project already in use.' });
module.exports = mongoose.model('Project', projectSchema)


