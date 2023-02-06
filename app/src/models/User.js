"use strict"

const  response  = require("../../app");
const UserStorage = require("./UserStorage"); //require() 과 module.exports
//nodeJs 에서는 require을 통해 외부 모듈을 가져올 수 있다. 

class User{ 

    //constructor 매서드는 클래스의 인스턴스 객체를 생성하고 초기화하는 매서드
    constructor(body){
        this.body = body;

    }
     async login(){
        const client = this.body;
        const {id,password} =  await UserStorage.getUserInfo(client.id); //userstorage 에 접근해 id 와 password 를 가져옴 , 비동기적으로 실행 , 테이블을 읽어 온 후 실행 되어야하기 때문에 

        if(id){
            if(id == client.id&& password == client.password){
                return {sucess : true};
            }
            return {sucess: false, msg:"비밀번호가 일치 하지 않습니다."};
        }
        return {sucess : false , msg:"존재 하지 않는 아이디 입니다."};
       
    }

    async register(){
        const client = this.body;
        try{
        const response = await UserStorage.save(client);
        return response;
    }
        catch(err){
            return {sucess : false, msg : err};
        }
    }
}

module.exports=User;
