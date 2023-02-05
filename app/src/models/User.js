"use strict"

const UserStorage = require("./UserStorage"); //require() 과 module.exports
//nodeJs 에서는 require을 통해 외부 모듈을 가져올 수 있다. 

class User{ 

    //constructor 매서드는 클래스의 인스턴스 객체를 생성하고 초기화하는 매서드
    constructor(body){
        this.body = body;

    }
    login(){
        const body = this.body;
        const {id,password} = UserStorage.getUserInfo(body.id); //userstorage 에 접근해 id 와 password 를 가져옴

        if(id){
            if(id == body.id&& password == body.password){
                return {sucess : true};
            }
            return {sucess: false, msg:"비밀번호가 일치 하지 않습니다."};
        }
        return {sucess : false , msg:"존재 하지 않는 아이디 입니다."};
       
    }
}

module.exports=User;
