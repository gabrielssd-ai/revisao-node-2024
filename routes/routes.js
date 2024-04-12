const express = require('express')
const AlunoController = require('../controllers/AlunoController')
const router = express.Router()

router.get('/', function(req, res){
    res.json({})
})

router.get('/alunos', (req, res) => AlunoController.getAll(req, res))
router.post('/alunos', (req, res) => AlunoController.create(req, res))

module.exports = router