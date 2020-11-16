import React from 'react';
import house from '../../../images/images/Rectangle 394.png';
import './RentCollection.scss';

const RentCollection = () => {
    return (
        <div className='container mb-5 rent-collection'>
            <div className='text-center'>
                <h5>House Rent</h5>
                <h2 className="">Discover the latest Rent <br/>
                    available today</h2>
            </div>

            {/* services */}
            <div className="row">
                <div className="col-4 border">
                    <div className='p-3 align-center wrapper'>
                        <div className="img">
                            <img className="img-fluid" src={house} alt=""/>
                        </div>
                        <h4>Washington Avenue</h4>
                        <p>Nasirabad H/S, Chattogram</p>
                        <div className="d-flex">
                            <p>3 Bedrooms</p>
                            <p className='ml-auto'>2 Bathroom</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 border">
                    <div className='p-3 align-center'>
                        <div className="img">
                            <img className="img-fluid" src={house} alt=""/>
                        </div>
                        <h5>Washington Avenue</h5>
                        <p>Nasirabad H/S, Chattogram</p>
                        <div className="d-flex">
                            <p>3 Bedrooms</p>
                            <p className='ml-auto'>2 Bathroom</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 border">
                    <div className='p-3 align-center'>
                        <div className="img">
                            <img className="img-fluid" src={house} alt=""/>
                        </div>
                        <h5>Washington Avenue</h5>
                        <p>Nasirabad H/S, Chattogram</p>
                        <div className="d-flex">
                            <p>3 Bedrooms</p>
                            <p className='ml-auto'>2 Bathroom</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 border">
                    <div className='p-3 align-center'>
                        <div className="img">
                            <img className="img-fluid" src={house} alt=""/>
                        </div>
                        <h5>Washington Avenue</h5>
                        <p>Nasirabad H/S, Chattogram</p>
                        <div className="d-flex">
                            <p>3 Bedrooms</p>
                            <p className='ml-auto'>2 Bathroom</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 border">
                    <div className='p-3 align-center'>
                        <div className="img">
                            <img className="img-fluid" src={house} alt=""/>
                        </div>
                        <h5>Washington Avenue</h5>
                        <p>Nasirabad H/S, Chattogram</p>
                        <div className="d-flex">
                            <p>3 Bedrooms</p>
                            <p className='ml-auto'>2 Bathroom</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 border">
                    <div className='p-3 align-center'>
                        <div className="img">
                            <img className="img-fluid" src={house} alt=""/>
                        </div>
                        <h5>Washington Avenue</h5>
                        <p>Nasirabad H/S, Chattogram</p>
                        <div className="d-flex">
                            <p>3 Bedrooms</p>
                            <p className='ml-auto'>2 Bathroom</p>
                        </div>
                    </div>
                </div>
                <div className="col-4 border">
                    <div className='p-3 align-center'>
                        <div className="img">
                            <img className="img-fluid" src={house} alt=""/>
                        </div>
                        <h5>Washington Avenue</h5>
                        <p>Nasirabad H/S, Chattogram</p>
                        <div className="d-flex">
                            <p>3 Bedrooms</p>
                            <p className='ml-auto'>2 Bathroom</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* service done   */}

        </div>
    );
};

export default RentCollection;