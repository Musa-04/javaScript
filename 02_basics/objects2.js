// const tinderUser=new Object()
const tinderUser={}
 tinderUser.id="123abc"
 tinderUser.name="samay"
 tinderUser.isLoggedIn=false
//  console.log(tinderUser);
 
const regularUser={
    email:"sum@gamil.com",
    fullname:{
        userfullname:{
            firstname:"musa",
            lastname:"shaikh"

        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const object1={1:"a",2:"b"}
const object2={3:"a",4:"b"}
const object4={5:"a",6:"b"}

// const object3={object1,object2}
// const object3=Object.assign(object1,object2,object4)
const object3={...object1,...object2}
console.log(object3);

const users=[
    {
        id:1,
        email:"musa@gmail.com"
    },
     {
        id:1,
        email:"musa@gmail.com"
    }, {
        id:1,
        email:"musa@gmail.com"
    }, {
        id:1,
        email:"musa@gmail.com"
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));




