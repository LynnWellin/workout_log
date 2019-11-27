import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import UserHomepage from './components/UserHomepage';
import Session from './components/Session';
import RequestReset from './components/RequestReset';
import Login from './components/Login';
import Register from './components/Register';
import CreateRoutine from './components/CreateRoutine';
import LandingPage from './components/LandingPage';

import { withStyles } from '@material-ui/styles';
import './App.css';

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
                <div className="App-header">
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
                            <Switch>
                                <Route exact path="/users/home">
                                    <UserHomepage />
                                </Route>
                                <Route exact path="/users/session">
                                    <Session />
                                </Route>
                                <Route exact path="/users/createroutine">
                                    <CreateRoutine />
                                </Route>
                            </Switch>
                        )}
                    </BrowserRouter>
                    {/* <CreateRoutine /> */}
                </div>
            </div>
        );
    }
}

export default withStyles(AppStyle)(App);
// export default connect(null, { addSession })(withStyles(AppStyle)(App));
