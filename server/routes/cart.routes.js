const express = require("express")
const database = require("../connection/connectMysql")
const route = express.Router();

route.post("/",(req, res)=> {
    const {UserId, ProductId, Quantity, Size} = req.body
    console.log(UserId, ProductId, Quantity, Size);
})

module.exports = route