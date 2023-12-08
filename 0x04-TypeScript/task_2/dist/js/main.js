// Advanced types Part 1
// Creates a class Director that will implement DirectorInterface
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
// Create a class Teacher that will implement TeacherInterface
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
/*
Create a function createEmployee with the following requirements:

It can return either a Director or a Teacher instance
It accepts 1 arguments:
salary(either number or string)
if salary is a number and less than 500 - It should return
a new Teacher. Otherwise it should return a Director
*/
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
;
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
// Task 6
// Creating functions specific to employees
/*
Write a function isDirector:
    it accepts employee as an argument
    it will be used as a type predicate and if the employee is a director
*/
var isDirector = function (employee) {
    return employee instanceof Director;
};
/*
Write a function executeWork:
    it accepts employee as an argument
    if the employee is a Director, it will call workDirectorTasks
    if the employee is a Teacher, it will call workTeacherTasks
*/
var executeWork = function (employee) {
    if (isDirector(employee)) {
        console.log("".concat(employee.workDirectorTasks()));
    }
    else {
        console.log("".concat(employee.workTeacherTasks()));
    }
};
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
/*
Write a function named teachClass:
it takes todayClass as an argument
it will return the string Teaching Math if todayClass is Math
it will return the string Teaching History if todayClass is History
*/
var teachClass = function (todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else if (todayClass === "History") {
        return "Teaching History";
    }
};
teachClass('Math');
teachClass('History');
//# sourceMappingURL=main.js.map