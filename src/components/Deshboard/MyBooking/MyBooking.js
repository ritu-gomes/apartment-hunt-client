import React from 'react';
import { Table } from "react-bootstrap";
import './MyBooking.scss'

const MyBooking = () => {
    return (
        <div>
            <div className="d-flex justify-content-between">
        <h4>Booking List</h4>
        <h4>User Name</h4>
      </div>

            <Table class='table borderless  ' striped bordered hover>
          <thead>
            <tr className='pt-5 mt-5'>
              <th>House Name</th>
              <th>Price</th>
              <th>Status No</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>Abir vila</td>
              <td>1200$</td>
              <td>approve
              </td>
            </tr>
            
          </tbody>
        </Table>
        </div>
    );
};

export default MyBooking;