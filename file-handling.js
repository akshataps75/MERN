const fs = require('fs').promises;   //commonJS syntax

//the following will result in CALLBACK HELL
//async- NON_BLOCKING
/*fs.readFile('input.txt', 'utf-8', (error, data)=>{
    fs.writeFile('output.txt', 'utf-8', (error, data))
    /* if (error) {
        console.error("Could not read file: ", error);
        return;
    }
    console.log(data); 
});*/

//promise style
async function processFile() {
    try {
    const data = await fs.readFile('input.txt', 'utf-8');
    await fs.writeFile('output.txt', data,'utf-8');
    await fs.appendFile('output.txt', '\nCopied successfully', 'utf-8');
    //console.log('All done')
    } catch (error){
        console.error('Something failed ', error)
    }
}

console.log("File processsing started...")
//since async always return a promise, await the function call
//await processFile();    will give an error since it is top-level await. (allowed in ES modules only)
processFile().then(() => {
    console.log("Processing done"); 
});

