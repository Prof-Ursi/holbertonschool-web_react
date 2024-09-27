//Create a Subject class inside the Subjects namespace
namespace Subjects {
    export class Subject {
        teacher: Teacher;

        set setTeacher(teacher: Teacher) {
            this.teacher = teacher;
        }
    }
}
