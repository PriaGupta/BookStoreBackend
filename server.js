const express= require("express");
const app= express();
const cors= require("cors");
require("dotenv").config();
require("./connection/db");
const User = require("./routes/userRoutes");
const Books = require("./routes/bookRoutes");
const Favourites= require("./routes/favouriteRoutes");
const Cart= require("./routes/cartRoutes");
const Order= require("./routes/orderRoutes");
app.use(cors());
app.use(express.json());
//routes 
app.use("/api",User);
app.use("/api",Books);
app.use("/api",Favourites );
app.use("/api",Cart);
app.use("/api",Order);
//port
app.listen(process.env.PORT,()=>{
    console.log(`server started at port ${process.env.PORT}`);
});