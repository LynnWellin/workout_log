import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import AddExerciseMenu from './AddExerciseMenu';
import SessionExercise from './SessionExercise';

const Styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

class Exercise {
    constructor(name, type, sets = 1) {
        this.exercise = name;
        this.type = type;
        this.sets = sets;
    }
}

class Session extends Component {
    state = {
        exercises: [new Exercise('Deadlift', 'weights', 5), new Exercise('Squat', 'weights', 3)],
    };

    addExercise(name, type) {
        const { exercises } = this.state;
        let newList = exercises.slice();
        newList.push(new Exercise(name, type));
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
                <AddExerciseMenu addExercise={(name, type) => this.addExercise(name, type)} />
            </div>
        );
    }
}

export default withStyles(Styles)(Session);
