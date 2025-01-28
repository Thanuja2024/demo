let users = ["Sanju","pranu","navi"];
users.map((user,i)=>{
    console.log(user ,i);
})

let x = users.map((users,i)=>{
    return users;
});
console.log(x);

/*let x= users.forEach((users,i)=>{
    return user;

});
console.log(x);*/

let userDetails = {
    name : "Akshay",
    age : 22,
    city : "HYD",
    address:{
        city : "HYD",
        PinCode : 123

    }
};
console.log(userDetails)
console.log(userDetails.name)
console.log(userDetails.address.city)

 let p1 = new Promise((resolve , reject)=>{});
 console.log(p1);

 let p2 = new Promise((resolve , reject)=>{
    resolve("Sucess");

 });
 console.log(p2);
 p2.then((res)=>{
    console.log(res);

 })  .catch(err=>console.log(err))
 .finally(()=>console.log("final"))
