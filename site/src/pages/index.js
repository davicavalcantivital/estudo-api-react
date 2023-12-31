import './index.scss';
// import { CarregarAlunos, PesquisarAluno, DarPresenca } from '../api/alunoAPI';
export default function ListaChamada() {


  return (
    <main className='index-lista-chamada'>
      <section className='fundo'>
        <header className='cabecalho'>
          <h1>React_API.my</h1>
        </header>
        <section className='sec-1'>
          <div>
            <h4>Lista de chamada</h4>
          </div>
          <hr/>
          <nav>
            <label>Pesquisar Aluno</label>
            <input type='text'/>
          </nav>
          <hr/>
          <table className='sec1-tabela'>
            <thead>
              <tr>
                <th>Número</th>
                <th>Nome</th>
                <th>Sala</th>
                <th>Email</th>
                <th>telefone</th>
                <th>Atividade</th>
                <th>Presença</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#1</td>
                <td>Aluno</td>
                <td>1°A</td>
                <td>Aluno.com</td>
                <td>000</td>
                <td>Ativo</td>
                <td>
                <select>
                  <option>Selecione</option>
                  <option>Presente</option>
                  <option>Ausente</option>
                </select>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </main>
  );
}


