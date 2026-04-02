//the file that actually finds the task

//this is a named export
/* exports.getAllTasks = (req, res)=>{
    res.send("Returning all the tasks")
}; */
const getAllTasks = (req, res)=>{
    res.status(200).send("Returning all tasks");
};

const createTask = (req, res)=>{
    const taskData = req.body;
    res.status(200).json({msg: "Task created", data: taskData});
};

module.exports = {getAllTasks, createTask};