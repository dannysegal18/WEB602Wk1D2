var express = require('express');
var app = express();

app.get('/bookings/:bookingId', function(req, res){
    res.send(req.params);
});

//For invalid routes


app.listen(3000);
