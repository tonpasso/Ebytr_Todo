const mongoose = require('mongoose');

const app = require('./app');

mongoose.connect('mongodb://127.0.0.1:27017/todo-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('DB connection successful'));

const PORT = 3001;
app.listen(PORT, () => console.log("App running on port:", PORT));
