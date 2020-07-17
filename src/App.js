import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';
import 'antd/dist/antd.css';
const Home = loadable(() => import(/* webpackChunkName: "Home" */'./views/home/index'));
const Layout = loadable(() => import(/* webpackChunkName: "Layout" */'./views/layout/index'));

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Layout} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
