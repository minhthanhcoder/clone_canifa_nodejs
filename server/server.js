const express = require("express");
const server = express();
const productRoute = require("./routes/product.routes")
const cartRoute = require("./routes/cart.routes")
const userRoute = require("./routes/user.routes")
const database = require("./connection/connectMysql")
const cors = require("cors")


server.use(cors())
server.use("/api/v1/products", productRoute)
server.use("/api/v1/user", userRoute)
server.use("/api/v1/cart", cartRoute)


server.listen(6600,()=> {
    console.log("http://localhost:6600");
})