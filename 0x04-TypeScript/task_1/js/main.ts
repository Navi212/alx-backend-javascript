// Let's build a Teacher interface with below characteristics
/* firstName(string) and lastName(string). These two attributes 
should only be modifiable when a Teacher is first initialized
fullTimeEmployee(boolean) this attribute should always be defined
yearsOfExperience(number) this attribute is optional
location(string) this attribute should always be defined
Add the possibility to add any attribute to the Object like contract(boolean)
without specifying the name of the attribute
*/

// Task 0
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

//Task 1
const teacher3: Teacher = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
  };
  
console.log(teacher3);

// Task 2
// Write an interface named Directors that extends Teacher.
// It requires an attribute named numberOfReports(number)
interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

  console.log(director1);

  // Task 3
  // Printing teachers
  /*
  Write a function printTeacher:
    It accepts two arguments firstName and lastName
    It returns the first letter of the firstName and the full lastName
    Example: printTeacher("John", "Doe") -> J. Doe
  Write an interface for the function named printTeacherFunction.
  */
 // Creates an interface for the function parameters and return type
  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }

  // Creates an arrow function assigning it to a variable as function name
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const fullName = `${firstName[0]}. ${lastName}`;
    return fullName;
  };

  // Tests the output passing parameters
  console.log(printTeacher("San", "Andrea"));


  //Task 4
  // Creates interface for the class
  interface StudentClass {
    workOnHomework(): string;
    displayName(): string;
  }

  // Creates interface for the constructor
  interface ClassConstructor {
    new (firstName: string, lastName: string): StudentClass;
  }

  // Implements the class using the defines class interface `StudentClass`
  class StudentClass implements StudentClass{

    constructor(public firstName: string, public lastName:string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    workOnHomework() {
        return "Currently working";
    }

    displayName() {
        return `${this.firstName}`;
    }
  }