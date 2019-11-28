import React, { Component } from 'react';
import {
    IconButton,
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Fab,
    Stepper,
    Step,
    StepLabel,
} from '@material-ui/core';
import clsx from 'clsx';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import DirectionsRunRoundedIcon from '@material-ui/icons/DirectionsRunRounded';
import FitnessCenterRoundedIcon from '@material-ui/icons/FitnessCenterRounded';

const Styles = theme => ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        padding: '5px',
        margin: '5px',
    },
    input: {
        background: '#ffffff',
    },
    exerciseRow: {},
    formControl: {
        minWidth: '120px',
        background: '#ffffff',
    },
    addExerciseDiv: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        background: 'gray',
        maxWidth: '165px',
        margin: '5px',
        borderRadius: '50px',
    },
    fab: {
        // margin: '10px',
    },
    icon: {
        height: '50px',
        width: '50px',
        margin: '0 2px',
    },
    selected: {
        background: '#A1CCA5',
    },
});

const steps = ['Name Routine', 'Add Exercises'];

class CreateRoutine extends Component {
    state = { step: 0, routine: { name: '', weekday: '' } };

    updateField(field, value) {
        let { routine } = this.state;
        routine[field] = value;
        console.log(routine);
        this.setState({ routine });
    }

    handleBack() {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    handleNext() {
        const { step } = this.state;
        const { routine } = this.state;
        if (step === 0) {
            if (routine.name === '') return this.setState({ inputError: 'Name cannot be empty.' });
        }
        if (step === 1) {
            // Ensure at least one exercise
            // Ensure all exercises have a name
            // Ensuer all exercies have a min of 1 set
        }
        if (step === 2) {
        }
        this.setState({ step: step + 1 });
    }

    render() {
        const { classes } = this.props;
        const { step, routine, inputError } = this.state;
        return (
            <div>
                <h1>Create new Routine</h1>
                {step === 0 ? (
                    <FirstStep
                        inputError={inputError}
                        classes={classes}
                        routine={routine}
                        updateField={(field, value) => this.updateField(field, value)}
                    />
                ) : null}
                {step === 1 ? (
                    <AddExercises
                        inputError={inputError}
                        classes={classes}
                        routine={routine}
                        updateField={(field, value) => this.updateField(field, value)}
                    />
                ) : null}
                <Stepper activeStep={step}>
                    {steps.map((label, index) => {
                        return (
                            <Step>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div>
                    <Button
                        disabled={step === 0}
                        onClick={() => this.handleBack()}
                        className={classes.button}
                    >
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => this.handleNext()}
                        className={classes.button}
                    >
                        {step === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </div>
            </div>
        );
    }
}

class AddExercises extends Component {
    state = { exercises: [{ name: '', sets: '' }], addType: true };

    deleteExercise(ind) {
        const { exercises } = this.state;
        if (exercises.length > 1) {
            let temp = exercises.slice();
            temp.splice(ind, 1);
            this.setState({ exercises: temp });
        }
    }

    addExercise() {
        const { exercises } = this.state;
        let temp = exercises.slice();
        temp.push({ name: '', sets: '' });
        this.setState({ exercises: temp });
    }

    updateField(ind, field, value) {
        const { exercises } = this.state;
        exercises[ind][field] = value;
        this.setState({ exercises });
    }

    render() {
        const { classes, routine } = this.props;
        const { exercises, addType } = this.state;
        const last = exercises.length === 1 ? true : false;
        return (
            <div>
                <h2>{`${routine.name}${routine.weekday ? ` (${routine.weekday})` : ''}`}</h2>
                {exercises.map((el, ind) => (
                    <div className={classes.exerciseRow}>
                        <TextField
                            className={classes.input}
                            value={el.name}
                            onChange={e => this.updateField(ind, 'name', e.target.value)}
                            label="Exercise name"
                        />
                        <TextField
                            className={classes.input}
                            value={el.sets}
                            onChange={e => this.updateField(ind, 'sets', e.target.value)}
                            label="Number of sets"
                        />
                        <Button
                            disabled={last ? true : false}
                            onClick={() => this.deleteExercise(ind)}
                            startIcon={<DeleteIcon />}
                        ></Button>
                    </div>
                ))}
                <div className={classes.addExerciseDiv}>
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
                    <Fab className={classes.fab} onClick={() => this.addExercise()}>
                        <AddIcon />
                    </Fab>
                </div>
            </div>
        );
    }
}

class FirstStep extends Component {
    render() {
        const { classes, inputError, routine, updateField } = this.props;
        const { name, weekday } = routine;
        console.log(inputError);
        return (
            <div className={classes.container}>
                <TextField
                    className={classes.input}
                    value={name}
                    onChange={e => updateField('name', e.target.value)}
                    error={!!inputError}
                    helperText={inputError}
                    label="Routine Name"
                    // variant="filled"
                    required
                />
                <FormControl className={classes.formControl} /*variant="filled"*/>
                    <InputLabel>Weekday</InputLabel>
                    <Select value={weekday} onChange={e => updateField('weekday', e.target.value)}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="mon">Monday</MenuItem>
                        <MenuItem value="tue">Tuesday</MenuItem>
                        <MenuItem value="wed">Wednesday</MenuItem>
                        <MenuItem value="thur">Thursday</MenuItem>
                        <MenuItem value="fri">Friday</MenuItem>
                        <MenuItem value="sat">Saturday</MenuItem>
                        <MenuItem value="sun">Sunday</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    }
}

export default withStyles(Styles)(CreateRoutine);
