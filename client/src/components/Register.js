import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { withStyles, mergeClasses } from '@material-ui/styles';
import { TextField, Container, Button } from '@material-ui/core';

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

class Register extends Component {
    state = {
        first: new Field('first', 'First name'),
        last: new Field('last', 'Last name'),
        email: new Field('email', 'Email'),
        password: new Field('password', 'Password', true),
        confirm: new Field('confirm', 'Confirm password', true),
    };

    registerUser(e) {
        e.preventDefault();
        const { first, last, email, password, confirm } = this.state;
        const fields = [first, last, email, password, confirm];
        if (fields.some(el => el.error != null)) return;
        console.log(first);
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
        const { first, last, email, password, confirm } = this.state;
        const fields = [first, last, email, password, confirm];
        return (
            <Container>
                <form className={classes.container} onSubmit={e => this.registerUser(e)}>
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
                    <Button type="submit">Register</Button>
                </form>
            </Container>
        );
    }
}

export default withStyles(AppStyle)(Register);
