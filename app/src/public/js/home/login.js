"use strict"

const UserId = document.querySelector("#id");
const UserPassword = document.querySelector("#password");
const loginBtn = document.querySelector("button");


loginBtn.addEventListener("click",()=>{

    //req 오브젝트 만들기 
    const req ={
        id : UserId.value,
        password : UserPassword.value
    };
   console.log(req);
});

