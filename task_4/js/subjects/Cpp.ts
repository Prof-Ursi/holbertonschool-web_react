namespace Subjects {
    //Add a new optional attribute experienceTeachingC (number) to the Teacher interface
    export interface Teacher {
        experienceTeachingC?: number;
    }

    //Create a class Cpp extending from Subject
    export class Cpp extends Subject {
        //Write a method named getRequirements that will return a string 'Here is the list of requirements for Cpp'
        getRequirements(): string {
            return 'Here is the list of requirements for Cpp';
        }

        //Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingC > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}
