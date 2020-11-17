import React, { useContext, useEffect, useState } from "react";
import Axios from "axios";
import { Table } from "react-bootstrap";
import { RentsContext } from "../../../App";
import { userContext } from "../../Routes/Routes";
import "./MyBooking.scss";

const MyBooking = () => {
    const [bookingDetails, setBookingDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [user] = useContext(userContext);
    const [bookingByEmail, setBookingByEmail] = useState([]);

    console.log(bookingDetails);

    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                const response = await Axios.get("https://still-badlands-39141.herokuapp.com/showCustomerBooking");
                setBookingDetails(response.data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
            }
        };
        getData();
    }, [setBookingDetails]);

    return (
        <div className="my-booking">
            <div className="d-flex justify-content-between">
                <h4>Booking List</h4>
                <h4>User Name</h4>
            </div>

            <Table class="table borderless  " striped bordered hover>
                <thead>
                    <tr className="pt-5 mt-5">
                        <th>House Name</th>
                        <th>Price</th>
                        <th>Status No</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Abir vila</td>
                        <td>1200$</td>
                        <td>test</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default MyBooking;

// style={{
//                                 background:
//                                     order.status == "Pending"
//                                         ? "#FFE3E3"
//                                         : order.status == "Done"
//                                         ? "#C6FFE0"
//                                         : "#fff6e5",
//                                 color:
//                                     order.status == "Pending"
//                                         ? "#FF4545"
//                                         : order.status == "Done"
//                                         ? "#009444"
//                                         : "#FFBD3E",
//                                 borderRadius: "5px",
//                                 padding: "5px 10px",
//                             }}
//                         >
//                             {order.status}
