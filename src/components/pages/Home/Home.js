import React from "react";
import Bannner from "../Bannner/Bannner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RentCollection from "../RentCollection/RentCollection";
import Services from "../Services/Services";
import './Home.scss';
import Axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../../utilities/Loading";

const Home = () => {
    // //to add hotels data to database
    // const handleAddHotels = (e) => {
    //     fetch("http://localhost:5000/addHotels", {
    //         method: "POST",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(hotelsData),
    //     });
    // };

       
    return (
        <div className="Landing-page">
            <Bannner></Bannner>
            <RentCollection />
            <Services />
            <Footer />
        </div>
        
    );
};

export default Home;
