import React, {useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './pages/Product'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import Redux from './redux'
import ErrorPage from './pages/ErrorPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from './components/Grid'

import {useSelector, useDispatch} from 'react-redux'
import allActions from './redux/actions'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
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

      
      <Router>
      <Header />
        <Switch>
            <Redirect from='/' to='/home' exact/>
            <Route path="/home" component={Home}  exact/>
            <Route path="/products" component={Product} exact />
            <Route path="/collections" component={Collection}  exact/>
            <Route path="/cart" component={Cart} exact />
            <Route path="/checkout" component={Checkout} exact />           
            <Route path="*" >
              <ErrorPage />
            </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
