// Let's build a Teacher interface with below characteristics
/* firstName(string) and lastName(string). These two attributes
should only be modifiable when a Teacher is first initialized
fullTimeEmployee(boolean) this attribute should always be defined
yearsOfExperience(number) this attribute is optional
location(string) this attribute should always be defined
Add the possibility to add any attribute to the Object like contract(boolean)
without specifying the name of the attribute
*/
var teacher3 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: false,
    location: 'London',
    contract: false,
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
var printTeacher = function (firstName, lastName) {
    var fullName = "".concat(firstName[0], ". ").concat(lastName);
    return fullName;
};
console.log(printTeacher("San", "Andrea"));
//# sourceMappingURL=main.js.map