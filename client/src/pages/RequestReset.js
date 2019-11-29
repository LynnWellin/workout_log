import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { TextField, Container, Button, Link, Typography, Box } from '@material-ui/core';

const AppStyle = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
});

class Field {
    constructor(name, label, password) {
        this.name = name;
        this.label = label;
        this.value = '';
        this.error = null;
        this.password = password ? true : false;
    }
}

class RequestReset extends Component {
    state = {
        email: new Field('email', 'Email'),
    };

    loginUser(e) {
        e.preventDefault();
        const { email, password } = this.state;
        const fields = [email, password];
        if (fields.some(el => el.error != null)) return;
        console.log(email);
    }

    updateField(field, value) {
        const item = this.state[field];
        item.value = value;
        if (field == 'confirm') {
            if (item.value !== this.state.password.value) item.error = 'Passwords must match';
            else item.error = null;
        }
        this.setState({ [field]: item });
    }

    render() {
        const { classes } = this.props;
        const { email } = this.state;
        const fields = [email];
        return (
            <Container>
                <form className={classes.container} onSubmit={e => this.loginUser(e)}>
                    <Typography>
                        <Box>
                            Forgot your password? Enter your email below, and we will send you an
                            email with reset instructions
                        </Box>
                    </Typography>
                    {fields.map(field => (
                        <TextField
                            key={field.label}
                            value={field.value}
                            onChange={e => this.updateField(field.name, e.target.value)}
                            required
                            label={field.label}
                            type={field.password ? 'password' : ''}
                            error={Boolean(field.error)}
                            helperText={field.error}
                            variant="outlined"
                        />
                    ))}
                    <Button type="submit">Request reset</Button>
                    <Link href="/users/login">Login here</Link>
                </form>
            </Container>
        );
    }
}

export default withStyles(AppStyle)(RequestReset);
