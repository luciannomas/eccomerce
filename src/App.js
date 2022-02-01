import { actionTypes } from './reducer';
import Product from './components/Product'
import './App.css';

//Component
import Navbar from './components/Navbar';
import Products from './components/Products';
import CheckoutPage from './components/CheckoutPage';
import SignIn from './components/Signin'
import SignUp from './components/SignUp'

import { Switch , BrowserRouter as R, Route } from 'react-router-dom'
import { unstable_useEnhancedEffect } from '@mui/material';
import { useEffect } from 'react';
import { auth } from './firebase';

import { useStateValue } from './StateProvider'
import Checkout from './components/checkoutForm/Checkout';
import Checkout2 from './components/checkoutForm/Checkout2';

function App() {

  const [ { user }, dispatch ] = useStateValue()
 
  useEffect( () => {
    auth.onAuthStateChanged( (authUser) => {
      console.log("authUser:" + authUser)
      if(authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  }, []) 

  return (
    <R>
      <div className="App">
        <Navbar />
        <Switch>{/* chekout-page */}
      
          <Route path = "/SignUp"> 
            <SignUp />
          </Route>

          <Route path = "/SignIn"> 
            <SignIn />
          </Route>
          
          <Route path = "/ChekoutPage">
            <CheckoutPage/>
          </Route>

          <Route path = "/Checkout2">
            <Checkout2/>
          </Route>

          <Route exact path = "/" >
            <Products />
          </Route>
        </Switch> 
    </div>
    </R>
  );
}

export default App;
