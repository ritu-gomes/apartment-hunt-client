import React from 'react';
import './Bannner.scss';

const Bannner = () => {
    return (
        <div className=" mx-auto banner-section p-5 m-5">
            <h2 className='text-center'>FIND YOUR HOUSERENT</h2>
            <form action="" className='text-center m-5'>
                <input type="text" className='search' name="search" id="search" placeholder=" Search..."/>
                <input type="button" value="Find Now" className="btn searchbtn" />
            </form>
        </div>
    );
};

export default Bannner;