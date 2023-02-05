"use strict"

const  Userstorage = require("../../models/UserStorage"); 

//컨트롤러 분리
const output ={
    hello : (req,res)=>{
        //루트 경로로 들어올 경우, 이러한 기능들을 실행하겠다.
       res.render("./home/index");
    },
    
    login : (req,res) =>{
        res.render("./home/login");
    
    },
};

const process ={
    login : (req,res)=>{
       const id = req.body.id;
       const password = req.body.password;


     const users = Userstorage.getUsers("id", "password");
       
       const response = {}; //오브젝트를 하나 만듦 

        if(users.id.includes(id)){   
         const idx = users.id.indexOf(id);
         if(users.password[idx] == password){
             response.sucess = true;
             return res.json(response);
         }
        }
        response.sucess =false;

        response.sucess =false;
        response.msg ="로그인에 실패 했습니다.";
        return res.json(response);
       
 
    }
}



//모듈을 외부로 사용 할 수 있게끔 한다.
module.exports={
output,
process
};