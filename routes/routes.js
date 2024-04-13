const express = require('express')
const AlunoController = require('../controllers/AlunoController')
const router = express.Router()

router.get('/', function(req, res){
    res.json({})
})

router.get('/alunos', (req, res) => AlunoController.getAll(req, res))
router.post('/alunos', (req, res) => AlunoController.create(req, res))

// router.get('/alunos/aprovados', (req, res) => AlunoController.getAll(req, res, 'aprovados'))
// router.get('/alunos/reprovados', (req, res) => AlunoController.getAll(req, res, 'reprovados'))
// router.get('/alunos/recuperacao', (req, res) => AlunoController.getAll(req, res, 'recuperacao'))

router.get('/alunos/aprovados', (req, res) => AlunoController.getAprovados(req, res, 'aprovados'))
router.get('/alunos/reprovados', (req, res) => AlunoController.getReprovados(req, res, 'reprovados'))
router.get('/alunos/recuperacao', (req, res) => AlunoController.getRecuperacao(req, res, 'recuperacao'))




module.exports = router