import './App.css';
import Cabecalho from './components/cabecalho';
import Rodape from './components/rodape';
import Desafio1 from './pages/Desafio1/index';
import Desafio2 from './pages/Desafio2/index';
import Desafio3 from './pages/Desafio3/index';
import Desafio4 from './pages/Desafio4/index';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Cabecalho />
      <Desafio1 />
      <Desafio2 />
      <Desafio3 />
      <Desafio4 />
      <Rodape />
    </>
  );
}

export default App;
