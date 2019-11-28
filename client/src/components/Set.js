import React, { Component } from 'react';
import { TextField, Icon, Button, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { withStyles } from '@material-ui/styles';

const SetStyles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
});

class Set extends Component {
    render() {
        const { classes, number, weight, reps, update, deleteSet, last, type } = this.props;
        return (
            <div className={classes.container}>
                <label>{number}</label>
                <TextField
                    variant="outlined"
                    margin="dense"
                    label={type === 'weights' ? 'Weight' : 'Intensity'}
                    value={weight}
                    onChange={e => update('weight', e.target.value)}
                />
                <TextField
                    variant="outlined"
                    margin="dense"
                    label={type === 'weights' ? 'Reps' : 'Time'}
                    value={reps}
                    onChange={e => update('reps', e.target.value)}
                />
                <IconButton disabled={last ? true : false} onClick={() => deleteSet()}>
                    <DeleteIcon />
                </IconButton>
            </div>
        );
    }
}

export default withStyles(SetStyles)(Set);
