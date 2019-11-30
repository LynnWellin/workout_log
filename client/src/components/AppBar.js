import React, { Component } from 'react';
import { AppBar, Toolbar, Button, IconButton, Fab, Container } from '@material-ui/core';
import { withStyles, mergeClasses } from '@material-ui/styles';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import clsx from 'clsx';

const Styles = theme => ({
    bar: {
        display: 'flex',
    },
    button: {
        color: '#ffffff',
    },
    mainbutton: {
        fontWeight: 'bold',
        // fontSize: '.8em',
    },
    space: {
        'flex-grow': 1,
    },
});

export default withStyles(Styles)(
    class AppBar extends Component {
        render() {
            const { classes } = this.props;
            return (
                <AppBar>
                    <Toolbar className={classes.bar}>
                        <Button
                            className={clsx(classes.button, classes.mainbutton)}
                            href="/users/home"
                        >
                            Dashboard
                        </Button>
                        <Button href="/users/routines" className={classes.button}>
                            Routines
                        </Button>
                        <div className={classes.space}></div>
                        {/* <IconButton size="small">
                            <AddCircleOutlineIcon className={classes.button} />
                        </IconButton> */}
                        <IconButton size="small">
                            <AccountCircleIcon className={classes.button} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            );
        }
    }
);
