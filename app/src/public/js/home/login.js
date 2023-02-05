"use strict"

const UserId = document.querySelector("#id");
const UserPassword = document.querySelector("#password");
const loginBtn = document.querySelector("#loginBtn");


loginBtn.addEventListener("click",()=>{

    //req 오브젝트 만들기 
    const req ={
        id : UserId.value,
        password : UserPassword.value
    };
   
    fetch("/login",{
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req) // JSON 형태의 req를 /login 경로로 보냄.
        
    })
    .then((res)=>res.json())
      .then((res)=>{
            if(res.sucess){
                location.href ="/"; //로그인에 성공 했을 시 
            }else{
                alert(res.msg);
            }
      })
      .catch((err) => {
        console.error(("로그인 중 에러 발생"));
      });
    }
)



    



