const express=require('express');
const app=express();
const port=8080

app.get('/assistant/greet/', (req,res)=>{
    const name=req.query.name
    const date=new Date().getDay()
    const dayMessage=[
        "Have a wonderful day!",
        "Happy Monday! Start the week with energy!",
        "Have a wonderful day!",
        "Have a wonderful day!",
        "Have a wonderful day!",
        "It's a Friday! The weekend is near!",
        "Have a wonderful day!"
    ]

    res.send({
        "welcomeMessage":`Hello ${name}! Welcome to out assistant app`,
        "dayMessage":dayMessage[date]
    })
})

app.listen(port,()=>{
    console.log(`Server is running in ${port}`)
})