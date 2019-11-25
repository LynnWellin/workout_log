import React, { Component } from 'react';
import { TextField, Button, createMuiTheme } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const Styles = theme => ({
    addExercise: {
        margin: '5px',
        display: 'flex',
    },
    input: {
        background: '#ffffff',
    },
});

class AddExerciseMenu extends Component {
    state = {
        input: '',
        inputError: null,
    };

    addExercise() {
        const { input } = this.state;
        if (input != null && input !== '') {
            this.props.addExercise(input);
            this.setState({ inputError: null });
        } else {
            this.setState({ inputError: 'Exercise name cannot be empty.' });
        }
    }

    render() {
        const { classes } = this.props;
        const { input, inputError } = this.state;
        return (
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
                <Button variant="contained" color="primary" onClick={() => this.addExercise()}>
                    Add new
                </Button>
            </div>
        );
    }
}

export default withStyles(Styles)(AddExerciseMenu);
