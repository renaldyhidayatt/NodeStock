// Stock Market Portofolio
const express = require('express')
const app = express()
const exphbs  = require('express-handlebars');
const path = require('path');
const request = require('request');
const PORT = process.env.PORT || 3000;


// Api pk_82871c3fd6854fc68baf6a8b45cad5cd
function call_api(finishedAPI){
    request('https://cloud.iexapis.com/stable/stock/fb/quote?token=pk_82871c3fd6854fc68baf6a8b45cad5cd', { json: true}, (err,res,body) => {
        if(err){return console.log(err);}
        if (res.statusCode === 200){
            finishedAPI(body);
        };
    });
}



// set Handlebars Middleware
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = "Hello There, this is other Stuff";

// set Handlebars Route
app.get('/', function (req, res) {
    call_api(function(doneAPI){
        res.render('home', {
            stock: doneAPI
        });
    });
});

app.get('/about.html', function (req, res) {
    res.render('about');
});

app.use(express.static(path.join(__dirname + '/public')));
app.listen(PORT, () => console.log(`SERVER Listening on Port ` + PORT));
