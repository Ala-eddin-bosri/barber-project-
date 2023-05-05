const mongoose = require('mongoose');
const Barber = require('../barber/schema.js');

const allbarber = require('../../myData/myData.json');

const insertAllbarber = function() {
  Barber.create(allbarber)
    .then(() => mongoose.disconnect());
};

insertAllbarber();
