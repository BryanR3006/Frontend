import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { BarraNavegacion } from './Components/Menu/BarraNavegacion';
import dashboard from './Components/pages/dashboard';
import ListaClientes from './Components/clientes/ListaCliente';

function App() {
  return (
   <Router>
    <BarraNavegacion/>
    <Routes>
      <Route path='/' element={dashboard} />
      <Route path='/Cliente/lista' element={<ListaClientes/>}/>
    </Routes>
   </Router>

  );
}



export default App;
