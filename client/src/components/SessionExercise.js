import React, { Component } from 'react';
import {
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Button,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import Set from './Set';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/styles';

const SessionStyles = theme => ({
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    root: {
        '&$expanded': {
            margin: 0,
            borderBottom: 'solid 1px #00000020',
        },
    },
    expanded: {},
});

class SetData {
    constructor(weight = '', reps = '') {
        this.weight = weight;
        this.reps = reps;
    }
}

class SessionExercise extends Component {
    constructor(props) {
        super(props);
        let sets = [];
        for (let i = 0; i < this.props.sets; i++) {
            sets.push(new SetData());
        }
        this.state = { sets };
    }

    // Deletes set at index ind
    deleteSet(ind) {
        const { sets } = this.state;
        if (sets.length > 1) {
            let copy = sets.slice();
            copy.splice(ind, 1);
            this.setState({ sets: copy });
        }
    }

    // Adds a new empty set
    addSet() {
        const { sets } = this.state;
        let copy = sets.slice();
        copy.push(new SetData());
        this.setState({ sets: copy });
    }

    // Update a specific field for a specific set
    updateSet(ind, field, value) {
        const { sets } = this.state;
        // Ensure all chars are numbers
        // Due to copy/paste, onchange does not gurantee that the value will change by 1 char at a time
        // Must therefore check all chars every change
        if (value.split('').every(el => el.charCodeAt(0) > 47 && el.charCodeAt(0) < 58)) {
            sets[ind][field] = value;
            this.setState({ sets });
        }
    }

    render() {
        const { classes, exercise } = this.props;
        const { sets } = this.state;
        return (
            <ExpansionPanel
                // expanded={{ test: { background: 'black' } }}
                id={exercise}
                classes={classes}
            >
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    {exercise}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    {sets.map((el, ind) => (
                        <Set
                            number={ind + 1}
                            {...el}
                            update={(field, value) => this.updateSet(ind, field, value)}
                            deleteSet={() => this.deleteSet(ind)}
                            last={sets.length === 1}
                        />
                    ))}
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<AddIcon />}
                        onClick={() => this.addSet()}
                    >
                        Add
                    </Button>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default withStyles(SessionStyles)(SessionExercise);
