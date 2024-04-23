// file을 읽어 오는 모듈
const fs = require("fs");

const data = fs.readFileSync("./database/string.txt", "utf-8");
console.log(data);
