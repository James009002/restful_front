import './App.css';
import Home from './page/Home';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CreateMember from './page/CreateMember';
import Products from './page/Products';
import logo from './img/logo.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <div className="headerBar">
          <img src={logo} alt="logo" className="logo"/>
          <Link to="/">首頁</Link>
          <Link to="/home" >HOME</Link>
          <Link to="/products" >商品</Link>
          <Link to="/createMember" >加入會員</Link>
        </div>
        <Routes>
          <Route path="/" element={ <Products/>}  />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="createMember" element={<CreateMember />} />
        </Routes>
      </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
