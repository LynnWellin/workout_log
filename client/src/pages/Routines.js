import React, { Component } from 'react';
import {
    Link,
    Button,
    Typography,
    Box,
    AppBar,
    Toolbar,
    Fab,
    Dialog,
    List,
    ListItem,
    DialogActions,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';

import { connect } from 'react-redux';
import { addSession } from '../redux/actions';
import { getSessionsState } from '../redux/selectors';

const Styles = theme => ({
    container: {
        position: 'relative',
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    homeTitle: {
        margin: '10px',
        marginTop: 0,
        textAlign: 'center',
        width: '50%',
        borderBottom: '1px solid #00000030',
    },
    routines: {
        overflow: 'auto',
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
    noEntry: {
        margin: '20px 0',
        textAlign: 'center',
        width: '80%',
    },
});

class Routines extends Component {
    state = { routines: [], openDialog: false, selected: null };

    render() {
        const { classes } = this.props;
        const { routines } = this.state;
        return (
            <div className={classes.container}>
                <h2 className={classes.homeTitle}>Your Routines</h2>
                <div className={classes.routines}>
                    {routines.map(el => (
                        <div>
                            <label>{el}</label>
                        </div>
                    ))}
                </div>
                {routines.length === 0 ? (
                    <React.Fragment>
                        <label className={classes.noEntry}>
                            Use routines to create a template for your workout sessions
                        </label>
                        <Button color="primary" href="/users/createroutine">
                            Create a new routine
                        </Button>
                    </React.Fragment>
                ) : null}
                <Fab
                    href="/users/createroutine"
                    // onClick={() => this.()}
                    size="medium"
                    color="secondary"
                    className={classes.addButton}
                >
                    <AddIcon />
                </Fab>
            </div>
        );
    }
}

export default withStyles(Styles)(Routines);
