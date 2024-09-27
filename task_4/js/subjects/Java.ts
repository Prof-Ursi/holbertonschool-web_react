namespace Subjects {
    //Add a new optional attribute experienceTeachingJava (number) to the Teacher interface
    export interface Teacher {
        experienceTeachingJava?: number;
    }

    //Create a class java extending from Subject
    export class Java extends Subject {
        //Write a method named getRequirements that will return a string 'Here is the list of requirements for Java'
        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        //Write a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingJava > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}
