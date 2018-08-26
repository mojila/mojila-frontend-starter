import React from 'react';

const Content = props => {
    return (
        <div className={"h-90-vh content"}>
            {props.children}
        </div>
    );
};

export default Content;