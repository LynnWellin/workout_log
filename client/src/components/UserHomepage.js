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
        display: 'flex',
        flexDirection: 'column',
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
});

class UserHomepage extends Component {
    state = { routines: ['Routine 1', 'Routine 2'], openDialog: false, selected: null };
    handleAddSession = () => {
        console.log('here');
        console.log(this.props);
        this.props.addSession('Name');
    };

    closeMenu() {
        this.setState({ openDialog: false });
    }

    addSession() {
        const { routines } = this.state;
        if (routines.length > 0) {
            this.setState({ openDialog: true });
        } else {
            this.props.history.push('/users/session');
        }
    }

    render() {
        const { classes, sessions, history } = this.props;
        const { routines, openDialog } = this.state;
        console.log(sessions);
        return (
            <div className={classes.container}>
                <Button onClick={this.handleAddSession} color="primary" variant="contained">
                    Create Blank Session
                </Button>
                <AppBar>
                    <Toolbar>
                        <Button href="/users/home">Dashboard</Button>
                        <Button href="/users/createroutine">Create Routine</Button>
                    </Toolbar>
                </AppBar>
                <h2>Today's Sessions:</h2>
                {sessions.map(el => (
                    <div>
                        <label>{el.id}</label>
                        <label>{el.date.toString()}</label>
                    </div>
                ))}
                {sessions.length === 0 ? (
                    <Button onClick={() => this.addSession()}>Start a workout!</Button>
                ) : null}
                <Fab
                    onClick={() => this.addSession()}
                    size="medium"
                    color="secondary"
                    className={classes.addButton}
                >
                    <AddIcon />
                </Fab>
                {openDialog ? (
                    <Dialog open={openDialog} onClose={() => this.closeMenu()}>
                        <List>
                            {routines.map(el => (
                                <ListItem>{el}</ListItem>
                            ))}
                            <ListItem button onClick={() => history.push('/users/session')}>
                                Blank Session
                            </ListItem>
                            <DialogActions>
                                <ListItem onClick={() => this.closeMenu()} button color="primary">
                                    Cancel
                                </ListItem>
                            </DialogActions>
                        </List>
                    </Dialog>
                ) : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state);
    // console.log(sessions);
    const { sessions } = state.session;
    return { sessions };
};

export default connect(mapStateToProps, { addSession })(withStyles(Styles)(UserHomepage));
