import React, { useContext, useState } from "react";
import { userContext } from "../../Routes/Routes";
import "./AddBooking.scss";
import fileUpload from "../../../images/logos/cloud-upload-outline 1.png";

const AddBooking = () => {
    const [user] = useContext(userContext);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    };

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", info.name);
        formData.append("location", info.location);
        formData.append("file", file);

        fetch("http://localhost:5000/addApartments", {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((result) => {
                if (result === true) {
                    alert("Appartments Added Successfully");
                }
            });
    };

    return (
        <section className="container-fluid row">
            <div
                className="col-8 col-md-10 col-lg-10 p-4 pr-5"
                style={{
                    position: "absolute",
                    right: 0,
                }}
            >
                <div className="d-flex justify-content-between">
                    <h5 className="text-brand">Add Services</h5>
                    <h4>{user.name}</h4>
                </div>
                <div
                    className="mt-5"
                    style={{
                        backgroundColor: "#F4FDFB",
                        height: "100vh",
                    }}
                >
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-12 d-flex">
                                <div>
                                    <div className="form-group">
                                        <lebel htmlFor="input">Name</lebel>
                                        <input
                                            onBlur={handleBlur}
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            placeholder="Enter name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <lebel htmlFor="input">Location</lebel>
                                        <input
                                            onBlur={handleBlur}
                                            type="text"
                                            name="location"
                                            className="form-control"
                                            id=""
                                            cols="30"
                                            rows="10"
                                            placeholder="Enter location"
                                        ></input>
                                    </div>
                                    <div className="form-group">
                                        <lebel htmlFor="input">Price</lebel>
                                        <input
                                            onBlur={handleBlur}
                                            type="text"
                                            name="price"
                                            className="form-control"
                                            id=""
                                            cols="30"
                                            rows="10"
                                            placeholder="Enter price"
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <div className="form-group">
                                        <lebel htmlFor="input">No of Bathroom</lebel>
                                        <input
                                            onBlur={handleBlur}
                                            type="text"
                                            name="bathroom"
                                            className="form-control"
                                            id=""
                                            cols="30"
                                            rows="10"
                                            placeholder="Enter No of Bathroom"
                                        ></input>
                                    </div>
                                    <div className="form-group">
                                        <lebel htmlFor="input">No of Bedroom</lebel>
                                        <input
                                            onBlur={handleBlur}
                                            type="text"
                                            name="bedroom"
                                            className="form-control"
                                            id=""
                                            cols="30"
                                            rows="10"
                                            placeholder="Enter No of Bedroom"
                                        ></input>
                                    </div>
                                    <div className="form-group col-4">
                                        <label className="file-upload p-2 text-center">
                                            <input
                                                onChange={handleFileChange}
                                                style={{ display: "none" }}
                                                type="file"
                                                className="form-control"
                                                id="exampleInputPassword1"
                                                placeholder="Picture"
                                                required
                                            />
                                            <img src={fileUpload} alt="" style={{ width: "24px", height: "24px" }} />{" "}
                                            upload project file
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success ml-auto">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddBooking;

{
    /* <div>
            <div className="d-flex justify-content-between">
                <h4>Addbooking</h4>
                <h4>User Name</h4>
            </div>
            <div className="row">
                <div className="col-6">
                    <form action="">
                        <label>Service Title</label> <br />
                        <input type="text" className="form-inputsection" placeholder="Service Title" />
                    </form>
                </div>
                <div className="col-6">
                    <form action="">
                        <label>Price</label> <br />
                        <input type="text" className="form-inputsection" placeholder="Service Title" />
                    </form>
                </div>
                <div className="col-6">
                    <form action="">
                        <label>Location</label> <br />
                        <input type="text" className="form-inputsection" placeholder="Service Title" />
                    </form>
                </div>
                <div className="col-6">
                    <form action="">
                        <label>No of Bedroom</label> <br />
                        <input type="text" className="form-inputsection" placeholder="Service Title" />
                    </form>
                </div>
                <div className="col-6">
                    <form action="">
                        <label>No of Bathroom</label> <br />
                        <input type="text" className="form-inputsection" placeholder="Service Title" />
                    </form>
                </div>
                <div className="col-6">
                    <form action="">
                        <label>Service Title</label> <br />
                        <input type="text" className="form-inputsection" placeholder="Service Title" />
                    </form>
                </div>
            </div>
        </div> */
}
