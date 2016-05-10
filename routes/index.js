var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var commentController= require('../controllers/comment_controller');
var userController= require('../controllers/user_controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
//GET mi pagina
router.get('/author', function(req, res, next) {
  res.render('author');
});

//Autoload de rutas que usen :quizId
router.param('quizId', quizController.load);  //autoload:quizId
router.param('userId', userController.load); //autoload:userId

//Definicion de rutas de /quizzes

router.get('/quizzes',                     	quizController.index);
router.get('/quizzes/:quizId(\\d+)',       	quizController.show);
router.get('/quizzes/:quizId(\\d+)/check', 	quizController.check);
router.get('/quizzes/new',                  quizController.new);
router.post('/quizzes',                     quizController.create);
router.get('/quizzes/:quizId(\\d+)/edit',   quizController.edit);
router.put('/quizzes/:quizId(\\d+)',        quizController.update);
router.delete('/quizzes/:quizId(\\d+)',        quizController.destroy);
//router.get('/quizzes(\\w)',              quizController.search);  //****

//Definicion de rutas de cuenta

router.get('/quizzes',                     quizController.index);
router.get('/quizzes/:quizId(\\d+)',       quizController.show);
router.get('/quizzes/:quizId(\\d+)/check', quizController.check);
router.get('/quizzes/new',                 quizController.new);
router.post('/quizzes',                    quizController.create);
router.get('/quizzes/:quizId(\\d+)/edit',  quizController.edit);
router.put('/quizzes/:quizId(\\d+)',       quizController.update);
router.delete('/quizzes/:quizId(\\d+)',    quizController.destroy);

 
router.get('/quizzes/:quizId(\\d+)/comments/new', commentController.new);
router.post('/quizzes/:quizId(\\d+)/comments',    commentController.create);
module.exports = router;
