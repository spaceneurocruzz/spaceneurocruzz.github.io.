const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello, My Server!");
});

app.get("/getData", (req, res) => {
  let reqVal = Number(req.query.number, 10);
  if (!reqVal || reqVal === "" || reqVal === undefined) {
    res.send("Lack of Parameter");
  } else if (isNaN(reqVal)) {
    res.send("Wrong Parameter");
  } else if (reqVal < 0) {
    res.send("Positive number only");
  } else {
    res.send(`${((reqVal + 1) * reqVal) / 2}`);
  }
});

app.get("/myName", (req, res) => {
  let userCookie = req.cookies.name;
  let view;

  if (userCookie) {
    view = `<h3>Hello! ${userCookie}</h3>
              <input type="button" value="Delete Cookie" style="background-color:red;font-size: 16px;" onclick="location.href='/clearCookie'"/>`;
  } else {
    view = `<form method="get" action="/trackName">
              <input type="text" placeholder="Enter your name" id="input" name="name" style="font-size: 16px;"/>
              <input type="submit" style="background-color:rgb(243, 190, 45);font-size: 16px;"/>
              </form>`;
  }

  res.send(view);
});

app.get("/trackName", (req, res) => {
  res.cookie("name", req.query.name);
  res.redirect("/myName");
});

app.get("/clearCookie", (req, res) => {
  res.clearCookie("name");
  res.redirect("/myName");
});
