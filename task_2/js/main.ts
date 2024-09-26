//task 5: Create interface named DirectorInterface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

//task 5: Create interface named TeacherInterface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

//task 5: Create class named Director implementing DirectorInterface
class Director implements DirectorInterface {
    workFromHome(){
        return 'Working from home';
    }
    getCoffeeBreak(){
        return 'Getting a coffee break';
    }
    workDirectorTasks(){
        return 'Getting to director tasks';
    }
}

//task 5: Create class named Teacher implementing TeacherInterface
class Teacher implements TeacherInterface {
    workFromHome(){
        return 'Cannot work from home';
    }
    getCoffeeBreak(){
        return 'Cannot have a break';
    }
    workTeacherTasks(){
        return 'Getting to work';
    }
}

//task 5: Create function named createEmployee
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

//task 6: Create function named isDirector
function isDirector(employee: Director | Teacher){
    return employee instanceof Director;
}

//task 6: Create function named executeWork
function executeWork(employee: Director | Teacher){
    if (isDirector(employee)) {
        console.log(employee.workDirectorTasks());
    } else {
        console.log(employee.workTeacherTasks());
    }
}

//task 7: Create string literal type named Subjects
type Subjects = 'Math' | 'History';

//task 7: Create function named teachClass
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    } else {
        return 'Unknown subject';
    }
}