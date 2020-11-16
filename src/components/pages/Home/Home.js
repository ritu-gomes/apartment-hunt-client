import React, { useEffect, useState } from "react";
// import Axios from "axios";

const Home = () => {
    const [loading, setLoading] = useState(false);

    //to add hotels data to database
    const handleAddHotels = (e) => {
        fetch("http://localhost:5000/addHotels", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(),
        });
    };

    // //to show hotels
    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             setLoading(true);
    //             const response = await Axios.get("http://localhost:5000/showHotels");
    //             setReviewsInfo(response.data);
    //             setLoading(false);
    //         } catch (error) {
    //             setLoading(false);
    //         }
    //     };
    //     getData();
    // }, []);

    return (
        <div>
            <h2>Here you can put other parts of home page from abir</h2>
            <button onClick={handleAddHotels}>add</button>
        </div>
    );
};

export default Home;
