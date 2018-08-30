var db = require("../models");

<<<<<<< HEAD
module.exports = function (app) {
  //GET ALL yay
  app.get("/api/all", function (req, res) {
    db.Names.findAll({}).then(function (dbName) {
      res.json(dbName);
=======
module.exports = function(app) {
<<<<<<< HEAD
  // Get all examples
  app.get("/api/all", function(req, res) {
    db.Names.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
>>>>>>> master
=======
  //GET ALL yay
  app.get("/api/all", function(req, res) {  
    db.Names.findAll({}).then(function(dbName) {
      res.json(dbName);
>>>>>>> 5ca624a607fe7821d7cd91750c2147f99ea767f2
    });
  });
  //FILTER BY GENDER
  app.get("/api/all/:gender", function(req, res) {  
    db.Names.findAll({
      where: {gender: req.params.gender.toUpperCase()}
    }).then(function(dbName) {
      res.json(dbName);
    });
  });

  //FILTER BY FIRST LETTER
  app.get("/api/firstLetter/:letter", function(req, res) {
    db.Names.findAll({
      where : {
        name: {
          $like:  req.params.letter + "%"}}
    }).then(function(dbName) {
      res.json(dbName);
    });
  });
  //SORT BY POPULARITY
  app.get("/api/sortCount", function(req, res) {
    db.Names.findAll({
      order: [["count", "DESC"]]
    }).then(function(dbName) {
      res.json(dbName);
    });
  });
  //FILTER BY GENDER AND SORT BY POPULARITY
  app.get("/api/sortCount/:gender", function(req, res) {
    db.Names.findAll({
      where: {gender: req.params.gender.toUpperCase()},
      order: [["count", "DESC"]]
    }).then(function(dbName) {
      res.json(dbName);
    });
  });
  //FILTER BY YEAR AND SORT BY POPULARITY
  app.get("/api/year/:year", function(req, res) {
    db.Names.findAll({
      where: {year: req.params.year},
      order: [["count", "DESC"]]
    }).then(function(dbName) {
      res.json(dbName);
    });
  });


  
  //gender, popularity, year

  //FILTER BY GENDER
  app.get("/api/all/:gender", function (req, res) {
    db.Names.findAll({
      where: { gender: req.params.gender.toUpperCase() }
    }).then(function (dbName) {
      res.json(dbName);
    });
  });

  //FILTER BY FIRST LETTER
  app.get("/api/firstLetter/:letter", function (req, res) {
    db.Names.findAll({
      where: {
        name: {
          $like: req.params.letter + "%"
        }
      }
    }).then(function (dbName) {
      res.json(dbName);
    });
  });

  //SORT BY POPULARITY
  app.get("/api/sortCount", function (req, res) {
    db.Names.findAll({
      order: [["count", "DESC"]]
    }).then(function (dbName) {
      res.json(dbName);
    });
  });

  //FILTER BY GENDER AND SORT BY POPULARITY
  app.get("/api/sortCount/:gender", function (req, res) {
    db.Names.findAll({
      where: { gender: req.params.gender.toUpperCase() },
      order: [["count", "DESC"]]
    }).then(function (dbName) {
      res.json(dbName);
    });
  });
  
  //FILTER BY YEAR AND SORT BY POPULARITY
  app.get("/api/year/:year", function (req, res) {
    db.Names.findAll({
      where: { year: req.params.year },
      order: [["count", "DESC"]]
    }).then(function (dbName) {
      res.json(dbName);
    });
  });



  //gender, popularity, year

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
};