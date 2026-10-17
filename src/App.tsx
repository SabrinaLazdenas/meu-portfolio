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
        ENGENHARIA DE SOFTWARE · PORTFÓLIO
      </p>

      <h1>
        Olá, meu nome é 
        <br />
        <span>Sabrina Lazdenas.</span>
      </h1>

      <h2>Conheça meus projetos</h2>

      <p className="hero-descricao">
        Sejam bem-vindos ao meu portfólio!
        Aqui você encontrará projetos que desenvolvi ao longo da minha jornada na tecnologia,
        colocando em prática meus conhecimentos em programação e desenvolvimento de software.
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
      Minha jornada.
      <br />
      <span>um projeto de cada vez.</span>
    </h2>

    <p>
      Sou estudante de Engenharia de Software na Universidade Santo Amaro (UNISA) e 
      tenho interesse em transformar ideias em soluções tecnológicas seguras, acessíveis
      e funcionais. Minha formação tem me permitido desenvolver o raciocínio lógico, explorar 
      diferentes tecnologias e compreender os processos envolvidos na criação de aplicações.
    </p>

    <p>
      Busco colocar em prática os conhecimentos adquiridos nos estudos por meio de projetos,
      como o Planej.ai, uma aplicação web de educação financeira desenvolvida com React e 
      TypeScript, utilizando Vite. Essa experiência tem contribuído para meu aprendizado em
      desenvolvimento Front-end e despertado meu interesse em compreender também o funcionamento
      do Back-end e a integração entre diferentes partes de uma aplicação.
    </p>

    <p>
    Quero ampliar meus conhecimentos em Engenharia de Software e evoluir na
    criação de aplicações completas, desde a interface até a lógica e o
    processamento de dados. Também tenho interesse em segurança de software e
    busco aprofundar meus conhecimentos em boas práticas de segurança para
    desenvolver aplicações mais seguras e bem estruturadas.
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