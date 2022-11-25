const express = require('express');
const port = 4444;
const app = express();
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop'); 
// console.log(app);
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found.</h1>');
})

app.listen(port);