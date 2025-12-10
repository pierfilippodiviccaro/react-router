
import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from './layout/DefaultLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/chiSiamo'
import SingleProduct from './pages/SingleProduct';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path='/chisiamo' element={<About/>}/>
          <Route path='/products/:id' element='SingleProduct'/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
