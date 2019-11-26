import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Session from './components/Session';
import Register from './components/Register';
import CreateRoutine from './components/CreateRoutine';
import LandingPage from './components/LandingPage';

import { withStyles } from '@material-ui/styles';
import './App.css';

const AppStyle = theme => ({
    container: {},
});

class App extends Component {
    state = { user: null };

    componentDidMount() {
        this.setState({ user: { name: 'Yury' } });
    }

    render() {
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
                            <Route exact path="/users/routines/create">
                                <CreateRoutine />
                            </Route>
                        </Switch>
                    </BrowserRouter>
                    {/* <CreateRoutine /> */}
                </div>
            </div>
        );
    }
}

export default withStyles(AppStyle)(App);
