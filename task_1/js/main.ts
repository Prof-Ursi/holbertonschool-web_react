// Create interface named Teacher
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [attributeName: string]: any;
}

// Create interface named Directors extending Teacher
interface Directors extends Teacher {
    numberOfReports: number;
}
