const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

const mysql = require("mysql");

const db = mysql.createPool({
  host: "us-cdbr-east-03.cleardb.com",
  user: "b122385535251b",
  password: "eea18bb3",
  database: "heroku_5bcb5d7d38aaa3e",
});

db.query("select 1 + 1", (err, rows) => {
  if (err) throw err;
  console.log(" database Connected! , hello");
});

// app.get("/",(req,res)=>{
//     const sqlInsert ="INSERT INTO complaints (complaintId,complaintDescription,user_Id,complaintStatus) VALUES('11','so mad about the customer service','234','resolved')"
// db.query(sqlInsert,(err,result)=>{
//     res.send("hello farah")
// })
// });
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

//post complaints to the database
app.post("/api/insert", (req, res) => {
  const complaintId = req.body.complaintId;
  const complaintDescription = req.body.complaintDescription;
  const user_Id = req.body.user_Id;
  const complaintStatus = req.body.complaintStatus;

  const sqlInsert =
    "INSERT INTO complaints (complaintId,complaintDescription,user_Id,complaintStatus) VALUES(?,?,?,?)";
  db.query(
    sqlInsert,
    [complaintId, complaintDescription, user_Id, complaintStatus],
    (err, result) => {
      // console.log(result)
    }
  );
});

//get all complaints from Database

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM complaints";
  db.query(sqlSelect, (err, result) => {
    // console.log(result)
    res.send(result);
  });
});

//delete complaint
app.delete("/api/delete/:complaintId", (req, res) => {
  const complaintId = req.params.complaintId;
  const sqlDelete = "DELETE FROM complaints WHERE complaintId=?";
  db.query(sqlDelete, complaintId, (err, result) => {
    if (err) console.log(err);
  });
});

//update complaint
app.put("/api/update", (req, res) => {
  const complaintId = req.body.complaintId;
  const complaintDescription = req.body.complaintDescription;
  const user_Id = req.body.user_Id;
  const complaintStatus = req.body.complaintStatus;

  const sqlUpdate =
    "UPDATE complaints SET complaintDescription=? WHERE complaintId=? user_Id=? complaintStatus=?)";
  db.query(
    sqlUpdate,
    [complaintId, complaintDescription, user_Id, complaintStatus],
    (err, result) => {
      if (err) console.log(err);
    }
  );
});

//USERSSSS
//post username and pass (register/Signup)
app.post("/signup", (req, res) => {
  const userName = req.body.userName;
  const userPassword = req.body.userPassword;

  bcrypt.hash(req.body.userPassword, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO users(userName,userPassword) VALUES (?,?)",
      [userName, hash],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

//login check of the user exists

app.post("/login", (req, res) => {
  const userName = req.body.userName;
  const userPassword = req.body.userPassword;

  db.query(
    "SELECT * FROM users WHERE username = ?;",
    userName,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(
          userPassword,
          result[0].userPassword,
          (error, response) => {
            if (response) {
              req.session.user = result;
              console.log(req.session.user);
              res.send(result);
            } else {
              res.send({ message: "Wrong username/password combination!" });
            }
          }
        );
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
