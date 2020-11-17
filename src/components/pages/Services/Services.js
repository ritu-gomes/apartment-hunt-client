import React from 'react';
import service from '../../../images/logos/affordable 1.png'
import './Services.scss';

const Services = () => {
    return (
        <section id="service" className="container service py-5">
            <div className='text-center'>
                <h5>Service</h5>
                <h2 >We're an agency tailored to all <br/>
                clients' needs that always delivers</h2>
            </div>
            <div className="row mt-5 text-center pt-5">
                <div className="col-md-4 ">
                   <div className='p-5 border wrapper'>
                   <div className="img d-inline-block">
                        <img className="img-fluid" src={service} alt=""/>
                    </div>
                    <h5 className='mt-5'>Wide Range of Properties</h5>
                    <p className='px-1'>With a robust selection of popular properties on hand, as well as leading properties from experts.</p>
                   </div>
                </div>
                <div className="col-md-4 text-center">
                   <div className='p-5 border wrapper'>
                   <div className="img d-inline-block">
                        <img className="img-fluid" src={service} alt=""/>
                    </div>
                    <h5 className='mt-5'>Wide Range of Properties</h5>
                    <p className='px-1'>With a robust selection of popular properties on hand, as well as leading properties from experts.</p>
                   </div>
                </div>
                <div className="col-md-4 text-center">
                   <div className='p-5 border wrapper'>
                   <div className="img d-inline-block">
                        <img className="img-fluid" src={service} alt=""/>
                    </div>
                    <h5 className='mt-5'>Wide Range of Properties</h5>
                    <p className='px-1'>With a robust selection of popular properties on hand, as well as leading properties from experts.</p>
                   </div>
                </div>
            </div>
        </section>
    );
};

export default Services;