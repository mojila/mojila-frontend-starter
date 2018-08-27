import React from 'react';
import Head from 'next/head';
import Navigator, {Brand, Menu, MenuItem} from "../shared-components/navigator";
import Content from "../shared-components/content";
import Wrapper from "../shared-components/wrapper";
import Router from 'next/router';

const Recent = props => {
    return (
        <div className={"m-5"}>{props.children}</div>
    );
};

const RecentHeader = props => {
    return (
        <div className={"p-2 border-bottom"}>{props.children}</div>
    );
};

const RecentContent = props => {
    return (
        <div className={"mt-2 mh-50"}>
            {props.children}
        </div>
    );
};

const RecentItem = props => {
    return (
        <div className={"p-2 border"}>{props.children}</div>
    );
};

export default class Home extends React.Component {
    componentDidMount() {
        let loggedin = localStorage.getItem('mojila-service-logged-in');

        if (loggedin !== "logged-in") {
            Router.push('/login');
        }
    }
    
    render() {
        return (
            <div>
                <Head>
                    <title>Home</title>
                </Head>
                <Wrapper>
                    <Navigator fixed>
                        <Brand>National Chemication</Brand>
                        <Menu>
                            <MenuItem icon={"ios-home-outline"}/>
                            <MenuItem icon={"ios-list-box-outline"}/>
                            <MenuItem icon={"md-add"}/>
                        </Menu>
                    </Navigator>
                    <Content>
                        <Recent>
                            <RecentHeader>Recent Test (2)</RecentHeader>
                            <RecentContent>
                                <RecentItem>adaw</RecentItem>
                            </RecentContent>
                        </Recent>
                    </Content>
                </Wrapper>
            </div>
        );
    }
}