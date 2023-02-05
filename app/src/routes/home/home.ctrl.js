"use strict"

const User = require("../../models/User");

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

        const user = new User(req.body);
        const response = user.login();
        return res.json(response);


    }
}



//모듈을 외부로 사용 할 수 있게끔 한다.
module.exports={
output,
process
};