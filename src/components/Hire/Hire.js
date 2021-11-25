import './Hire.css';
import React from 'react';
import Card from '../Card/Card';

const Hire = (props) => {
    const { cart } = props;
    let totalCost = 0;
    for (const freelancer of cart) {
        totalCost = totalCost + freelancer.salary;
    }

    return (
        <div className='hire'>
            <h4>Freelancer Added: {cart.length}</h4>
            <h4>Total Cost: $<span>{totalCost}</span></h4>
            {
                cart.map(car => <Card key={car.key} car={car}></Card>)
            }
            <button>Contact Now</button>
        </div>
    );
};

export default Hire;