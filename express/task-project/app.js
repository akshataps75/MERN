//the base path in the main file

const express  = require('express');    //import the function
const app = express();                  //initilaize the app
const taskRoutes = require('./routes/route');

//middleware that handles JSON req.body
app.use(express.json());

app.use('/api/v1/tasks', taskRoutes);

app.listen(3000);