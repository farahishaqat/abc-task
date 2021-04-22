const express =require('express');
const bodyParser=require('body-parser')
const cors= require('cors')

const app = express();

const mysql =require('mysql');

const db=mysql.createPool({
    host:'us-cdbr-east-03.cleardb.com',
    user:'b122385535251b',
    password:'eea18bb3',
    database:'heroku_5bcb5d7d38aaa3e'
})

// app.get("/",(req,res)=>{

//     const sqlInsert ="INSERT INTO complaints (complaintId,complaintDescription,user_Id,complaintStatus) VALUES('11','so mad about the customer service','234','resolved')"
// db.query(sqlInsert,(err,result)=>{
//     res.send("hello farah")
// })
// });
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

//post complaints to the database
app.post("/api/insert",(req,res)=>{
    
    const complaintId=req.body.complaintId
    const complaintDescription=req.body.complaintDescription
    const user_Id=req.body.user_Id
    const complaintStatus=req.body.complaintStatus
    
    const sqlInsert="INSERT INTO complaints (complaintId,complaintDescription,user_Id,complaintStatus) VALUES(?,?,?,?)"
    db.query(sqlInsert,[complaintId,complaintDescription,user_Id,complaintStatus],(err,result)=>{
// console.log(result)
    })
});


//get all complaints from Database

app.get("/api/get",(req,res)=>{
   
    const sqlSelect ="SELECT * FROM complaints";
    db.query(sqlSelect,(err,result)=>{
// console.log(result)
res.send(result)
    })
})



app.listen(3001,()=>{
    console.log("running on port 3001")
})
