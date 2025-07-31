// inheritance in js
class User{
    constructor(username) {
        this.username = username;
        
    }
    logMe(){
        console.log(`User: ${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username,email,password) {
        super(username);
        this.email = email;
        this.password = password;
        
    }
    addCourse(courseName){
        console.log(`Course ${courseName} added by ${this.username}`);
        
    }
}
const teacher = new Teacher("hitesh","teacher@gmail.com","12345");
teacher.addCourse("JavaScript Basics");

const tea=new User("hitesh");
tea.logMe();
console.log(teacher instanceof Teacher); // true
