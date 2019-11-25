import React, { Component } from 'react';
import {
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Fab,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

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
    fab: {
        margin: '10px',
    },
});

class Routine {
    constructor(name, weekday) {
        this.name = name;
        this.weekday = weekday;
    }
}

class CreateRoutine extends Component {
    state = { step: 1, routine: new Routine('Deadlift', 'mon') };

    createRoutine(name, weekday) {
        console.log(name, weekday);
        this.setState({ step: 1, routine: new Routine(name, weekday) });
    }

    render() {
        const { classes } = this.props;
        const { step, routine } = this.state;
        console.log(step);
        return (
            <div>
                <h1>Create new Routine</h1>
                {step === 0 ? (
                    <FirstStep
                        classes={classes}
                        createRoutine={(name, weekday) => this.createRoutine(name, weekday)}
                    />
                ) : null}
                {step === 1 ? <AddExercises classes={classes} routine={routine} /> : null}
            </div>
        );
    }
}

class AddExercises extends Component {
    state = { exercises: [{ name: '', sets: '' }] };

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
        const { exercises } = this.state;
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
                <Fab className={classes.fab} onClick={() => this.addExercise()}>
                    <AddIcon />
                </Fab>
            </div>
        );
    }
}

class FirstStep extends Component {
    state = { name: '', weekday: '', inputError: null };

    completeStep() {
        const { name, weekday } = this.state;
        if (name != null && name !== '') {
            this.props.createRoutine(name, weekday !== '' ? weekday : null);
        } else {
            this.setState({ inputError: 'Routine name is required' });
        }
    }

    render() {
        const { classes } = this.props;
        const { inputError, name, weekday } = this.state;
        return (
            <div className={classes.container}>
                <TextField
                    className={classes.input}
                    value={name}
                    onChange={e => this.setState({ name: e.target.value })}
                    error={!!inputError}
                    helperText={inputError}
                    label="Routine Name"
                    variant="filled"
                    required
                />
                <FormControl className={classes.formControl} variant="filled">
                    <InputLabel>Weekday</InputLabel>
                    <Select
                        value={weekday}
                        onChange={e => this.setState({ weekday: e.target.value })}
                    >
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
                <Button variant="contained" onClick={() => this.completeStep()}>
                    Next
                </Button>
            </div>
        );
    }
}

export default withStyles(Styles)(CreateRoutine);
