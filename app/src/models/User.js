"use strict"

const UserStorage = require("./UserStorage");

class User{
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
