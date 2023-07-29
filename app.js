const express = require("express");
const pg = require("pg");
const exphbs = require("express-handlebars");
const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const path = require("path");
const Gig = require("./model/modelgig")

const app = express();

app.use(express.urlencoded({extended:false}));

const PORT = process.env.port || 3000 ;

const db = require("./model/database");

app.use(express.static(path.join(__dirname  + "/public")));

app.engine("handlebars" , exphbs.engine({defaultLaout : "main",handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set("view engine" , "handlebars")

app.get('/', (req, res) => res.render('index', { layout: 'landing' }));


db.sequelize.sync({ force: false })
  .then(() => {
    console.log("db is synced");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/" , (req, res) =>{
   res.render("index")
   
});

app.use("/gigs",require("./routes/gigs"));



app.listen(PORT , ()=>{
    console.log("Server connected successfully on port 3000")
});