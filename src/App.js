import React, {useState,useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductPage from './pages/Product'
import Redux from './redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useRouteMatch
} from "react-router-dom";

function App() {

  return (  
    <div className="App">
      {/* Slick SLider */}
      {/* <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
      <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
      <script type="text/javascript" src="slick/slick.min.js"></script>
      */}
      {/* FontAwesome 6.0 */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" /> 
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
      {/* FA End */}

      <Header />
      <Redux />
      <Router>
        <Switch>
          <Route>
            <Route path="/products" component={ProductPage} />
            <Redirect exact from="/" to="/products?id=2" /> 
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
