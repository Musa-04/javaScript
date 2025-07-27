const promisesOne =  new Promise(function(resolve,reject){
    //Do an async task
    // db calls,cryptograpgy,network calls.
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
        

    },1000)
 
})

promisesOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve()
        

    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promisesThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"musa",email:"hello@exmple.com"})

    },1000)
})
promisesThree.then(function(user){
    console.log(user);

})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"hello",password:"123546"})
        }else{
            reject('ERROR: Something went wrong')
        }

    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    

}).catch(function(error){
    console.log(error);
    
}).finally(()=>
    console.log("The Promise is either resolved or rejected")
    
)

const promiseFive=new Promise(function(resolve,reject){
     setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"javaScipt",password:"123546"})
        }else{
            reject('ERROR: js  went wrong')
        }

    },1000)


})
async function consumePromisefive() {
    try {
        const response=await promiseFive
    console.log(response);
    
    } catch (error) {
        console.log(error);
        
    }
    
}
consumePromisefive()

async function getAlluserd() {
  try {
     const response=await fetch('https://jsonplaceholder.typicode.com/users')
  const data= response.json()
  console.log(data);
  } catch (error) {
    console.log("E:",error);
    
    
  }
    
}
getAlluserd()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))