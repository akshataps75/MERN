const express = require('express');
//instead of having the following for each function:
//const taskController = require('../controllers/tasks')
//taskController.getAllTasks;
//use: 
const {getAllTasks, createTasks} = require('../controllers/tasks')

//express.Router() creates an instance of a routing system.
const router = express.Router();

//getAllTasks over getAllTAsks() you are giving express a refernce. 
//basically: "Express, don't run this now. Hold this refernce and run only when someone hits this specific URL"
router.route('/').get(getAllTasks);

//should match GET /tasks/:id
//why only /:id here?---> in app.js; app.use() acts as a gatekeeper
//when req for /tasks/123 comes in app.js sees /tasks part and hands over /123 to this file
router.get('/:id', (req, res)=>{
    res.send(`fetching task ${req.params.id}`);
})

//make this router available to other files
module.exports = router;