const app = require("express")();
app.use('/', (req,res)=>{
    return res.send("Active me");
})
app.listen(3000,()=>{
    console.log('listening');
})