
const path = require('path');

const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(express.urlencoded({ extended: true }));

app.use('/admin', adminRoutes); // router object being exported
app.use(shopRoutes);

app.use((req, res, next) => {
 res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
}); 


app.listen(3000); 
