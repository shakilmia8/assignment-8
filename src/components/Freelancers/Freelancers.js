import './Freelancers.css';
import React, { useEffect, useState } from 'react';
import Freelancer from '../Freelancer/Freelancer';

const Freelancers = () => {
    const [freelancers, setFreelancers] = useState([]);
    useEffect(() => {
        fetch('./freelancers.json')
            .then(res => res.json())
            .then(data => setFreelancers(data));
    }, [])
    return (
        <div className='freelancers-container'>
            <div className='freelancers'>
                {
                    freelancers.map(freelancer => <Freelancer key={freelancer.key} freelancer={freelancer}></Freelancer>)
                }
            </div>
            <div className='added'>
                <h4>Freelancer Added: </h4>
            </div>
        </div>
    );
};

export default Freelancers;