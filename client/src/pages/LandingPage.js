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
    Box,
} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const backgroundImage = '/images/matt-nelson-xMb8r6Sw770-unsplash.jpg';
// const backgroundImage1 = '/images/lou-batier-5EoWFa_Htdo-unsplash.jpg';

const Styles = theme => ({
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#00000040', // Average color of the background image.
        backgroundPosition: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -2,
    },
    container: {
        minHeight: '110px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '5px 15px',
        margin: '5px',
        background: '#ffffff65',
        borderRadius: '5px',
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
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div
                    className={classes.background}
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    {/* Increase the network loading priority of the background image. */}
                    <img
                        style={{ display: 'none' }}
                        src={backgroundImage}
                        alt="increase priority"
                        // title="Photo by Lou Batier on Unsplash"
                        title="Photo by Matt Nelson on Unsplash"
                    />
                </div>
                <div className={classes.container}>
                    <Typography>
                        <Box fontSize="h6.fontSize" fontWeight="fontWeightBold">
                            Become part of the crew.
                            {/* Work. Track. Grow. */}
                        </Box>
                    </Typography>
                    <Button variant="contained" color="secondary" href="/users/register">
                        Register
                    </Button>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(Styles)(LandingPage);
