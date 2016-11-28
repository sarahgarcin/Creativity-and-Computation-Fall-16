var _ = require("underscore");
var url = require('url')
var fs = require('fs-extra');


module.exports = function(app,io,m){

  /**
  * routing event
  */
  app.get("/", getIndex);
  app.get("/print/:name", getPrint);

  /**
  * routing functions
  */

  // GET
  function getIndex(req, res) {
    res.render("index", {title : "I was here"});
  };

  function getPrint(req, res) {
    var name = req.param('name');
    res.render("print", {
      title : "I was here | Print",
      name : name,
      image : m.getImage(name),
    });
  };

};
