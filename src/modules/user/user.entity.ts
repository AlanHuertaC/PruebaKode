export class User {
    id: string;
    name: string;
    fatherLastName: string;
    motherLastName: string;
    phone: string;
    email: string;
    userName: string;
    password: string;

    constructor(
        id: string,
        name: string, 
        fatherLastName: string, 
        motherLastName: string, 
        phone: string, 
        email: string, 
        userName: string, 
        password: string
    ) {
        this.id = id;
        this.name = name;
        this.fatherLastName = fatherLastName;
        this.motherLastName = motherLastName;
        this.phone = phone;
        this.email = email;
        this.userName = userName;
        this.password = password;
    }
}