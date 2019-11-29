import React, { Component } from 'react';
import clsx from 'clsx';
import { IconButton, Fab, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import DirectionsRunRoundedIcon from '@material-ui/icons/DirectionsRunRounded';
import FitnessCenterRoundedIcon from '@material-ui/icons/FitnessCenterRounded';
import AddIcon from '@material-ui/icons/Add';

const Styles = theme => ({
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        background: 'gray',
        margin: '5px',
        borderRadius: '50px',
    },
    input: {
        background: '#ffffff',
    },
    icon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        width: '50px',
        margin: '0 2px',
        borderRadius: '50px',
    },
    selected: {
        background: '#A1CCA5',
    },
});

class AddExercise extends Component {
    state = { type: true, name: '' };

    render() {
        const { classes } = this.props;
        const { type, name } = this.state;
        return (
            <div className={classes.container}>
                <TextField
                    placeholder="Exercise name"
                    value={name}
                    onChange={e => this.setState({ name: e.target.value })}
                />
                <Type
                    classes={classes}
                    type={true}
                    selected={type}
                    select={() => this.setState({ type: true })}
                />
                <Type
                    classes={classes}
                    type={false}
                    selected={!type}
                    select={() => this.setState({ type: false })}
                />
                <Fab className={classes.fab} onClick={() => this.props.addExercise()}>
                    <AddIcon />
                </Fab>
            </div>
        );
    }
}

class Type extends Component {
    render() {
        const { type, selected, classes } = this.props;
        return (
            <div
                className={clsx(classes.icon, selected && classes.selected)}
                onClick={() => this.props.select(type)}
            >
                {type ? <FitnessCenterRoundedIcon /> : <DirectionsRunRoundedIcon />}
            </div>
        );
    }
}

export default withStyles(Styles)(AddExercise);
