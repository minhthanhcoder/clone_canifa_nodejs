const mySql = require("mysql2");

const connect = mySql.createConnection({
    host: "localhost",
    password: "123456",
    database: "canifa_shop",
    user: "root",
    port: 3306
})

connect.connect((err)=>{
    if(err) {
        console.log("kết nối thất bại", err);
    }else{
        console.log("conneced");
    }
})
module.exports = connect;