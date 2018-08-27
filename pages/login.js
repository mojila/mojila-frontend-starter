import React from 'react';
import Head from 'next/head';
import ReactLoading from 'react-loading';
import {Form, FormGroup, Button, Input, Label} from 'reactstrap';
import Router from 'next/router';

const Wrapper = props => {
    return (
        <div>
            {props.children}
        </div>
    );
};

const LoginWrapper = props => {
    return (
        <div className="w-25 p-2 border shadow mx-auto mt-5">
            {props.children}
        </div>
    );
};

const LoginHeader = props => {
    return (
        <div className="text-center">{props.children}</div>
    );
};

const LoginBody = props => {
    return (
        <div className="p-4">{props.children}</div>
    );
};

export default class Login extends React.Component {
    state = {
        loading: true,
        email: '',
        password: '',
        wrong: false
    };

    componentDidMount() {
        this.setState({ loading: false });

        let loggedin = localStorage.getItem('mojila-service-logged-in');

        if (loggedin === "logged-in") {
            Router.push('/home');
        }
    }
    
    onSubmit = e => {
        let wrong = this.state.email !== "admin@gmail.com"
                    && this.state.password !== "admin12345";
        
        if (wrong) {
            this.setState({ wrong: true });
        } else {
            this.setState({ wrong: false });
            localStorage.setItem('mojila-service-logged-in', 'logged-in');
            Router.push('/home');
        }

        e.preventDefault();
    };

    render() {
        return (
            <div>
                <Head>
                    <title>Login</title>
                </Head>
                <Wrapper>
                    <LoginWrapper>
                        <LoginHeader>
                            Login Admin
                        </LoginHeader>
                        <LoginBody>
                            { this.state.wrong && <div 
                                className="p-2 bg-danger text-center text-white small rounded mb-2"
                            >
                                Kata Sandi Salah
                            </div> }
                            { this.state.loading && <ReactLoading
                                type="spin"
                                width="64px"
                                height="64px"
                                color="#9b9b9b"
                                className="mx-auto"
                            /> }
                            { !this.state.loading && <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label size="sm">Email</Label>
                                    <Input size="sm" type="email" required
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label size="sm">Password</Label>
                                    <Input size="sm" type="password" required
                                        value={this.state.password}
                                        onChange={e => this.setState({ password: e.target.value })}
                                    />
                                </FormGroup>
                                <div className="text-right">
                                    <Button type="submit" size="sm" className="pl-5 pr-5">Login</Button>
                                </div>
                            </Form> }
                        </LoginBody>
                    </LoginWrapper>
                </Wrapper>
            </div>
        );
    }
};