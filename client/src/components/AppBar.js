import React, { Component } from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const Styles = theme => ({});

export default withStyles(Styles)(
    class AppBar extends Component {
        render() {
            return (
                <AppBar>
                    <Toolbar>
                        <Button href="/users/home">Dashboard</Button>
                        <Button href="/users/createroutine">Create Routine</Button>
                    </Toolbar>
                </AppBar>
            );
        }
    }
);
