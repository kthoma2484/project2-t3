var db = require("../models");
module.exports = function (app) {
  //GET ALL yay
  app.get("/api/all", function (req, res) {
    db.Names.findAll({}).then(function (dbName) {
      res.render("results", {
        dbName
      });
    });
  });
  //FILTER BY GENDER
  app.get("/api/all/:gender", function (req, res) {
    db.Names.findAll({
      where: {
        gender: req.params.gender.toUpperCase()
      }
    }).then(function (dbName) {
      res.render("results", {
        dbName
      });
    });
  });

  ////// Option 1 //////
  app.get("/api/gender/f", function (req, res) {
    db.Names.findAll({
      where: {
        gender: "F"
      }
    }).then(function (dbName) {
      res.json(dbName);
    });
  });

  app.get("/api/gender/m", function (req, res) {
    db.Names.findAll({
      where: {
        gender: "M"
      }
    }).then(function (dbName) {
      res.json(dbName);
    });
  });

  app.get("/api/findall", function (req, res) {
    db.Names.findAll({}).then(function (dbName) {
      res.json(dbName);
    });
  });

  ////// Option 1 - no gender //////
  // app.get("/api/wild/", function (req, res) {
  //   db.Names.findAll({
  //     where: {
  //       name: {
  //         $like: req.params.letter + "%"
  //       }
  //     }
  //   }).then(function (dbName) {
  //     res.json(dbName);
  //   });
  // });

  //FILTER BY FIRST LETTER
  app.get("/api/firstLetter/:letter", function (req, res) {
    db.Names.findAll({
      where: {
        name: {
          $like: req.params.letter + "%"
        }
      }
    }).then(function (dbName) {
      res.render("results", {
        dbName
      });

    });
  });
  //SORT BY POPULARITY
  app.get("/api/sortCount", function (req, res) {
    db.Names.findAll({
      order: [
        ["count", "DESC"]
      ]
    }).then(function (dbName) {
      res.render("results", {
        dbName
      });
    });
  });
  //FILTER BY GENDER AND SORT BY POPULARITY
  app.get("/api/sortCount/:gender", function (req, res) {
    db.Names.findAll({
      where: {
        gender: req.params.gender.toUpperCase()
      },
      order: [
        ["count", "DESC"]
      ]
    }).then(function (dbName) {
      res.render("results", {
        dbName
      });
    });

    //FILTER BY YEAR AND SORT BY POPULARITY
    app.get("/api/year/:year", function (req, res) {
      db.Names.findAll({
        where: {
          year: req.params.year
        },
        order: [
          ["count", "DESC"]
        ]
      }).then(function (dbName) {
        res.render("results", {
          dbName
        });
      });
    });

    // ===========Ericka's Routes========= ///
  });
    app.get("/api/fav/all", function (req, res) {
      db.favNames.findAll({}).then(function (dbName) {
        res.json(dbName);
      });
    });

    app.post("/api/fav/new", function (req, res) {
      db.favNames.create(req.body).then(function (favNameData) {
        console.log(favNameData);
        console.log("NAME SAVE Data:");
        console.log(req.body);

        res.send("complete");
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
    // });
  
};