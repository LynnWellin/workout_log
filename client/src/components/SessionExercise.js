import React, { Component } from 'react';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, TextField } from '@material-ui/core';

import Set from './Set';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/styles';

const SessionStyles = theme => ({
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
});

class SessionExercise extends Component {
    render() {
        const { classes, exercise } = this.props;
        return (
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>{exercise}</ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.details}>
                    {[1, 2, 3, 4, 5].map(el => (
                        <Set number={el} />
                    ))}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        );
    }
}

export default withStyles(SessionStyles)(SessionExercise);
