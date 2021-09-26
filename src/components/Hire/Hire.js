import './Hire.css';
import React from 'react';

const Hire = (props) => {
    const { cart } = props;
    let totalCost = 0;
    let find = [];
    let img = [];
    for (const freelancer of cart) {
        totalCost = totalCost + freelancer.salary;
        find = freelancer.name;
        img = freelancer.img;
    }

    return (
        <div className='hire'>
            <h4>Freelancer Added: {cart.length}</h4>
            <h4>Total Cost: $ <span>{totalCost}</span></h4>
            <div className="hidden">
                <img src={img} alt="" />
                <h2>{find}</h2>
            </div>
            <button>Contact Now</button>
        </div>
    );
};

export default Hire;