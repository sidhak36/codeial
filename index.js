
const express = require('express');
const app = express();
const port = 8000;


app.listen(function(err){
    if(err){
        console.log(`Error occured while running server: ${err}`);
        return;
    }

    console.log(`Successfully started server at port: ${port}`);
});