import './App.css';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Product from './pages/product/Product';
import SearchPage from './pages/serchpage/SearchPage';
function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} exact element={<Home />} />
        <Route path={'/product/:id'} element={<Product />} />
        <Route path={'/items/:id'} element={<SearchPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App;