 let ele = document.getElementsByClassName("test");
 ele[0].style.backgroundColor= "dodgerblue";
//  console.log(ele);

// let x = [...ele];
// console.log(x,Array.isArray(x));
// x.map(element=>{
//     element.style.backgroundcolor = "tomato";
//     element.style.color = "white";
//     element.style.textTransform = "uppercase";
//  })

// let ele = document.querySelector("#demo");
// console.log(ele);
//  let ele = document.querySelector(".test");
//  console.log(ele);


// let color = document.querySelectorAll(".bgcolor");
// [...bgcolor].map(element=>{
//     element.addEventListener("mouseover",()=> {
//         element.style.backgroundColor = element.innerText;

//     });
//     element.addEventListener("mouseleave",()=>{
//         element.style.backgroundColor = "transparent";
//     })
// })

// let ele = document.createElement("h1");
// ele.innerText = "dynamic creation of html element";
// ele.setAttribute("id" , "demo")
// console.log(ele);

// document.body.appendChild(ele);

// let image = document.createElement("img");
// image.src="./3606208.jpg";
// console.log(image);

// document.body.appendChild(image)

// let mainEle = document.createElement("div");
// mainEle.setAtteibute("id","mainBlock");

// console.log(mainEle);

// let topEle = document.createElement("div");
// topEle.setAttribute("class", "topBlock");

// let image = document.createElement("img")
// image.src = "https://cdn.pixabay.com/photo/2017/01/19/12/05/cat-1992140_960_720.jpg";
// image.Width="300";
// image.height="300";
// image.style.objectFit="cover"

// let bottomele = document.createElement("div");
// bottomele.setAttribute("class","bottomBlock");

// let h1 = document.createElement("h1");
// h1.innerText = "CAT";

// let btn = document.createElement("button");
// btn.innerText="View More";

// bottomele.appendChild(h1);
// bottomele.appendChild(btn);
// topEle.appendChild(image);

// document.body.appendChild(mainEle)



form=document.querySelector("form");
let username=document.getElementById("uName");
let password=document.getElementById("uPass");
let check=document.getElementById("check");
let show=document.getElementById("show");
let gender=document.getElementsByName("gender");
// console.log(gender)


//hiding and showing password
check.addEventListener("click", (event)=>{
    if(event.target.checked==true){
        password.setAttribute("type", "text");
        show.innerText="hide password";
    
    }
    else{
        password.setAttribute("type", "password");
        show.innerText="show password";
    }
})
form.addEventListener("submit", event=>{
    event.preventDefault();
    // console.log(username.value)
    let un=username.value;
    let up=password.value;
    let gen="";

    for(let i=0; i<=gender.length-1;i++){
        // console.log(gender[i].value)
    //    console.log(gender[i].checked)    
        if(gender[i].checked==true){
            // console.log(gender[i].value)
            gen+=gender[i].value;
        }    
}
let userDetails={
    username:un,
    password:up,
    gender:gen
}

sessionStorage.setItem("userData", JSON.stringify(userDetails))
console.log(userDetails);

})