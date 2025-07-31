class User{
    constructor(username){
        this.username = username;
    }logMe(){
        console.log(`User: ${this.username}`);
        
    }
     static createId(){
        return `123`
    }
}
const musa=new User('musa');
// console.log(musa.createId());


class Teacher extends User{
    constructor(username, subject){
        super(username);
        this.subject = subject;
    }
    }
const iphone=new Teacher('iphone', "i@phone.com");
console.log(iphone);

