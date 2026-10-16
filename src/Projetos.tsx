
import { Link } from 'react-router-dom'

function Projetos() {
  return (
    <main className="pagina-projetos">
      <h1>Meus Projetos</h1>

      <p className="introducao-projetos">
        Conheça os projetos que desenvolvi durante minha jornada na tecnologia.
      </p>

      <div className="lista-projetos">
        <article className="cartao-projeto">
          <h2 className="titulo-projeto">Planej.ai</h2>

          <div className="capa-projeto">
            <img
              src="/imagens/planejai.png"
              alt="Captura de tela do projeto Planej.ai"
            />
          </div>

          <div className="informacoes-projeto">
            <p>
              Aplicação web de educação financeira que ajuda o usuário
              a simular metas financeiras e organizar seu planejamento.
            </p>

            <p className="tecnologias">
              React · TypeScript · CSS
            </p>

            <div className="botoes-projeto">
              <a
                href="https://planejai-sabrina-lazdenas.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="link-projeto"
              >
                Ver projeto
              </a>

              <a
                href="https://github.com/SabrinaLazdenas/planejai"
                target="_blank"
                rel="noreferrer"
                className="link-github"
              >
                Ver código no GitHub
              </a>
            </div>
          </div>
        </article>
      </div>

      <div className="voltar-container">
        <Link to="/" className="voltar-inicio">
          ← Voltar ao início
        </Link>
      </div>
    </main>
  )
}

export default Projetos

