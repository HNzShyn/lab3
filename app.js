//Bước 1: Khai báo http modul
const http = require("http");
//Note: Muốn deploy lên hosting(Heroku) thì cần phải set port với process.env.PORT || 3000.
//Bước 2: Khai báo port của server
const port = process.env.PORT || 3000;
//Bước 3: Tạo web server, setheader + code
//Request: client -> server
//Response: server -> client
const app  = http.createServer((req, res) =>{
    res.statusCode = 200;   //HTTP_OK
    res.setHeader("Content-Type", "text/html");
    res.end("Hello Word");
});
//Bước 4: Chạy web bằng cách listen port
app.listen(port);


