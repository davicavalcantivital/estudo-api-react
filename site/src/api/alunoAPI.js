import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function CarregarAlunos() {
    const respo = await api.get('/aluno');
    return respo.data;
}

export async function PesquisarAluno(nome) {
    const respo = await api.get(`/aluno?nome=${nome}`);
    return respo.data;
}

export async function DarPresenca(id, vinda) {
    const respo = await api.put(`/aluno/${id}?presenca=${vinda}`);
    return respo.data;
}