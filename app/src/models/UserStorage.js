"use strict "
const fs = require("fs").promises; //테이블을 읽어오기 위해  

//데이터만 가진 모듈 만들기

class Userstorage{ //static =>  클래스 자체에서 접근 가능함. , 하지만 은닉 처리를 해줘야 함
    
    static #getUserInfo(data,id){
        const users =JSON.parse(data);
            const idx = users.id.indexOf(id); //들어온 id 에 해당하는 인덱스를 구함
            const usersKeys = Object.keys(users); // users에 대한 리스트를 만듦
            const userInfo = usersKeys.reduce((newUser,info) =>{
                newUser[info] = users[info][idx];
                return newUser;
            },{});
            return userInfo;
    } //은닉 함수를 최 상단에 표기

    static #getUsers(data,isAll, fields){
        const users = JSON.parse(data);
        if(isAll) return users;
        //Array.reduce() -> 베열의 각 요소를 순환 하며 callback 함수의 실행값을 누적하여 하나의 결과값을 리턴한다.
    const newUsers = fields.reduce((newUsers,field) =>{
        if(users.hasOwnProperty(field)){
            //users에 해당 하는 키값이 존재 한다면,
            newUsers[field] = users[field];
        }
        return newUsers;
    },{});

        return newUsers;
    }

   static getUsers(isAll,...fields) //...변수명 
   {

    return fs
    .readFile("./src/databases/users.json")
    .then((data) =>{
        return this.#getUsers(data, isAll, fields); //가독성을 위해 안의 함수 내용을 따로 빼서 표기
    })
    .catch(err => console.error); 

   
    
    }


    static getUserInfo(id){
       
        return fs
        .readFile("./src/databases/users.json")
        .then((data) =>{
            return this.#getUserInfo(data,id); //가독성을 위해 안의 함수 내용을 따로 빼서 표기
        })
        .catch(err => console.error); 

    }
    

    static async  save(userInfo){
        const users =  await this.getUsers(true); //모든 데이터를 가져온다.
        if(users.id.includes(userInfo.id)){   
            throw "이미 존재하는 정보입니다.";
        }
        users.id.push(userInfo.id); 
            users.name.push(userInfo.name); 
            users.password.push(userInfo.password); 
            
            fs.writeFile("./src/databases/users.json", JSON.stringify(users)); //데이터를 json 형태로
            return {sucess:true};

    }
}

//위처럼 데이터를 은닉 시킨후 ('#') 그 은닉된 데이터를 가져 올 수 있는  퍼블릭한 메서드를 만들어야 한다.

module.exports = Userstorage; 