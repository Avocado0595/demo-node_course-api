const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;
const host = '0.0.0.0';
app.use(cors());
app.get('/', (req, res) => {
  res.send({
    "course":
    ["HTML", "CSS", "JAVASCRIPT"]
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://${host}:${port}`)
})