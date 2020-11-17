import React from 'react';
import './Bannner.scss';

const Bannner = () => {
    return (
        <section className="mx-auto banner-section py-5">
            <h2 className='text-center mb-3'>FIND YOUR HOUSERENT</h2>
            <form action="" className='text-center m-5'>
                <input type="text" className='search' name="search" id="search" placeholder=" Search..."/>
                <input type="button" value="Find Now" className="btn searchbtn" />
            </form>
        </section>
    );
};

export default Bannner;