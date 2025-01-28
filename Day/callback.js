function hof(a){
    return a();
}
let x = hof(function(){return "callback function"});
console.log(x);

let y = function(){return "callback function"};
console.log(y());

let users = ["ramu","ravi","Thanu"];
console.log(users);
users.map(function(users){console.log(users)});
