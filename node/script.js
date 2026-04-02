//access and interact with command line arguments
//it is an array

const fs = require('fs').promises;
const filepath = process.argv[2];           //[2]  eg node script.js output.txt -  takes output.txt as filepath
                                            //[1]  eg node script.js output.txt -  takes script.js as filepath
                                            //[0]  eg node script.js output.txt - takes node (node.exe) as filepath

async function fileProcess() {
    try{
        const data = await fs.readFile(filepath, 'utf-8');
        console.log(data);
        console.log(data.split('\n'));           //returns an array
        console.log(data.split('\n').length);    //returns the counted lines
        console.log(process.argv);
    } catch(err){
        console.log(err.message)
    }
}

fileProcess();