import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './app.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import PageHeading from './components/PageHeading';
import ContentRow from './components/ContentRow';
import Content from './components/Content';
import Footer from './components/Footer';
import AllTheProductsInTheDBTitle from './components/AllProductsInTheDBTitle';
import TodosLosProductos from './components/TodosLosProductos';
import BarChart from './components/BarChart';
import Chart2 from './components/Chart2';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/chart">
          <BarChart />
          <Chart2 />
        </Route>
        <Route path="/">
          <div id="wrapper">
            <Sidebar />
              <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                  <Topbar />
                    <div className="container-fluid">
                      <PageHeading />
                      <ContentRow />
                      <Content />
                      <AllTheProductsInTheDBTitle />
                      <TodosLosProductos />
                    </div>
                </div>
                <Footer />
              </div>
          </div>
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;