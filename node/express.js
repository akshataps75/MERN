const express = require('express')
const app = express();
const PORT = 3000;

//app.use always comes first
//parse the body first- without it, data arriving at server is raw stream of bytes.
//GET does not have a body, hence if the application is PURE GET, no need to parse
//but POST/PUT/PATCH always need data to be parsed
app.use(express.json());            

//log timestamps
//[2026-03-29T09:32:27.105Z] GET /
//[2026-03-29T09:32:38.042Z] GET /about
app.use((req, res, next)=>{
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();  //without it, the logger won't read the next logs
})

app.get('/', (req, res)=>{
    res.status(200).send('Welcome to my api');
});

app.get('/about', (req, res)=>{
    res.status(200).json({name: 'Akshata', version: "1.0"});
})

app.post('/echo', (req, res)=>{
    res.status(200).json(req.body);
});

app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`);
})