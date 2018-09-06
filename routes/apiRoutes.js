var db = require("../models");
module.exports = function (app) {
  
  
  //Option1 RandomNameGenerator
  app.get("/api/gender/f", function(req, res) { //FEMALE
    db.Names.findAll({
      where : {
        gender: "F"}
    }).then(function(dbName) {
      res.send(dbName);
    });
  });
<<<<<<< HEAD
  app.get("/api/gender/m", function(req, res) { //MALE
=======

  app.get("/api/wild/:letter/:gender", function(req, res) {  
>>>>>>> 2825e37778c639336fa73c08ff7fac59d0548b5f
    db.Names.findAll({
      where : {
        gender: "M"}
    }).then(function(dbName) {
      res.send(dbName);
    });
  });
  app.get("/api/findall/", function(req, res) { //EITHER
    db.Names.findAll({}).then(function(dbName) {
      res.send(dbName);
    });
  });
  //END OPTION1

<<<<<<< HEAD
  //OPTION3
  //FILTER BY YEAR AND SORT BY POPULARITY
  app.get("/api/year/:year", function (req, res) {
=======
  //FILTER BY FIRST LETTER
  app.get("/api/firstLetter/:letter", function (req, res) {
>>>>>>> 2825e37778c639336fa73c08ff7fac59d0548b5f
    db.Names.findAll({
      where: { 
        year: {
          "$between": [req.params.year, (req.params.year + 9)]
        },
      },
      order: [["year", "DESC"]]
    }).then(function(dbName) {
      res.render("results", {dbName});
    });
  });
  //FILTER BY YEAR AND SORT BY POPULARITY AND GENDER
  app.get("/api/year/:year/:gender", function (req, res) {
    db.Names.findAll({
      where: { 
        gender: req.params.gender,
        year: {
          "$between": [req.params.year, (req.params.year + 9)]
        },
      },
      order: [["year", "DESC"]]
    }).then(function(dbName) {
      res.render("results", {dbName});
    });
  });
  
  
  
  
  //gender, popularity, year
  // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id changee
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });

  //UNUSED
  // app.get("/api/all", function(req, res) {  
  //   db.Names.findAll({}).then(function(dbName) {
  //     res.render("results", {dbName});
  //   });
  // });
  // //FILTER BY GENDER
  // app.get("/api/all/:gender", function (req, res) {
  //   db.Names.findAll({
  //     where: {gender: req.params.gender.toUpperCase()}
  //   }).then(function(dbName) {
  //     res.render("results", {dbName});
  //   });
  // });

  // app.get("/api/firstLetter/:letter", function (req, res) {
  //   db.Names.findAll({
  //     where: {
  //       name: {
  //         $like:  req.params.letter + "%"}}
  //   }).then(function(dbName) {
  //     res.render("results", {dbName});

  //   });
  // });
  // //SORT BY POPULARITY
  // app.get("/api/sortCount", function (req, res) {
  //   db.Names.findAll({
  //     order: [["count", "DESC"]]
  //   }).then(function(dbName) {
  //     res.render("results", {dbName});
  //   });
  // });
  // //FILTER BY GENDER AND SORT BY POPULARITY
  // app.get("/api/sortCount/:gender", function (req, res) {
  //   db.Names.findAll({
  //     where: { gender: req.params.gender.toUpperCase() },
  //     order: [["count", "DESC"]]
  //   }).then(function(dbName) {
  //     res.render("results", {dbName});
  //   });
  // });
<<<<<<< HEAD
};
=======
  });
};
>>>>>>> 2825e37778c639336fa73c08ff7fac59d0548b5f
