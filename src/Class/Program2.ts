//Inheritance

class User {
    name: string;
    email: string;
    age: number;

    constructor(name: string, email: string, age: number) {

        this.name = name;
        this.email = email;
        this.age = age;
    }
}

class AdminUser extends User {
    isAdmin: boolean = true;
    usersReporting: number;

    constructor(name: string, email: string, age: number, usersReporting: number) {
        //super keyword
        super(name, email, age);
        this.usersReporting = usersReporting;
    }
}

const user: User = new User("John", "john234#gmail.com", 29);

const adminUser: AdminUser = new AdminUser("Mark", "mark@email.com", 22, 5);

console.log(user);

console.log(adminUser);

