import React, { Component } from 'react';
import { TextField, Button, createMuiTheme } from '@material-ui/core';
import './App.css';

import SessionExercise from './components/SessionExercise';

import { withStyles } from '@material-ui/styles';

const AppStyle = theme => ({
    addExercise: {
        margin: '5px',
        display: 'flex',
    },
    input: {
        background: '#ffffff',
    },
});

class Exercise {
    constructor(name, sets = 1) {
        this.exercise = name;
        this.sets = sets;
    }
}

class App extends Component {
    state = {
        exercises: [new Exercise('Deadlift', 5), new Exercise('Squat', 3)],
        input: '',
        inputError: null,
    };

    addExercise() {
        const { input, exercises } = this.state;
        if (input) {
            let newList = exercises.slice();
            newList.push(new Exercise(input));
            console.log(newList);
            this.setState({ exercises: newList, input: '', inputError: null });
        } else {
            this.setState({ inputError: 'Exercise name cannot be empty.' });
        }
    }

    render() {
        const { exercises, input, inputError } = this.state;
        const { classes } = this.props;
        return (
            <div className="App">
                <div className="App-header">
                    {exercises.map((el, i) => (
                        <SessionExercise key={i + el.exercise} {...el} />
                    ))}
                    <div className={classes.addExercise}>
                        <TextField
                            label="Exercise name"
                            variant="filled"
                            className={classes.input}
                            value={input}
                            onChange={e => this.setState({ input: e.target.value })}
                            error={!!inputError}
                            helperText={inputError}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => this.addExercise()}
                        >
                            Add new
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(AppStyle)(App);
