const express = require('express'); 
var path = require('path'); 
const app = express(); 
const port = 8083;
app.get('/test-path', (req, res)=>{ 
    console.log("test-path api called") 
    res.status(200).json({
    id:1,
    data:'yes called api'
    })
})

app.get('/blog', (req, res)=>{
console.log("blog api called") 
    res.status(200).json({
    id:1,
    item: 'Blog Item'
    })  
})
app.listen(port, ()=>{
console.log(`App is listening at http://localhost:${port}`);
});