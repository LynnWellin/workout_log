import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import SessionExercise from '../components/SessionExercise';
import AddExerciseBar from '../components/AddExerciseBar';

const Styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    noEntry: {
        margin: '20px 0',
        textAlign: 'center',
        fontSize: '1.2em',
        width: '80%',
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
        exercises: [
            /*new Exercise('Deadlift', 'weights', 5), new Exercise('Squat', 'weights', 3)*/
        ],
        openLast: false,
    };

    addExercise(name, type) {
        const { exercises } = this.state;
        let newList = exercises.slice();
        newList.push(new Exercise(name, type));
        this.setState({ exercises: newList, openLast: true });
    }

    render() {
        const { classes } = this.props;
        const { exercises, openLast } = this.state;
        return (
            <div className={classes.container}>
                {exercises.length === 0 ? (
                    <label className={classes.noEntry}>Add an exercise</label>
                ) : null}
                {exercises.map((el, i) => (
                    <SessionExercise
                        key={i + el.exercise}
                        {...el}
                        expanded={openLast && exercises.length - 1 === i}
                    />
                ))}
                <AddExerciseBar addExercise={(name, type) => this.addExercise(name, type)} />
            </div>
        );
    }
}

export default withStyles(Styles)(Session);
