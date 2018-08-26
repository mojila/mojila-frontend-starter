import React from 'react';

const Wrapper = props => {
    return (
        <div className={"bg-light wrapper"}>
            {props.children}
        </div>
    );
};

export default Wrapper;