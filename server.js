var express = require('express');
var multer = require('multer');
const PORT = process.env.PORT || 3000;

var app = express()
app.use(express.static('public'));

app.post('/getdata', multer({dest: './data/'}).any(), (req, res) => {
  if (req.files)
    res.send(JSON.stringify({size: req.files[0].size}));
  else
    res.sendStatus(400);
  }
);

app.listen(PORT, function() {
  console.log('Server is listening on port 3000!')
});
