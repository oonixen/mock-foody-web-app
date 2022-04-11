import React from "react";
import Main from "../../modules/ProfileScreen/Main";
import Header from "../../modules/ProfileScreen/Header";

const ProfileScreen = ({ children }) => {
    return (
        <>
            <Header />
            <Main>{children}</Main>
        </>
    );
};

export default ProfileScreen;
