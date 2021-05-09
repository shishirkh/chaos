const express = require("express");
const port=process.env.PORT || 3000;
const MY_POD_NAME=process.env.MY_POD_NAME || 'MY_POD_NAME';
const MY_NODE_NAME=process.env.MY_NODE_NAME || 'MY_NODE_NAME';
const app=express();

app.get('/',(req,res)=>{
    res.send(`hello world. pod name is: ${MY_POD_NAME}, node name is: ${MY_NODE_NAME}`);
})

app.listen(port,(err)=>{
    if(err){
        console.log(`Error: ${err.message}`);
    }else{
        console.log(`Listening on port ${port}`);
    }
  }
)

