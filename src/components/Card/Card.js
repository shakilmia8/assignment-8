import './Card.css';
import React from 'react';

const Card = (props) => {
    return (
        <div className="hidden">
            <img src={props.car.img} alt="" />
            <h2>{props.car.name}</h2>
        </div>
    );
};

export default Card;