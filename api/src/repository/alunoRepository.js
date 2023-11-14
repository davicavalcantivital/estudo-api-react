import { con } from "./connection.js";

export async function listarAlunos() {
    const comando = `
    select 
        id_aluno as numero,
        nm_aluno as aluno,
        ds_sala as sala,
        ds_email as email,
        ds_telefone as telefone,
        ds_atividade as atividade,
        bt_presenca as presença
    from tb_aluno
    `;

    const [resposta] = await con.query(comando);
    return resposta
};

export async function listarAlunosPorNome(nome) {
    const comando = `
    select 
        id_aluno as numero,
        nm_aluno as aluno,
        ds_sala as sala,
        ds_email as email,
        ds_telefone as telefone,
        ds_atividade as atividade,
        bt_presenca as presença
    from tb_aluno
    where nm_aluno like ? 
    `;

    const resposta = await con.query(comando, [`%${nome}%`])
}

export async function darPresenca(id, presenca) {
    const comando = `
    update tb_aluno 
    set bt_presenca = ?
    where id_aluno = ?
    `;

    const [resposta] = await con.query(comando, [presenca, id]);
    return resposta
}