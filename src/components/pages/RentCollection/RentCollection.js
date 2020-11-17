import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { RentsContext } from "../../../App";
// import info.image1 from "../../../images/images/Rectangle 394.png";
import Loading from "../../utilities/Loading";
import "./RentCollection.scss";

const RentCollection = () => {
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
        <section className="container rent-collection py-5">
            <div className="text-center">
                <h5>House Rent</h5>
                <h2 className="">
                    Discover the latest Rent <br />
                    available today
                </h2>
            </div>

            {/* services */}
            {loading ? (
                <Loading />
            ) : (
                <div className="row d-flex justify-content-between">
                    {rentsDetails.map((info) => (
                        <div className="col-6 col-md-4 p-3">
                            <div className="p-3 item align-center wrapper">
                                <div className="img">
                                    <img className="img-fluid" src={info.image1} alt="" />
                                </div>
                                <h4>{info.name}</h4>
                                <p>{info.location}</p>
                                <div className="d-flex">
                                    <p>{info.bedroom}</p>
                                    <p className="ml-auto">{info.bathroom}</p>
                                </div>
                                <div className="d-flex">
                                    <h3>${info.price}</h3>
                                    {/* <button className="ml-auto"> */}
                                        <Link className="btn ml-auto" to={`/booking/${info._id}`}>View Details</Link>
                                    {/* </button> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {/* service done   */}
        </section>
    );
};

export default RentCollection;
