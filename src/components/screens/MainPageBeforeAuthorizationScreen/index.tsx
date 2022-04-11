import React from "react";
import Header from "../../modules/MainPageBeforeAuthorizationScreen/Header";
import Banner from "../../modules/MainPageBeforeAuthorizationScreen/Banner";
import MarketingTextBlock from "../../modules/MainPageBeforeAuthorizationScreen/MarketingTextBlock";
import Map from "../../modules/MainPageBeforeAuthorizationScreen/Map";
import MobileApp from "../../modules/MainPageBeforeAuthorizationScreen/MobileApp";
import Footer from "../../generics/Footer";

const MainPageBeforeAuthorizationScreen = () => {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <MarketingTextBlock />
                <Map />
                <MobileApp />
            </main>
            <Footer />
        </>
    );
};

export default MainPageBeforeAuthorizationScreen;
