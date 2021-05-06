import React from 'react';
import GlobalStyle from './styles/global';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Pokemon from './pages/Pokemon';
import Home from './pages/Home';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/:pokemonName" component={Pokemon} />
      </Switch>
    </BrowserRouter>
  </>
);
 
export default App;