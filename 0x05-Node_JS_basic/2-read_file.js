const fs = require("node:fs");
let studentByField = {};
let totalStudents = 0;

function countStudents(file) {
    try{
        const fileStat = fs.statSync(file)
        if (fileStat.isFile()) {
            const csvData = fs.readFileSync(file, "utf-8");
            const rows = csvData.trim().split("\n");
            rows.forEach((col, row)=>{
                if (row === 0) {
                    return;
                }
                const columns = col.split(",");
                const firstname = columns[0];
                const field = columns[3];
                // Set and initialize fields(like CS, SWE)
                // With count and list as members empty at first
                // Sample-> {CS: {count: 0, list: []}}
                studentByField[field] = studentByField[field] || {count: 0, list: []};
                studentByField[field].count += 1;
                studentByField[field].list.push(firstname);
                totalStudents += 1;
            });
            console.log(`Number of students: ${totalStudents}`)
            for (const field in studentByField) {
                // Destructure count, list members of the field
                const {count, list} = studentByField[field];
                console.log(`Number of students in ${field}: ${count}. List: ${list}`);
            }
        }
    }
    catch(err) {
        throw new Error("Cannot load the database");
    }
}

module.exports = countStudents
