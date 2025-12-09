
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from './layout/DefaultLayout';
import Home from './pages/Home';
import Products from './pages/Products';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
