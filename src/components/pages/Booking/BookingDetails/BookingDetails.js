// import React, { useEffect, useState } from "react";
// import Axios from "axios";
// import { useForm } from "react-hook-form";
// import hotel from "../../../images/images/Rectangle 396.png";
// import img1 from "../../../images/images/Rectangle 407.png";
// import img2 from "../../../images/images/Rectangle 408.png";
// import img3 from "../../../images/images/Rectangle 409.png";
// import img4 from "../../../images/images/Rectangle 410.png";
// import "./Booking.scss";

// const Booking = () => {
//     const { register, handleSubmit, errors } = useForm();
//     const onSubmit = (data) => {
//         console.log(data);
//     };

//     return (
//         <section className="booking-main container">
//             <div className="row">
//                 <div className="col-md-7 p-3">
//                     <img src={hotel} alt="" />
//                     <div className="row">
//                         <div className="col-md-3 p-3">
//                             <img src={img1} alt="" />
//                         </div>
//                         <div className="col-md-3 p-3">
//                             <img src={img2} alt="" />
//                         </div>
//                         <div className="col-md-3 p-3">
//                             <img src={img3} alt="" />
//                         </div>
//                         <div className="col-md-3 p-3">
//                             <img src={img4} alt="" />
//                         </div>
//                     </div>
//                     <h2>Lorem ipsum dolor sit amet.</h2>
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum perspiciatis incidunt eius
//                         necessitatibus reiciendis dicta quod.
//                     </p>
//                     <h3>Price Details</h3>
//                     <p>
//                         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci reiciendis ut minus
//                         voluptatum perspiciatis ratione quam eius cumque accusamus aperiam?
//                     </p>
//                     <h3>Property Details</h3>
//                     <p>
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam, aperiam ipsum
//                         obcaecati libero eum dignissimos laborum sint accusantium delectus quasi facere aut illum culpa
//                         assumenda fugit iste, accusamus inventore dolores nam cumque totam sit.
//                     </p>
//                 </div>
//                 <div className="col-md-5 p-3">
//                     <form className="p-5 pt-0" onSubmit={handleSubmit(onSubmit)}>
//                         <input
//                             className="form-control py-3 mb-2"
//                             type="name"
//                             name="name"
//                             ref={register({ required: true, pattern: /^[a-zA-Z '.-]*$/ })}
//                             placeholder="FULL NAME"
//                         />
//                         {errors.name && <span>This field is required</span>}
//                         <input
//                             className="form-control py-3 mb-2"
//                             type="number"
//                             name="number"
//                             ref={register({ required: true, maxLength: 13 })}
//                             placeholder="PHONE NO."
//                         />
//                         {errors.number && <span>This field is required</span>}
//                         <input
//                             className="form-control py-3 mb-2"
//                             type="email"
//                             name="email"
//                             ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
//                             placeholder="EMAIL ADDRESS"
//                         />
//                         {errors.email && <span>This field is required</span>}
//                         <textarea
//                             className="form-control py-3 mb-2"
//                             name="massage"
//                             rows="10"
//                             ref={register({ required: true })}
//                             placeholder="MASSAGE"
//                         ></textarea>
//                         <input className="form-control btn mb-2" type="submit" value="Request Booking" />
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Booking;
