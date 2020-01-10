// Imports the Express Library
const express = require('express');
// Creates the application using Express
const app = express();

// Middleware Imports for Logger
const logger = require('./middleware/logger');
// Sets port for Local host
const PORT = 5000;

// Routes
BugsList = require('./routes/api/bugs.js');


// Application
app.use(logger);
app.get('/', (req,res)=> {
    res.json(BugsList);
})



app.listen(PORT, () => console.log(`The Server has started on  ${PORT}`));