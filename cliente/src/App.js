import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { BarraNavegacion } from './Components/Menu/BarraNavegacion';
import dashboard from './pages/dashboard';
function App() {
  return (
   <Router>
    <BarraNavegacion/>
    <Routes>
      <Route path='/' element={<dashboard />} />
    </Routes>
   </Router>

  );
}



export default App;
