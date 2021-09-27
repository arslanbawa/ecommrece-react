import React, {useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './pages/Product'
import Home from './pages/Home'
import Collection from './pages/Collection'
import Checkout from './pages/Checkout'
import Cart from './pages/Cart'
import Thankyou from './pages/Checkout/Thankyou'
import Login from './pages/Login'
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
  const currentUser = useSelector(state => state.currentUser)
  const dispatch = useDispatch()
  return (  
    <div className="App">
      {/* FontAwesome 6.0 */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" /> 
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
      {/* FA End */}
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    
      <Router>
      <Header />
      {currentUser.loggedIn?<>
        <Switch>
            <Redirect from="/" to="/home"  exact/>
            <Route path="/home" component={Home}  exact/>
            <Route path="/products" component={Product} exact />
            <Route path="/collections" component={Collection}  exact/>
            <Route path="/cart" component={Cart} exact />
            <Route path="/checkout" component={Checkout} exact />   
            <Route path="/Thankyou" component={Thankyou} exact />         
            <Route path="*" >
              <ErrorPage />
            </Route>
            

        </Switch></>
                    :<Switch><Route path="*" component={Login} /> </Switch>
                  }
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
