"use strict"

const UserId = document.querySelector("#id");
const UserName = document.querySelector("#name");
const UserPassword = document.querySelector("#password");
const UserConfirmPassword = document.querySelector("#confirm-password");
const registerBtn = document.querySelector("#button");


registerBtn.addEventListener("click",()=>{

    //req 오브젝트 만들기 
    const req ={
        id : UserId.value,
        name : UserName.value,
        password : UserPassword.value,
        confirmPassword: UserConfirmPassword.value,
    };
   
    fetch("/register",{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req) // JSON 형태의 req를 /register 경로로 보냄.
        
    })
    .then((res)=>res.json())
      .then((res)=>{
            if(res.sucess){
                location.href ="/login"; //로그인에 성공 했을 시 
            }else{
                alert(res.msg);
            }
      })
      .catch((err) => {
        console.error(("회원가입 중 에러 발생"));
      });
    }
)



    



