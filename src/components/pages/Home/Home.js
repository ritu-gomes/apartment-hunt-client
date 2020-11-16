import React from "react";
import Bannner from "../Bannner/Bannner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RentCollection from "../RentCollection/RentCollection";
import Services from "../Services/Services";
import './Home.scss';

const Home = () => {
    return (
        <div className="Landing-page">
            <Header></Header>
            <Bannner></Bannner>
            <RentCollection/>
            <Services/>
            <Footer/>
        </div>
    );
};

export default Home;
