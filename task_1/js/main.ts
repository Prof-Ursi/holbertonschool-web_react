// task 1: Create interface named Teacher
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [attributeName: string]: any;
}

// task 2: Create interface named Directors extending Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}

// task 3: Creat interface named printTeacherFunction for a function taking firstName and lastName as arguments and returning a string
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}


// task 4: Create an interface for the class StudentClass
interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

//task 4: Create an interface for the class StudentClass constructor
interface StudentConstructor {
    firstName: string;
    lastName: string;
}


// task 3: Create a function named printTeacher using the printTeacherFunction interface
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`;
}

// task 4: Create a class named StudentClass
class StudentClass implements StudentClassInterface {
    firstName;
    lastName;
    constructor({firstName, lastName}: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework() {
        return 'Currently working';
    }
    displayName() {
        return this.firstName;
    }
}
