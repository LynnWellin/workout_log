import React, { Component } from 'react';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, TextField } from '@material-ui/core';
import './App.css';

import SessionExercise from './components/SessionExercise';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/styles';

const AppStyle = theme => ({});

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="App">
                <div className="App-header">
                    {['Deadlift', 'Squat'].map(el => (
                        <SessionExercise exercise={el} />
                    ))}
                </div>
            </div>
        );
    }
}

export default withStyles(AppStyle)(App);
