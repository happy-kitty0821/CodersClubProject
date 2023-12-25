const express = require("express"); //import expresss function
const app = express(); // initialize express
const route = express.Router();
const fs = require("fs")

function fetchData(){
  const data = fs.readFileSync("./data/book.json") 
  console.log(data)
  const dataJson = JSON.parse(data)
  console.log(dataJson)
  return dataJson
}
app.use(express.static("public"))
// setting viewengine to view ejs file
app.set("view engine", "ejs");

/////////////////////////////
// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.get("/home", (req, res) => {
  const books = fetchData()
  res.render("pages/index", {books : books});
  console.log("")
});



// uploading to the website with port 80
app.listen(8080, () => {
  console.log("##-- Connected to the port 8080 --##");
});
