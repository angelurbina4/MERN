import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import ComponenteParametro from "./components/ComponenteParametros/ComponenteParametro";


const App = () => {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Switch>
        <Route path="/home" render={() => <Home/>}/>
        <Route path="/:palabra" exact render={() => <ComponenteParametro/>}/>
        <Route path="/:palabra/:color/:bg" exact render={() => <ComponenteParametro/>} />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
