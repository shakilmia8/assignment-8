import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Freelancer.css';
import React from 'react';
import Rating from 'react-rating';

const Freelancer = (props) => {
    const { name, role, age, country, salary, img, star } = props.freelancer;
    const cart = <FontAwesomeIcon icon={faCartPlus} />
    return (
        <div className='mx-4 my-4 freelancer'>
            <div className="row row-cols-1 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={img} className="card-img-top" alt="" />
                        <div className="card-body">
                            <p><span>Name :</span> {name}</p>
                            <p><span>Role :</span> {role}</p>
                            <p><span>Age :</span> {age}</p>
                            <p><span>Country :</span> {country}</p>
                            <p><span>Salary :</span> ${salary}</p>
                            <Rating
                                className='rating'
                                initialRating={star}
                                fullSymbol='fas fa-star icon-color'
                                emptySymbol='far fa-star icon-color'
                            />
                            <button onClick={() => props.handleClicked(props.freelancer)}>{cart}  Add to Hire</button>
                            <div className='icon'>
                                <a href="/facebook"><i className="fab fa-facebook-square"></i></a>
                                <a href="/twitter"><i className="fab fa-twitter-square"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Freelancer;