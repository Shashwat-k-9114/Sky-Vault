const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").configDotenv();


//middleware
app.use(express.json());

// connect MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});

// route
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend!"})
})