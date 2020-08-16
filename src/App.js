import React from 'react';
import { Login } from './components/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main'
import Buyer from './components/Buyer'
import Sellers from './components/Sellers'
import Category from './components/Category'
import ChangePassword from './components/ChangePassword';
import UserReports from './components/UserReports'
import Orders from './components/Orders'
import OrderReports from './components/OrderReports'
import CategoryReport from './components/CategoryReport'

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Login} />
      <Route path='/Main' component={Main} />
      <Route path='/Buyer' component={Buyer} />
      <Route path='/Sellers' component={Sellers} />
      <Route path='/Category' component={Category} />
      <Route path='/ChangePassword' component={ChangePassword} />
      <Route path='/UserReports' component={UserReports} />
      <Route path='/Orders' component={Orders} />
      <Route path='/OrderReports' component={OrderReports} />
      <Route path='/CategoryReport' component={CategoryReport} />
    </BrowserRouter>
  );
}

export default App;
