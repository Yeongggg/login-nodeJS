//모듈화
"use strict"
const PORT = 3000;

const app = require("../app");

app.listen(PORT, () => {
    console.log("서버 가동중");
});

