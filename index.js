const express = require('express');
const app = express();

app.get('/', (req, res)=>{
  res.send("<h1>Hello World.</h1>");
  console.log(req.headers['x-forwarded-for'] || req.connection.remoteAddress);
})
                                
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});