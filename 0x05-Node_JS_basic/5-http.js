const http = require("node:http");
const {countStudents} = require("./myCsvReader");

const app = http.createServer(async (req, res)=>{
    if (req.url == "/") {
        res.write("Hello Holberton School!");
        res.end();
    }
    else if (req.url == "/students") {
        try {
            const result = await countStudents();
            res.write("This is the list of our students\n" + result);
            res.end();
        } catch (error) {
            res.write(`Cannot load the database\n`);
            res.end();
        }        
    }
});

app.listen(1245);

module.exports = app