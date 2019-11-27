import React, { Component } from 'react';
import { Link, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

import { connect } from 'react-redux';
import { addSession } from '../redux/actions';

const Styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
});

class UserHomepage extends Component {
    handleAddSession = () => {
        console.log('here');
        console.log(this.props);
        this.props.addSession('Name');
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Button onClick={this.handleAddSession}>Start Session</Button>
                <Link href="/users/session">Workout</Link>
                <Link href="/users/createroutine">Add Routine</Link>
            </div>
        );
    }
}

export default connect(mapStateToProps, { addSession })(withStyles(Styles)(UserHomepage));
