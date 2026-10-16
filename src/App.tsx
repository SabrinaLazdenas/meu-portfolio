
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Projetos from './Projetos'

function Inicio() {
  return (
    <main>
      <h1>Olá, eu sou a Sabrina!</h1>

      <h2>Estudante de Engenharia de Software</h2>

      <p>
        Bem-vindo ao meu portfólio!
        Aqui vou apresentar meus projetos e minha jornada na tecnologia.
      </p>

      <section>
        <h2>Sobre mim</h2>

        <p>
          Sou estudante de Engenharia de Software na UNISA e estou
          desenvolvendo minhas habilidades em programação.
          Tenho interesse em desenvolvimento de software, Dados e Cibersegurança.
        </p>
      </section>

      <Link to="/projetos" className="botao-projetos">
        Conheça Meus Projetos
      </Link>
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
