import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import history from './history';
import store from './store';
import { HomeMain } from './components/home';
import { Login, Join } from './components/auth';
import { Header } from './components/semantic';

const Routing = () => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Header />
                <Switch>
                    <Route path="/" exact component={HomeMain} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/join" exact component={Join} />
                    <Redirect to="/" from="*" />
                </Switch>
            </Router>
        </Provider>
    );
};

export default Routing;
