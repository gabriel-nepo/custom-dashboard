const express = require('express');
const mongoose = require('mongoose');
const routes = require('./app/controllers/routes');
const app = express();

const cors = require("cors");

mongoose.connect("mongodb+srv://admin:engmat7labs@cluster0.1i46d.mongodb.net/engmat?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

app.use(cors());
app.use(express.json());
app.use(routes);
//require('./controllers/authController')(app);

app.listen(process.env.PORT || 3000);


console.log("rodando")