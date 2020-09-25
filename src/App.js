import React, { Suspense, Fragment } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import "antd/dist/antd.css";
import { Menu, Layout } from 'antd';
import CustomNavbar from './components/CustomNavbar';
import CustomFooter from './components/CustomFooter';
import HomeScreen from './screens/HomeScreen';
import './App.less';
import Footer from './components/CustomFooter';

function App() {
  return (
    <Suspense fallback={null}>
      <Fragment>
        <BrowserRouter>
          <Layout style={{ minHeight: '100vh' }}>
            <CustomNavbar />
            <Switch>
              <Route exact path='/' component={HomeScreen} />              
            </Switch>
            <CustomFooter />
          </Layout>
        </BrowserRouter>
      </Fragment>
    </Suspense>
  );
}

export default App;
