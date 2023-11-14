import { Router } from "express";
const sv = Router();
import { listarAlunos, darPresenca } from "../repository/alunoRepository.js";

sv.get(('/aluno'), async (req, resp) => {
    try {
        const respo = await listarAlunos();
        resp.send(respo);
    } catch (err) {
        resp.status(400).send({erro: err.message})
    }
})

// /aluno/1?presenca=false
sv.put(('/aluno/:id'), async (req, resp) => {
    try {
        const params = req.params.id;
        const query = req.query.presenca;
        await darPresenca(params, query)
        resp.sendStatus(204)
    } catch (err) {
        resp.status(400).send({erro: err.messsage})
    }
})

export default sv