let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser')
let dbConfig = require('./database/db');

// Express Route
const authRoute = require('../backend/routes/auth');
const users = require('../backend/routes/auth.route');
const userRoute = require('../backend/routes/user.route')
const projectRoute = require('../backend/routes/project.route')
const timesheetRoute = require('../backend/routes/timesheet.route')

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {

  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)
// Remvoe MongoDB warning error
mongoose.set('useCreateIndex', true);

// Express settings
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());

app.use('/auth', authRoute)
app.use('/users', userRoute)
app.use('/projects', projectRoute)
app.use('/timesheets', timesheetRoute)

// Serve static resources
app.use('/public', express.static('public'));
app.use('/users', users)

// PORT
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});


app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});