const express = require('express');
const app = express();

app.get('/', (req, res)=>{
  res.send("<h1>Hello World.</h1>");
  console.log(getClientIp(req));
})
                                
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});

// snippet taken from http://catapulty.tumblr.com/post/8303749793/heroku-and-node-js-how-to-get-the-client-ip-address
function getClientIp(req) {
  var ipAddress;
  // The request may be forwarded from local web server.
  var forwardedIpsStr = req.header('x-forwarded-for'); 
  if (forwardedIpsStr) {
    // 'x-forwarded-for' header may return multiple IP addresses in
    // the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
    // the first one
    var forwardedIps = forwardedIpsStr.split(',');
    ipAddress = forwardedIps[0];
  }
  if (!ipAddress) {
    // If request was not forwarded
    ipAddress = req.connection.remoteAddress;
  }
  return ipAddress;
};
