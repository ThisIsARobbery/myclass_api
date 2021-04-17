const express = require('express');
const db = require('./db');
const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}));

db.sequelize.sync();


app.get('/', (req, res) => {
  return res.send('Hello!');
});

require('./routes/students.routes')(app);

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}.`)
});