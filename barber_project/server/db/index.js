const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bosrialaeddin:root@cluster0.qujmxkv.mongodb.net/?retryWrites=true&w=majority',
 { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database connection ');

  // You can perform database operations here
});
