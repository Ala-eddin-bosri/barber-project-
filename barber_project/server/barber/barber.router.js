var barberRouter = require('express').Router();
var barberController = require('./barberController');

barberRouter.route('/barber')
.get(barberController.getAll)
.post(barberController.addOne);

barberRouter.route('/barber/:name')
.get(barberController.getOne)
.put(barberController.updateOne)
.delete(barberController.deleteOne);
module.exports = barberRouter;

