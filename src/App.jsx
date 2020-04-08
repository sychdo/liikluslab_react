import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './components/routes/Routes';
import LocaleProvider from './behavior/providers/LocaleProvider';
import Layout from './components/layout/Default';

function App() {
  return (
    <Router>
      <Layout>
          <Route
            path='/:locale?'
            render={(props) => <LocaleProvider routes={Routes} {...props} />}
          />
      </Layout>
    </Router>
  );
}

export default App;
