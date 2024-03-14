require("dotenv").config();
const express =  require("express");
const PORT = process.env.PORT;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// log all requests middleware
app.use((req,res, next)=>{
    console.log('Request method:',req.method);
    console.log('Request Url: ', req.url)
    next();
})

app.get('/', (req,res)=>{
    res.status(200).send('Backend Online.')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on host: http://localhost:${PORT}`)
})
