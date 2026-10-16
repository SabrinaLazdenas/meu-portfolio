import { Link } from "react-router-dom";

const projetos = [
  {
    id: 1,
    nome: "Planej.ai",
    imagem: "/imagens/planejai.png",
    descricao:
      "Aplicação web de educação financeira que ajuda o usuário a simular metas financeiras e organizar seu planejamento.",
    tecnologias: "React · TypeScript · CSS",
    demo: "https://planejai-sabrina-lazdenas.vercel.app",
    github: "https://github.com/SabrinaLazdenas/planejai",
  },
  {
    id: 2,
    nome: "Em breve",
    imagem: "",
    descricao: "Em breve",
    tecnologias: "Tecnologias",
    demo: "",
    github: "https://github.com/SabrinaLazdenas",
  },
  {
    id: 3,
    nome: "Em breve",
    imagem: "",
    descricao: "Em breve",
    tecnologias: "Tecnologias",
    demo: "",
    github: "https://github.com/SabrinaLazdenas",
  },
  {
    id: 4,
    nome: "Em breve",
    imagem: "",
    descricao: "Em breve",
    tecnologias: "Tecnologias",
    demo: "",
    github: "https://github.com/SabrinaLazdenas",
  },
  {
    id: 5,
    nome: "Em breve",
    imagem: "",
    descricao: "Em breve",
    tecnologias: "Tecnologias",
    demo: "",
    github: "https://github.com/SabrinaLazdenas",
  },
  {
    id: 6,
    nome: "Em breve",
    imagem: "",
    descricao: "Em breve",
    tecnologias: "Tecnologias",
    demo: "",
    github: "https://github.com/SabrinaLazdenas",
  },
];

function Projetos() {
  return (
    <main className="pagina-projetos">
      <h1>Meus Projetos</h1>

      <p className="introducao-projetos">
        Conheça os projetos que desenvolvi durante minha jornada na tecnologia.
      </p>

      <div className="lista-projetos">
        {projetos.map((projeto) => (
          <article className="cartao-projeto" key={projeto.id}>
            <h2 className="titulo-projeto">{projeto.nome}</h2>

            {projeto.imagem ? (
              <div className="capa-projeto">
                <img
                  src={projeto.imagem}
                  alt={`Captura de tela de ${projeto.nome}`}
                />
              </div>
            ) : (
              <div className="capa-projeto capa-sem-imagem">
                <span>{projeto.nome}</span>
              </div>
            )}

            <div className="informacoes-projeto">
              <p>{projeto.descricao}</p>

              <p className="tecnologias">{projeto.tecnologias}</p>

              <div className="botoes-projeto">
                <a
                  href={projeto.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="link-projeto"
                >
                  Ver projeto
                </a>

                {projeto.github && (
                  <a
                    href={projeto.github}
                    target="_blank"
                    rel="noreferrer"
                    className="link-github"
                  >
                    Ver código no GitHub
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="voltar-container">
        <Link to="/" className="voltar-inicio">
          ← Voltar ao início
        </Link>
      </div>
    </main>
  );
}

export default Projetos;
