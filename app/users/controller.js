var pets = { "pets": ['tobi', 'jane', 'loki'] };

exports.index = function(req, res) {
  switch (req.format) {
    case 'json':
      res.send(pets);
      break;
    default:
      res.render('index');
      break;
  }
};
