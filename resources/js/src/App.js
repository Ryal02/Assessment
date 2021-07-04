import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/Login/login';
import Register from './components/Register/register';
import Dashboard from './components/AdminDashboard/dashboard';



function App() {
    return (
        <Router className="App__container">
            <Switch>
                <Route exact path="/">
                    <Login/>
                </Route>
                <Route exact path="/register">
                    <Register/>
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
