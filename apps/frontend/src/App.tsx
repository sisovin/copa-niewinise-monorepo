import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Header from './components/Header';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/courses" component={Courses} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
