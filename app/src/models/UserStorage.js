"use strict "


//데이터만 가진 모듈 만들기

class Userstorage{ //static =>  클래스 자체에서 접근 가능함. , 하지만 은닉 처리를 해줘야 함
    static #users ={
        id : ["aa","ac", "bd"],
        password:["11","12","1234"],
        name :["연규", "철수", "영희"],
    };

   static getUsers(...fields){
    const users = this.#users;
    const newUsers = fields.reduce((newUsers,field) =>{
        if(users.hasOwnProperty(field)){
            //users에 해당 하는 키값이 존재 한다면,
            newUsers[field] = users[field];
        }
        return newUsers;
    },{});

        return newUsers;
    }
    
}

//위처럼 데이터를 은닉 시킨후 ('#') 그 은닉된 데이터를 가져 올 수 있는  퍼블릭한 메서드를 만들어야 한다.

module.exports = Userstorage; 