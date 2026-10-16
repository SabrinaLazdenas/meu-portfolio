import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Projetos from './Projetos'

function Inicio() {
return (
<main className="pagina-inicial">
<header className="cabecalho">
<Link to="/" className="logo">
SL<span>.</span>
</Link>

    <nav className="navegacao">
      <a href="#sobre">Sobre mim</a>
      <Link to="/projetos">Projetos</Link>
      <a href="#contato">Contato</a>
    </nav>
  </header>

  <section className="hero">
    <div className="hero-conteudo">
      <p className="hero-etiqueta">
        ENGENHARIA DE SOFTWARE · UNISA
      </p>

      <h1>
        Olá, eu sou
        <br />
        <span>Sabrina Lazdenas.</span>
      </h1>

      <h2>Transformando curiosidade em código.</h2>

      <p className="hero-descricao">
        Sou estudante de Engenharia de Software e estou construindo
        minha jornada na tecnologia, explorando desenvolvimento de
        software, Dados e Cibersegurança.
      </p>

      <div className="hero-botoes">
        <Link to="/projetos" className="botao-projetos">
          Conheça meus projetos <span>↗</span>
        </Link>

        <a href="#sobre" className="botao-secundario">
          Saiba mais sobre mim
        </a>
      </div>
    </div>

    <div className="hero-visual" aria-hidden="true">
      <div className="visual-brilho" />
      <div className="visual-circulo visual-circulo-externo" />
      <div className="visual-circulo visual-circulo-interno" />

      <div className="visual-monograma">
        <span>S</span>
        <span>L</span>
      </div>

      <div className="visual-tag tag-superior">
        <span className="tag-ponto" />
        SOFTWARE ENGINEERING
      </div>

      <div className="visual-tag tag-inferior">
        <span>01</span> &nbsp; INICIANDO A JORNADA
      </div>
    </div>
  </section>

  <section id="sobre" className="sobre">
    <p className="secao-etiqueta">UM POUCO SOBRE MIM</p>

    <h2>
      Em constante evolução,
      <br />
      <span>um projeto de cada vez.</span>
    </h2>

    <p>
      Estou desenvolvendo minhas habilidades em programação por meio
      dos estudos e de projetos práticos. Quero construir uma base
      sólida em tecnologia e aprofundar meus conhecimentos em
      desenvolvimento de software, Dados e Cibersegurança.
    </p>
  </section>

  <footer id="contato" className="rodape">
    <p>Vamos construir algo interessante?</p>

    <p className="contato-descricao">
      Estou construindo minha trajetória na tecnologia e aberta a
      conhecer oportunidades de estágio e trocar experiências.
    </p>

    <div className="links-contato">
      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn ↗
      </a>

      <a
        href="https://github.com/SabrinaLazdenas"
        target="_blank"
        rel="noreferrer"
      >
        GitHub ↗
      </a>
    </div>

    <p className="rodape-creditos">
      © {new Date().getFullYear()} Sabrina Lazdenas
    </p>
  </footer>
</main>

)
}

function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Inicio />} />
<Route path="/projetos" element={<Projetos />} />
</Routes>
</BrowserRouter>
)
}

export default App