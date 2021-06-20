//Node js Test 
console.log('my first app express with node js')
//import express 
const express=require('express')
// app is an express instance : associate express methods to a variable
const app=express();
// my global middleware 
const day= new Date().getDay();
const hours=new Date().getHours();
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
app.use((req,res,next)=>{
    console.log("A new request received at "+ days[day] +" "+ hours +" H" );
(day === 0 || day === 6) && ( 9<= hours <= 17) ? // day[0-6] // hours[0-23]
res.status(404).send('<h1>The web application is only available during working hours (Monday to Friday,  from 9 to 17)</h1>')
:next();   // to the next middelware! 
})
//rendering static html files ( public: folder that contains our html files and take the index.html as first rendering page )
app.use(express.static('public'));
//rendering css style 
app.use('/styleSheets',express.static('styleSheets'));
// create the port variable
const port=5000
//listen to the port
app.listen(port,(err)=>{
     err? console.log(err) : console.log('server is running on port 5000')
})