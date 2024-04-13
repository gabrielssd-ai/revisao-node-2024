const { json } = require("express");
const Aluno = require("../models/Aluno")

const AlunoController = {
    getAll: async (req, res, situacao = '') => {

        // let where = {}
        // switch (situacao){
        //     case "aprovados": where = {media: {$gte: 7}}; break;
        //     case "reprovados": where = {media: {$lt: 5}}; break;
        //     case "recuperacao": where = {media: {$gte: 5, $lt: 7}}; break;
        // }

        // res.json(await Aluno.find(where))

        res.json(await Aluno.find())
    },
    getAprovados: async (req, res) => {
        res.json(await Aluno.find( {media: {$gte: 7}} ))
    },
    getReprovados: async (req, res) => {
        res.json(await Aluno.find( {media: {$lt: 5}} ))
    },
    getRecuperacao: async (req, res) => {
        res.json(await Aluno.find( {media: {$gte: 5, $lt: 7}} ))
    },
    get: async (req, res) => {
        try {
            res.json(await Aluno.findById(req.params.id))
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },
    create: async (req, res) => {
        try {

            let soma = 0
            const notas = req.body.notas
            const alunos = req.body
            
            for(let n of notas){
                if( n < 0 || n > 10){
                    return res.status(400).json(
                        {message: 'Não pode haver nota menor que 0 ou maior que 10'}
                    )
                }
                soma += n
            }

            const media = soma / notas.length
            alunos.media = media

            res.json(await Aluno.create(alunos))
        } catch (error) {
            res.status(400).json(error.message)
        }
    },
    update: async (req, res) => {
        try {
            res.json(await Aluno.updateMany( {turma: "E"}, {turma: "B"} ))
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },
    delete: async (req, res) => {
        try {
            res.json(await Aluno.deleteMany({nome: "Teste"}))
        } catch (error) {
            res.status(404).json({error: 'Registro não encontrado'})
        }
    },
}

module.exports = AlunoController