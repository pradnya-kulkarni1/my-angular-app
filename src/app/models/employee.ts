export class Employee {
    name: string;
    email: string;
    age: number;
    dateOfForm: Date;
    gender: string;
    acceptTerms: boolean;

    constructor(name = '', email = '', age = 1, dateOfForm= new Date(), gender = '', acceptTerms= false){
        this.name = name;
        this.email = email;
        this.age = age;
        this.dateOfForm = dateOfForm;
        this.gender = gender;
        this.acceptTerms = acceptTerms;
    }

}
