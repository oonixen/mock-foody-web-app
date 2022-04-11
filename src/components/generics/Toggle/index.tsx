import React from "react";
import ReactToggle from "react-toggle";
import "./style.module.scss";

const Toggle = ({ id = null, className = "" }) => {

    const props = {className: className, icons: false}
    if (id) props["id"] = id

    return <ReactToggle {...props} />;
};

export default Toggle;
