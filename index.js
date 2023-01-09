const app = require("express")();
app.use('/', (req,res)=>{
    return res.send("Active");
})
app.listen(3000,()=>{
    console.log('listening');
})