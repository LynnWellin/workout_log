import React, { Component } from 'react';
import {
    TextField,
    Button,
    createMuiTheme,
    RadioGroup,
    Radio,
    FormControlLabel,
    IconButton,
} from '@material-ui/core';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';

import DirectionsRunRoundedIcon from '@material-ui/icons/DirectionsRunRounded';
import FitnessCenterRoundedIcon from '@material-ui/icons/FitnessCenterRounded';

const Styles = theme => ({
    addExercise: {
        margin: '5px',
        display: 'flex',
    },
    input: {
        background: '#ffffff',
    },
    icon: {
        height: '50px',
        width: '50px',
        margin: '2.5px',
    },
    selected: {
        background: '#A1CCA5',
    },
});

class AddExerciseMenu extends Component {
    state = {
        input: '',
        inputError: null,
        addType: true,
    };

    addExercise() {
        const { input, addType } = this.state;
        if (input != null && input !== '') {
            this.props.addExercise(input, addType ? 'weights' : 'cardio');
            this.setState({ inputError: null });
        } else {
            this.setState({ inputError: 'Exercise name cannot be empty.' });
        }
    }

    render() {
        const { classes } = this.props;
        const { input, inputError, addType } = this.state;
        console.log(addType);
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
                <IconButton
                    className={clsx(classes.icon, addType && classes.selected)}
                    onClick={() => this.setState({ addType: true })}
                >
                    <FitnessCenterRoundedIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.icon, !addType && classes.selected)}
                    onClick={() => this.setState({ addType: false })}
                >
                    <DirectionsRunRoundedIcon />
                </IconButton>
                <Button variant="outlined" color="primary" onClick={() => this.addExercise()}>
                    Add
                </Button>
            </div>
        );
    }
}

export default withStyles(Styles)(AddExerciseMenu);
