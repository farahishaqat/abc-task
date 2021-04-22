const express =require('express');
const app = express();

//-------------
const mysql =require('mysql');

/*from clear DB
// username b122385535251b
// password eea18bb3
// host us-cdbr-east-03.cleardb.com
// database heroku_5bcb5d7d38aaa3e
// reconnect=true*/

const db=mysql.createPool({
    host:'us-cdbr-east-03.cleardb.com',
    user:'b122385535251b',
    password:'eea18bb3',
    database:'heroku_5bcb5d7d38aaa3e'
})





//-------------
app.get("/",(req,res)=>{

    const sqlInsert ="INSERT INTO complaints (complaintId,complaintDescription,user_Id,complaintStatus) VALUES('11','so mad about the customer service','234','resolved')"
db.query(sqlInsert,(err,result)=>{
    res.send("hello farah")
})
});


app.listen(3001,()=>{
    console.log("running on port 3001")
})
