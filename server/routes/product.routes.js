const express = require("express");
const database = require("../connection/connectMysql")
const route = express.Router();


route.get("/", (req, res)=> {
    const queryString = "SELECT * FROM products";
    database.query(queryString,(err, result)=> {
        if(err) {
            return res.status(500).json({
                status:500,
                message: err
            })
        }else {
            return res.status(200).json({
                status:200,
                data:result
            })
        }
    })
})

// get product and images by productID

route.get("/:id", (req, res)=> {
    const id = req.params.id;
    const queryString = "SELECT *FROM products INNER JOIN images ON products.ProductId = images.ProductId WHERE products.ProductId = ?"
    database.query(queryString, id, (err, result)=> {
        if(err) {
            return res.status(500).json({
                status:500,
                message: err
            })
        }else {
            return res.status(200).json({
                status:200,
                data:result
            })
        }
    })
})

module.exports = route;