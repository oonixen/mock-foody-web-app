import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./style.module.scss"

const ButtonNavLink = ({children, className = "", to}) => {

    const colorClass = styles.ButtonNavLink__navLink_purpleMedium
    const classes = styles.ButtonNavLink__navLink + " " + colorClass + " " + className

    return (
        <NavLink
            to={to}
            className={classes}
        >
            {children}
        </NavLink>
    )
}

export default ButtonNavLink