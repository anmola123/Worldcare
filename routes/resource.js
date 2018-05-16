var centers = require("../centers.json");

exports.view = function(req, res) {
  res.render('resource', centers);
};
