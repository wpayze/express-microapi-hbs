var express = require('express');
var router = express.Router();

const personas = [
  {
    "id" : "1",
    "nombre" : "Wilfredo",
    "edad" : "20"
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { personas: personas });
});

router.post('/addPerson', function(req,res,next) {
  const person = {
    id: personas.length + 1,
    nombre: req.body.nombre,
    edad: req.body.edad
  };

  personas.push(person);
  res.render('index', {agregado: req.body.nombre, agregadoid: person.id, personas: personas});

});

module.exports = router;
