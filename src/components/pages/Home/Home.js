import React from "react";
import Bannner from "../Bannner/Bannner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import RentCollection from "../RentCollection/RentCollection";
import Services from "../Services/Services";
import './Home.scss';
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Loading from "../../utilities/Loading";

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [hotelsInfo, setHotelsInfo] = useState([]);

    console.log(hotelsInfo);

    // //to add hotels data to database
    // const handleAddHotels = (e) => {
    //     fetch("http://localhost:5000/addHotels", {
    //         method: "POST",
    //         headers: { "content-type": "application/json" },
    //         body: JSON.stringify(hotelsData),
    //     });
    // };

    //to show hotels
    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await Axios.get("http://localhost:5000/showHotels");
                setHotelsInfo(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        getData();
    }, []);

    return ( master
        <div className="Landing-page">
            <Header></Header>
            <Bannner></Bannner>
            <RentCollection/>
            <Services/>
            <Footer/>


        <div>
            <h2>Here you can put other parts of home page from abir</h2>
            {loading ? (
                <Loading />
            ) : (
                <div>
                    {hotelsInfo.map((info) => (
                        <div>
                            <p>{info.priceDetails}</p>
                            <img src={info.image1} alt="" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
