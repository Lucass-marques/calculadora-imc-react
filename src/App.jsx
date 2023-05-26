import { useState } from "react"
import Table from "./components/tabela"
import Header from "./components/Header"
import Form from "./components/Formulario"

import './global.css'

function App() {

  return (
    <div className="container">
      <Header />
    <Form />
    <Table />
    </div>
  )
}

export default App
