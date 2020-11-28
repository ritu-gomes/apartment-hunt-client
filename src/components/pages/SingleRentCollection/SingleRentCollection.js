import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { RentsContext } from "../../../App";
// import info.image1 from "../../../images/images/Rectangle 394.png";
import Loading from "../../utilities/Loading";
import "./SingleRentCollection.scss";

const SingleRentCollection = () => {
    const [loading, setLoading] = useState(false);
    const [rentsDetails, setRentsDetails] = useContext(RentsContext);

    //to show hotels
    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await Axios.get("https://still-badlands-39141.herokuapp.com/showHotels");
                setRentsDetails(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };
        getData();
    }, []);

    return (
        <div className="container mb-5 rent-collection">
            {/* services */}
            {loading ? (
                <Loading />
            ) : (
                <div className="row">
                    {rentsDetails.map((info) => (
                        <div className="col-4 border">
                            <div className="p-3 align-center wrapper">
                                <div className="img">
                                    <img
                                        className="img-fluid"
                                        src={`data:image/png;base64,${info.image1.img}`}
                                        alt=""
                                    />
                                </div>
                                <h4>{info.name}</h4>
                                <p>{info.location}</p>
                                <div className="d-flex">
                                    <p>{info.bedroom}</p>
                                    <p className="ml-auto">{info.bathroom}</p>
                                </div>
                                <div className="d-flex">
                                    <h3>${info.price}</h3>
                                    <button className="ml-auto">
                                        <Link to={`/booking/${info._id}`}>View Details</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {/* service done   */}
        </div>
    );
};

export default SingleRentCollection;
