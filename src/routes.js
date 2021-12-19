import React, {useEffect, useState} from "react";
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
import {ProdutosAlugados2} from './pages/produtosalugados2'
import {ProdutosAnunciados} from './pages/produtosanunciados'
import {SignUp} from './pages/signup'
import {Ajuda} from "./pages/help";
import {NotMobileError} from "./pages/notmobileerror";
import {Chat} from "./pages/chat";
import {Menu} from "./pages/menu";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 470)
  
  const isMobileFunction = () => {
    setIsMobile(window.innerWidth <= 470)
  }

  useEffect(() => {
    window.addEventListener('resize', isMobileFunction)
    return () => window.removeEventListener('resize', isMobileFunction)
  }, [])

  if (!isMobile) {
    return <NotMobileError/>
  }

  return (
    <BrowserRouter>
      <Switch>
            <Route exact path="/list" render={() => <Main/>}/>
            <Route exact path="/signup" render={() => <SignUp/>}/>
            <Route exact path="/product/:product_id" render={() => <AlugarProduto/>}/>
            <Route exact path="/product/me/rented" render={() => <ProdutosAlugados/>}/>
            <Route exact path="/product/me/rented2" render={() => <ProdutosAlugados2/>}/>
            <Route exact path="/product/me/registered" render={() => <ProdutosAnunciados/>}/>
            <Route exact path="/product/me/register" render={() => <CadastrarProduto/>}/>
            <Route exact path="/help" render={() => <Ajuda/>}/>
            <Route exact path="/" render={() => <Login/>}/>
            <Route exact path="/chat/:user_id" render={() => <Chat/>}/>
            <Route exact path="/menu" render={() => <Menu/>}/>
      </Switch>
    </BrowserRouter>
  );
}
