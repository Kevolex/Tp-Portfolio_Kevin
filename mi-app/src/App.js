import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Favoritos from './components/Favoritos';
import Info from './components/Info';
import MisCreaciones from './components/MisCreaciones';
import Layout from './components/Layout';
import FavoritosProvider from './Context/FavoritosContext';
import CreacionesProvider from './Context/CreacionesContext';

function App() {
  return (
    <div>
      <CreacionesProvider>
        <FavoritosProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path='/Favoritos' element={<Favoritos />}></Route>
                <Route path='/Info' element={<Info />}></Route>
                <Route path='/MisCreaciones' element={<MisCreaciones />}></Route>
                <Route path='*' element={<h1>Not Found</h1>} ></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </FavoritosProvider>
      </CreacionesProvider>
    </div>
  );
}

export default App;
