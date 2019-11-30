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
    sessions: {
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

class UserHomepage extends Component {
    state = { routines: [], openDialog: false, selected: null };
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
                {/* <Button onClick={this.handleAddSession} color="primary" variant="contained">
                    Create Blank Session
                </Button> */}
                <h2 className={classes.homeTitle}>Today's Sessions:</h2>
                <div className={classes.sessions}>
                    {sessions.map(el => (
                        <div>
                            <label>{el.id}</label>
                            <label>{el.date.toString()}</label>
                        </div>
                    ))}
                </div>
                {sessions.length === 0 ? (
                    <React.Fragment>
                        <label className={classes.noEntry}>No workouts recorded today</label>
                        <Button color="primary" onClick={() => this.addSession()}>
                            Start a workout!
                        </Button>
                    </React.Fragment>
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
