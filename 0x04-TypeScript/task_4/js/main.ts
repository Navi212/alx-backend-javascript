// Task 10
// create and export a constant cpp for Cpp Subjects
// create and export a constant java for Java Subjects
// create and export a constant react for React Subjects

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React;

// create and export one Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher: Subjects.Teacher = {
    firstName: "Joe",
    lastName: "Navi",
    experienceTeachingC: 10,
};

// for Cpp subject, log to the console C++, set cTeacher as the teacher, call
//  the two methods getRequirements and getAvailableTeacher and print the strings they return
if (cpp) {
    console.log("c++");
    cpp.setTeacher(cTeacher);
    console.log(cpp.getRequirements());
    console.log(cpp.getAvailableTeacher());
} 

// for Java subject, log to the console Java, set cTeacher as the teacher, call the two methods
//  getRequirements and getAvailableTeacher, and print the strings they return
if (java) {
    console.log("Java");
    java.setTeacher(cTeacher);
    console.log(java.getRequirements());
    console.log(java.getAvailableTeacher());
}

// for React subject, log to the console React, set cTeacher as the teacher, call the two methods
//  getRequirements and getAvailableTeacher, and print the strings they return
if (react) {
    console.log("React");
    react.setTeacher(cTeacher);
    console.log(react.getRequirements());
    console.log(react.getAvailableTeacher());
}