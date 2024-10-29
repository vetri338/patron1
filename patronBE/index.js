const express = require('express');

const {connection} = require("./config/db");

const cors = require("cors");

const app = express();

require("dotenv").config();

const {userRouter} = require("./Routes/user.route");

let PORT = process.env.PORT || 8500;

app.use(cors());
app.use(express.json());

// require("dotenv").config();
// let PORT = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    res.send("Hey people, THERE YOU WILL FIND ALL THE ROUTES FOR OUR WEBSITE. /auth/signup for NewUser, /auth/login for OldUser");
});

app.use("/auth",userRouter)

app.listen(PORT,async ()=>{
    try{
        await connection;
        console.log(`Your mongo DataBase is Connected`);
    }catch(err){
        console.log(err)
    }
    console.log(`Listening on port ${PORT}`);
})