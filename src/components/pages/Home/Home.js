import React from "react";
import Bannner from "../Bannner/Bannner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RentCollection from "../RentCollection/RentCollection";
import Services from "../Services/Services";
import SingleRentCollection from "../SingleRentCollection/SingleRentCollection";
import "./Home.scss";

const Home = () => {
    return (
        <div className="Landing-page">
            <Header></Header>
            <Bannner></Bannner>
            <RentCollection />
            <SingleRentCollection />
            <Services />
            <Footer />
        </div>
    );
};

export default Home;

// //to add hotels data to database
// const handleAddHotels = (e) => {
//     fetch("http://localhost:5000/addHotels", {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(hotelsData),
//     });
// };
