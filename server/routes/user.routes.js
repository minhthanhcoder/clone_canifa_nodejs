const express = require("express")
const database = require("../connection/connectMysql");
const route = express.Router();


// get all user data
route.get("/",(req,res)=> {
   const queryString = "SELECT * FROM users";
   database.query(queryString, (err, result)=> {
    if (err) {
        return res.status(500).json({
            status: 500,
            message: err
        })
    }else {
        return res.status(200).json({
            status: 200,
            data: result
        })
    }
   })
})

// GET USER BY USER ID
route.get("/:id", (req,res)=> {
    const id = req.params.id;
    const queryString = "SELECT * FROM users WHERE UserId =? "
    database.query(queryString, id, (err, result)=> {
        if (err){
            return res.status(500).json({
                status:500,
                message: err
            })
        }
    })
})

module.exports = route;