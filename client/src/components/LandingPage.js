import React, { Component } from 'react';
import {
    TextField,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Fab,
    Typography,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const backgroundImage = '/images/matt-nelson-xMb8r6Sw770-unsplash.jpg';
// const backgroundImage = '/images/lou-batier-5EoWFa_Htdo-unsplash.jpg';

const Styles = theme => ({
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // zIndex: -2,
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        padding: '5px',
        margin: '5px',
    },
    input: {
        background: '#ffffff',
    },
    exerciseRow: {},
    formControl: {
        minWidth: '120px',
        background: '#ffffff',
    },
    fab: {
        margin: '10px',
    },
});

class LandingPage extends Component {
    state = { exercises: [{ name: '', sets: '' }] };

    render() {
        const { classes, routine } = this.props;
        const { exercises } = this.state;
        const last = exercises.length === 1 ? true : false;
        return (
            <div className={classes.background}>
                {/* Increase the network loading priority of the background image. */}
                <img
                    style={{ display: 'none' }}
                    src={backgroundImage}
                    alt="increase priority"
                    // title="Photo by Lou Batier on Unsplash"
                    title="Photo by Matt Nelson on Unsplash"
                />
                <Typography fontWeight="medium" fontSize="h6.fontSize" align="center">
                    Track your workouts
                </Typography>
                <Button variant="contained" color="secondary">
                    Register
                </Button>
            </div>
        );
    }
}

export default withStyles(Styles)(LandingPage);
