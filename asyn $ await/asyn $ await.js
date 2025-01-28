// let p = new Promise((resolve , reject)=>{
//     setTimeout(()=>{
//         resolve("success")

//     },4000);
// });

// async function demo(){
//     console.log("start");
//     let x = await p;
//     console.log(x);
//     console.log("end");

// }
// demo();

async function fetchUsers(){
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await  response.json();
    console.log(data);

}
fetchUsers()