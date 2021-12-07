import React from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import {Login} from './pages/login'
import {AlugarProduto} from './pages/alugarproduto'
import {CadastrarProduto} from './pages/cadastrarproduto'
import {Main} from './pages/main'
import {ProdutosAlugados} from './pages/produtosalugados'
import {ProdutosAnunciados} from './pages/produtosanunciados'
import {SignUp} from './pages/signup'
import {Ajuda} from "./pages/help";
import {InicialPage} from "./pages/paginainicial";

export default function App() {
  
  return (
    <BrowserRouter>
      <Switch>
            <Route exact path="/login" render={() => <Login/>}/>
            <Route exact path="/list" render={() => <Main/>}/>
            <Route exact path="/signup" render={() => <SignUp/>}/>
            <Route exact path="/product/:product_id" render={() => <AlugarProduto/>}/>
            <Route exact path="/product/me/rented" render={() => <ProdutosAlugados/>}/>
            <Route exact path="/product/me/registered" render={() => <ProdutosAnunciados/>}/>
            <Route exact path="/product/register" render={() => <CadastrarProduto/>}/>
            <Route exact path="/help" render={() => <Ajuda/>}/>
            <Route exact path="/" render={() => <InicialPage/>}/>
      </Switch>
    </BrowserRouter>
  );
}
