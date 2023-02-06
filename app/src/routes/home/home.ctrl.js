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
    register :(req,res)=>{
        res.render("./home/register");
    }
};

const process ={
    login : async (req,res)=>{

        const user = new User(req.body);
        const response = await user.login();
        return res.json(response); //클라이언트에게 던져 주는 것


    },

    register : (req, res)=>{
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
}



//모듈을 외부로 사용 할 수 있게끔 한다.
module.exports={
output,
process,
};