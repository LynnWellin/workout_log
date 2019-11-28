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

    handleClick() {
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
                    Start Blank Session
                </Button>
                <Link href="/users/session">Workout</Link>
                <Link href="/users/createroutine">Add Routine</Link>
                <AppBar>
                    <Toolbar></Toolbar>
                </AppBar>
                <h2>Today's Sessions:</h2>
                {sessions.map(el => (
                    <div>
                        <label>{el.id}</label>
                        <label>{el.date.toString()}</label>
                    </div>
                ))}
                {sessions.length === 0 ? (
                    <Typography>
                        <Box>Start a workout!</Box>
                    </Typography>
                ) : null}
                <Fab
                    onClick={() => this.handleClick()}
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
