import React from 'react';
import Ionicon from "react-ionicons";

const Navigator = props => {
    return (
        <div className={"h-10-vh bg-white border-bottom pl-5 pr-5 d-flex justify-content-between"}>
            {props.children}
        </div>
    );
};

const Brand = props => {
    return (
        <div className={"h-100 pt-3 pl-4 pr-4 text-center bg-light border-right border-left"}>
            {props.children}
        </div>
    );
};

const Menu = props => {
    return (
        <div className={"d-flex justify-content-start"}>
            {props.children}
        </div>
    );
};

const MenuItem = props => {
    return (
        <div className={"border-right border-left pt-3 pl-4 pr-4 pointer"}>
            <Ionicon icon={props.icon}/>
        </div>
    );
};

export default Navigator;
export { Brand, Menu, MenuItem };