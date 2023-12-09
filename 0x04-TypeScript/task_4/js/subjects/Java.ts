// Task 9
// Create a file Java.ts and write a Java Class in the same namespace.
// Add a new attribute experienceTeachingJava? (number) to the Teacher interface
// In the class, write a method named getRequirements that will return a string
// Here is the list of requirements for Java
// Write a method named getAvailableTeacher that will return a string Available
// Teacher: <first name of teacher>
// If the teacher doesn’t have any experience in teaching Java, then the method
// should return a string No available teacher

namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }
    class Java extends Subjects.Subject {
        getRequirements(): string  {
            return "Here is the list of requirements for Java";
        }

        getAvailableTeacher(): string {
            if (this.teacher?.experienceTeachingJava) {
                return `Available Teacher: ${this.teacher}`;
            }
            else {
                return "No available teacher";
            }
        }
    }
}