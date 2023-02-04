"use strict"

const users ={
    id : ["aa","ac", "bd"],
    password:["11","12","1234"],
};

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
        
       if(users.id.includes(id)){
        const idx = users.id.indexOf(id);
        if(users.password[idx] == password){
            return res.json({
                sucess:true ,
            });
        }
       }
       return res.json({
        sucess:false,
        msg : "로그인에 실패 했어요.",
       });
    },
}



//모듈을 외부로 사용 할 수 있게끔 한다.
module.exports={
output,
process
};