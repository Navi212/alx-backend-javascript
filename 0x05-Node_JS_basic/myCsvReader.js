const { error } = require("node:console");
const fs = require("node:fs");
let studentByField = {};
let totalStudents = 0;

const file = process.argv.length > 2 ? process.argv[2] : "";
const countStudents = () => new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data)=> {
        if (err) {
            reject("Cannot load the database");
        }
        else if(data) {
            const csvData = data.trim().split("\n");
            csvData.forEach((col, row) => {
                if (row === 0) {
                    return;
                }
                totalStudents += 1;
                const columns = col.split(",");
                const firstname = columns[0];
                const field = columns[3];
                studentByField[field] = studentByField[field] || {count: 0, list: []};
                studentByField[field].count += 1;
                studentByField[field].list.push(firstname);
            });
        }
        //console.log(`Number of students: ${totalStudents}`);
        let result = `Number of students: ${totalStudents}\n`;
        for (let field in studentByField) {
            let {count, list} = studentByField[field];
            result += `Number of students in ${field}: ${count}. List: ${list.join(', ')}\n`;
            //console.log(`Number of students in ${field}: ${count}. List: ${list}`);
        }
        resolve(result);
    });
})
// Export directly as a function
module.exports = {countStudents};
