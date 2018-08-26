import React from 'react';
import Head from 'next/head';
import image_animation from '../static/images/3c.gif';
import Router from 'next/router';

const Wrapper = props => {
    return (
        <div className={"bg-primary text-white"}>{props.children}</div>
    );
};

const Header = props => {
    return (
        <div className={"pl-5 pr-5 pt-4 pb-2 d-flex justify-content-between"}>
            {props.children}
        </div>
    );
};

const Brand = props => {
    return (
        <div>
            {props.children}
        </div>
    );
};

const Menu = props => {
    return (
        <div className={"d-flex"}>{props.children}</div>
    );
};

const MenuItem = props => {
    return (
        <div className={"p-2 pl-3 pr-3 border pointer menu-item small"} onClick={() => Router.push(props.to)}>{props.children}</div>
    );
};

const Content = props => {
    return (
        <div className={"pl-5 pr-5"}>{props.children}</div>
    );
};

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>National Chemication Online Test</title>
                </Head>
                <Wrapper>
                    <Header>
                        <Brand>National Chemication</Brand>
                        <Menu>
                            <MenuItem to={"/login"}>Login</MenuItem>
                        </Menu>
                    </Header>
                    <Content>
                        <div className={"text-center mt-5"}>Situs Online Test Maker (Percobaan)</div>
                        <div className={"text-center mt-2"}>
                            <img height={"256"} src={image_animation} className={"p-1 border bg-white shadow"}/>
                        </div>
                        <div className={"pt-5 pb-5"}></div>
                    </Content>
                </Wrapper>
            </div>
        );
    }
}