import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import {Login} from './pages/login'
import {AlugarProduto} from './pages/alugarproduto'
import {CadastrarProduto} from './pages/cadastrarproduto'
import {Main} from './pages/main'
import {ProdutosAlugados} from './pages/produtosalugados'
import {ProdutosAnunciados} from './pages/produtosanunciados'
import {SignUp} from './pages/signup'

export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/product/:product_id" element={<AlugarProduto/>}/>
          <Route exact path="/product/me/rented" element={<ProdutosAlugados/>}/>
          <Route exact path="/product/me/registered" element={<ProdutosAnunciados/>}/>
          <Route exact path="/product/register" element={<CadastrarProduto/>}/>
        </Routes>
    </Router>
  );
}
