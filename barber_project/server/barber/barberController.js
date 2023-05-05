var Barber = require('./schema');;

exports.addOne = function (req, res) {
  Barber.create(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};
  
  exports.getAll = function (req, res) {
    Barber.find({})
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  };
  
  exports.getOne = async function (req, res) {
    try {
      const result = await Barber.findOne({ name: req.params.name });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  };
  
  exports.updateOne = async function (req, res) {
    try {
      const result = await Barber.updateOne({ name: req.params.name }, req.body);
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  };
  exports.deleteOne = function (req, res) {
    
    Barber.deleteOne({ name: req.params.name })
      .then(result => {
        res.json('delete');
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  };
  
  