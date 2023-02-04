"use strict"

//컨트롤러 분리

const hello = (req,res)=>{
    //루트 경로로 들어올 경우, 이러한 기능들을 실행하겠다.
   res.render("./home/index");
};

const login = (req,res) =>{
    res.render("./home/login");

};


module.exports={
hello,
login
};