import React, { useState } from "react";
import Bannner from "../Bannner/Bannner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RentCollection from "../RentCollection/RentCollection";
import Services from "../Services/Services";
import './Home.scss';

import { useEffect, useState } from "react";
import Axios from "axios";

import React, { useEffect, useState } from "react";
// import Axios from "axios";
import Loading from "../../utilities/Loading";
<<<<<<< HEAD
=======



import Loading from "../../utilities/Loading";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [hotelsInfo, setHotelsInfo] = useState([]);

    // console.log(hotelsInfo);


>>>>>>> 7703e1e110009e9276dcde90f1312eefe4aa6007
import "./Home.scss";

const Home = () => {
    // //to add hotels data to database
    // const handleAddHotels = (e) => {
    //     fetch("http://localhost:5000/addHotels", {
    //         method: "POST",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(hotelsData),
    //     });
    // };

<<<<<<< HEAD
=======
       
>>>>>>> 7703e1e110009e9276dcde90f1312eefe4aa6007
    return (
        <div className="Landing-page">
            <Header></Header>
            <Bannner></Bannner>
            <RentCollection />
            <Services />
            <Footer />
<<<<<<< HEAD
=======

>>>>>>> 7703e1e110009e9276dcde90f1312eefe4aa6007
        </div>
        
    );
};

export default Home;
