import React from 'react';
import hotel from '../../../images/images/Rectangle 396.png';
import img1 from '../../../images/images/Rectangle 407.png';
import img2 from '../../../images/images/Rectangle 408.png';
import img3 from '../../../images/images/Rectangle 409.png';
import img4 from '../../../images/images/Rectangle 410.png';

const Booking = () => {
    return (
        <section className="booking-main">
            <div className="row">
                <div className="col-md-7 p-3">
                    <img src={hotel} alt=""/>
                    <div className="row">
                        <div className="col-md-3 p-3">
                            <img src={img1} alt=""/>
                        </div>
                        <div className="col-md-3 p-3">
                            <img src={img2} alt=""/>
                        </div>
                        <div className="col-md-3 p-3">
                            <img src={img3} alt=""/>
                        </div>
                        <div className="col-md-3 p-3">
                            <img src={img4} alt=""/>
                        </div>
                    </div>
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum perspiciatis incidunt eius necessitatibus reiciendis dicta quod.</p>
                    <h3>Price Details</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci reiciendis ut minus voluptatum perspiciatis ratione quam eius cumque accusamus aperiam?</p>
                    <h3>Property Details</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam, aperiam ipsum obcaecati libero eum dignissimos laborum sint accusantium delectus quasi facere aut illum culpa assumenda fugit iste, accusamus inventore dolores nam cumque totam sit.</p>
                </div>
                <div className="col-md-5"></div>
            </div>
        </section>
    );
};

export default Booking;