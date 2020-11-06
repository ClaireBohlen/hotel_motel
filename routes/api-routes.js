var db = require("../models"); // Require in models folder

module.exports = function (app) {
  app.get("/api/guests", function (req, res) {
    db.Guest.findAll({}).then(function (result) {
      console.log(result);
      res.json(result);
    });
  });

  app.post("/api/guests", function (req, res) {
    db.Guest.create({
      name: req.body.name,
      rooms: req.body.rooms,
      phone: req.body.phone,
      
    }).then(function (result) {
      res.json(result);
      console.log(result);
    });
  });

  app.put("/api/guests/:id", function(req,res){
    db.Guest.update(
      req.body,
      {
      where: {
        id: req.params.id
      },
      
    }).then(function(result){
      res.json(result)
      console.log(result)
    })
  })

  app.delete("api/guests/:id", function (req,res){
    db.Guest.destroy(req.body, {
      
        where: {
          id: req.params.id
        }
      
    }).then(function(result){
      res.json(result)
    })
  })
  

}

