import './App.css'
import Encabezado from './Encabezado';

function App() {
  let curso = "Curso de React JS!"
  let students = 50;

  return (
    <>
      <Encabezado />
      <h3>{curso}</h3>
      <p>Alumnos: {students * 2}</p>
    </>
  )
}

export default App
