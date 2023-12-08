// Advanced types Part 1

// Creates the DirectorInterface interface with the 3 expected methods:
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Creates the TeacherInterface interface with the 3 expected methods:
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Creates a class Director that will implement DirectorInterface
class Director implements DirectorInterface {
    workFromHome() {
        return "Working from home";
    }

    getCoffeeBreak() {
        return "Getting a coffee break";
    }

    workDirectorTasks() {
        return "Getting to director tasks";
    }
}


// Create a class Teacher that will implement TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome() {
        return "Cannot work from home";
    }

    getCoffeeBreak() {
        return "Cannot have a break";
    }

    workTeacherTasks() {
        return "Getting to work";
    }
}

/*
Create a function createEmployee with the following requirements:

It can return either a Director or a Teacher instance
It accepts 1 arguments:
salary(either number or string)
if salary is a number and less than 500 - It should return
a new Teacher. Otherwise it should return a Director
*/
function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
};

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
const isDirector = (employee: Teacher | Director): employee is Director => {
    return employee instanceof Director
}

/*
Write a function executeWork:
    it accepts employee as an argument
    if the employee is a Director, it will call workDirectorTasks
    if the employee is a Teacher, it will call workTeacherTasks
*/
const executeWork = (employee: Teacher | Director) => {
    if (isDirector(employee)) {
        console.log(`${employee.workDirectorTasks()}`);
    } else {
        console.log(`${employee.workTeacherTasks()}`);
    }
}

executeWork(createEmployee(200));
executeWork(createEmployee(1000));