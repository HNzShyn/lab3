//Bước 1: Khai báo http modul
const { rmSync } = require("fs");
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
    res.write("<h1>Hello Everyone!!</h1>");
    res.write("<img src = 'https://img.freepik.com/free-vector/space-background-with-landscape-planet_107791-797.jpg?size=626&ext=jpg&ga=GA1.2.1997401562.1664003848'>")
    res.write("<h2>I am learning NodeJS</h2>");
    res.write("<h3>My web page has been deployed to Heroku successfully!!!!</h3>")
    res.end();
});
//Bước 4: Chạy web bằng cách listen port
app.listen(port);


