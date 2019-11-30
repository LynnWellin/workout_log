import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import UserHomepage from './pages/UserHomepage';
import Session from './pages/Session';
import RequestReset from './pages/RequestReset';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateRoutine from './components/CreateRoutine';
import LandingPage from './pages/LandingPage';
import AppBar from './components/AppBar';

import { withStyles } from '@material-ui/styles';
import Routines from './pages/Routines';

const AppStyle = theme => ({
    container: {},
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { user: { name: 'Yury' } };
    }

    componentDidMount() {
        this.setState({ user: { name: 'Yury' } });
    }

    render() {
        const { user } = this.state;
        console.log(user);
        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <LandingPage />
                        </Route>
                        <Route exact path="/users/register">
                            <Register />
                        </Route>
                        <Route exact path="/users/login">
                            <Login />
                        </Route>
                        <Route exact path="/users/password/forgot">
                            <RequestReset Reset />
                        </Route>
                        <Route exact path="/users/routines/create">
                            <CreateRoutine />
                        </Route>
                    </Switch>
                    {user == null ? (
                        <Redirect
                            to={{
                                pathname: '/users/login',
                            }}
                        />
                    ) : (
                        <React.Fragment>
                            <Route>
                                <AppBar />
                            </Route>
                            <Switch>
                                <Route exact path="/users/home" component={UserHomepage} />
                                <Route exact path="/users/session">
                                    <Session />
                                </Route>
                                <Route exact path="/users/routines">
                                    <Routines />
                                </Route>
                                <Route exact path="/users/createroutine">
                                    <CreateRoutine />
                                </Route>
                            </Switch>
                        </React.Fragment>
                    )}
                </BrowserRouter>
            </div>
        );
    }
}

export default withStyles(AppStyle)(App);
