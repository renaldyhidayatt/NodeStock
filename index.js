// Stock Market Portofolio
const express = require('express')
const app = express()

//express-handlebar
const exphbs  = require('express-handlebars');

const path = require('path');
const PORT = process.env.PORT || 3000;

// set Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = "Hello There, this is other Stuff";

// set Handlebars Route
app.get('/', function (req, res) {
    res.render('home', {
        stuff: otherstuff
    });
});

app.use(express.static(path.join(__dirname + '/public')));
app.listen(PORT, () => console.log(`SERVER Listening on Port ` + PORT));
