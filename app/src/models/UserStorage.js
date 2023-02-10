"use strict "
const db = require("../config/db"); //테이블을 읽어오기 위해  

//데이터만 가진 모듈 만들기

class Userstorage { //static =>  클래스 자체에서 접근 가능함. , 하지만 은닉 처리를 해줘야 함


    static getUserInfo(id) {
        
        return new Promise ((resolve, reject) =>{
            const query = "SELECT * FROM users WHERE id =?;";
        db.query(query,[id],(err,data) =>{
            if(err) reject(err);
           resolve (data[0]);
         });
        });
    }

    static async save(userInfo) {
       
        return new Promise ((resolve, reject) =>{
            const query = "INSERT INTO users(id, name, password) VALUES(?,?,?);";
        db.query(query,
            [userInfo.id, userInfo.name, userInfo.password],(err) =>{
            if(err) reject(`${err}`);
           resolve ({sucess : true});
         });
        });
    }
}

//위처럼 데이터를 은닉 시킨후 ('#') 그 은닉된 데이터를 가져 올 수 있는  퍼블릭한 메서드를 만들어야 한다.

module.exports = Userstorage; 