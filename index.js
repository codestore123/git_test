const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()

app.use(express.json())


app.get("/" , (req,res)=>{
    res.status(200).send("Welcome")
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});