//Create React Class inside Subjects namespace
namespace Subjects {
    //Add a new attribute experienceTeachingReact? (number) to the Teacher interface
    export interface Teacher {
        experienceTeachingReact?: number;
    }

    //Create a class React extending from Subject
    export class React extends Subject {
        //Create a method named getRequirements that will return a string 'Here is the list of requirements for React'
        getRequirements(): string {
            return 'Here is the list of requirements for React';
        }

        //Create a method named getAvailableTeacher that will return a string Available Teacher: <first name of teacher>
        getAvailableTeacher(): string {
            if (this.teacher.experienceTeachingReact > 0) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}