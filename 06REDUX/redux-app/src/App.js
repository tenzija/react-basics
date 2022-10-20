import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Home from './components/home';
import Movie from './components/movie';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/movie" component={Movie} exact></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
