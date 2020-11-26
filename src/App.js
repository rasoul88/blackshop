import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signIn-signUp/signIn-signUp.component';
import CheckoutPage from './pages/checkout/checkout.component';

// import { checkUserSession } from "./redux/user/user.actions";

import { createStructuredSelector } from 'reselect'; 
import { selectCurrentUser } from './redux/user/user.selectors';


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    // const {dispatch} = this.props;
    // dispatch(checkUserSession());
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin'
           render={() => this.props.currentUser 
           ? (<Redirect to='/' />) 
           : (<SignInAndSignUpPage />)} 
          />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
})



export default connect(mapStateToProps)(App);
