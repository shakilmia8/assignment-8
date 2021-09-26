import './Freelancers.css';
import React, { useEffect, useState } from 'react';
import Freelancer from '../Freelancer/Freelancer';
import Hire from '../Hire/Hire';

const Freelancers = () => {
    const [freelancers, setFreelancers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./freelancers.json')
            .then(res => res.json())
            .then(data => setFreelancers(data));
    }, []);
    const handleClicked = (freelancer) => {
        const newCart = [...cart, freelancer];
        setCart(newCart);
    };
    return (
        <div className='freelancers-container'>
            <div className='added'>
                <Hire cart={cart}></Hire>
            </div>
            <div className='freelancers'>
                {
                    freelancers.map(freelancer => <Freelancer key={freelancer.key} freelancer={freelancer} handleClicked={handleClicked}></Freelancer>)
                }
            </div>
        </div>
    );
};

export default Freelancers;