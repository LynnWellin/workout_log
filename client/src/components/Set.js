import React, { Component } from 'react';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, TextField } from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/styles';
import { flexbox } from '@material-ui/system';

const SetStyles = theme => ({
    container: {
        display: 'flex',
    },
});

class Set extends Component {
    render() {
        const { classes, number } = this.props;
        return (
            <div className={classes.container}>
                <label>{number}</label>
                <TextField variant="outlined" margin="dense" label="Weight" />
                <TextField variant="outlined" margin="dense" label="Reps" />
            </div>
        );
    }
}

export default withStyles(SetStyles)(Set);
