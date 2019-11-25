import React, { Component } from 'react';

import AddExerciseMenu from './AddExerciseMenu';
import SessionExercise from './SessionExercise';

import { withStyles } from '@material-ui/styles';

const Styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

class Exercise {
    constructor(name, sets = 1) {
        this.exercise = name;
        this.sets = sets;
    }
}

class Session extends Component {
    state = {
        exercises: [new Exercise('Deadlift', 5), new Exercise('Squat', 3)],
    };

    addExercise(name) {
        const { exercises } = this.state;
        let newList = exercises.slice();
        newList.push(new Exercise(name));
        this.setState({ exercises: newList });
    }

    render() {
        const { classes } = this.props;
        const { exercises } = this.state;
        return (
            <div className={classes.container}>
                {exercises.map((el, i) => (
                    <SessionExercise key={i + el.exercise} {...el} />
                ))}
                <AddExerciseMenu addExercise={name => this.addExercise(name)} />
            </div>
        );
    }
}

export default withStyles(Styles)(Session);
