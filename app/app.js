"use strict"

//express 모듈사용 방식이 http 방식 보다 코드가 훨씬 더 간결하다는 것을 알 수 있다.
/*
const http = require("http");
const app = http.createServer((req,res)=>{

    res.writeHead(200,{ "Content-Type": "text/html; charset=utf-8"});
    if(req.url === "/"){
        res.end("여기는 루트 입니다.");
    }else if(req.url === "/login"){
        res.end("여기는 로그인 화면 입니다.");
    }
});c

app.listen(3001, ()=>{
    console.log("http로 가동된 서버입니다.");
}) //http 방식의 경우, 루트 경로를 설정해주지 않으면 서버는 열려있어도 계속 돌아간다.
*/

//모듈
const express = require("express"); // 익스 프레스 모듈을 받는다.
const app = express();

//라우팅 
const home = require("./src/routes/home"); //src폴더에 있는 routes에 home 에서 자바 스크립트를 읽어와 줘

//앱 세팅 

app.set("views", "./src/views");
app.set("view engine", "ejs"); //ejs 는 html 이랑 비슷하다., ejs 를 사용하기 위해 npm에서 모듈을 다운로드 해줘야 한다.
app.use(express.static(`${__dirname}/src/public`)); //__dirname -> 현재 app.js 위치를 기준으로 src폴더 에 있는 것을 public 으로 정적 경로로 사용하겠다.


app.use("/", home); //미들웨어를 등록하는 메서드

module.exports = app; //www.js 에서 받을 수 있게 모듈을 던짐.

//pwd -> 현재 파일의 경로.


//npm 을 이용해서 npm express -s (package.json을 관리 하기 위해 -s )

// app.get() 함수가 없으면= root 경로를 찾지 못한다.


