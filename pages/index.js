import React from 'react';

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <div>Hello</div>
                <div><img src={require('../statics/images/test.png')} alt="tes"/></div>
            </div>
        );
    }
}