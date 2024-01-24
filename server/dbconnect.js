const mongoose =require('mongoose');

const DB=process.env.DATABASE;
mongoose.connect(DB,{

    //  use
 }).then(()=>{
    console.log(`connection sucesfully`);
}).catch((err)=>console.log(`no connection`));