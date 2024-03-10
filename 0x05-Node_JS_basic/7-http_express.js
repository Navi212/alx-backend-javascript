const express = require("express");
const app = express();
const {countStudents} = require("./myCsvReader");


app.get("/", (req, res)=>{
    res.send("Hello Holberton School!")
})

app.get("/students", async (req, res)=>{
    try {
        const result = await countStudents();
        res.send("This is the list of our students\n" + result);
    } catch (error) {
        res.send("Cannot load the database\n");
    }        
})

app.listen(1245);