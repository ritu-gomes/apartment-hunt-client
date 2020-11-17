import React from 'react';
import './AddBooking.scss';


const AddBooking = () => {
    return (
        <div className="add-booking">
            <div className="d-flex justify-content-between">
                <h4>Addbooking</h4>
                <h4>User Name</h4>
            </div>
            <div className="row">
                <div className="col-6">
                    <form action="">
                        <label>Service Title</label> <br/>
                        <input type="text" className="form-inputsection" placeholder="Service Title"/>
                    </form>
                </div>
                <div className="col-6">
                    <form action="">
                        <label>Service Title</label> <br/>
                        <input type="text" className="form-inputsection" placeholder="Service Title"/>
                    </form>
                </div>
                <div className="col-6">
                    <form action="">
                        <label>Service Title</label> <br/>
                        <input type="text" className="form-inputsection" placeholder="Service Title"/>
                    </form>
                </div>
                <div className="col-6">
                    <form action="">
                        <label>Service Title</label> <br/>
                        <input type="text" className="form-inputsection" placeholder="Service Title"/>
                    </form>
                </div>
                <div className="col-6">
                    <form action="">
                        <label>Service Title</label> <br/>
                        <input type="text" className="form-inputsection" placeholder="Service Title"/>
                    </form>
                </div>
                <div className="col-6">
                    <form action="">
                        <label>Service Title</label> <br/>
                        <input type="text" className="form-inputsection" placeholder="Service Title"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBooking;