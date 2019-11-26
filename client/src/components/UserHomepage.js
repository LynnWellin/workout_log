import React, { Component } from 'react';
import { Link } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const Styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
});

class UserHomepage extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <Link href="/users/session">Workout</Link>
                <Link href="/users/createroutine">Add Routine</Link>
            </div>
        );
    }
}

export default withStyles(Styles)(UserHomepage);
