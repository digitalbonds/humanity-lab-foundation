import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/layouts/navbar.component';
import HomePage from './components/pages/home-page.component';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Footer from './components/layouts/footer.component';

function App() {
  return (
    <div className="wrapper">

      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage} />
        </Switch>
        <Footer/>
        <a href="#" className="back-top btn">
            <i className="material-icons">keyboard_arrow_up</i>
        </a>
      </BrowserRouter>
    </div>
  );
}

export default App;
