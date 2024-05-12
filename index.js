const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require("./routes/StudentRoutes");

const dbUri ='mongodb+srv://sahin123:733125@cluster0.h1gohnx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/StudentsManagement'

const app = express();

app.use(cors());
app.use(express.json());


app.use("/students", router);

mongoose.connect(dbUri).then(()=>{
    console.log('Database connected');
}).then(()=>{
    app.listen(5000, ()=>{
        console.log('server is running');
    });
}).catch((err)=>{console.log(err)});

