import React from 'react';
import './Scrollcard.scss';
import { Link } from 'react-router-dom';
import { BsChevronLeft, BsChevronCompactRight } from 'react-icons/bs';
import { cardfirstimg, cardsecondimg, cardthirdimg, cardfourthimg, cardfifthimg, cardsixthimg, cardseventhimg, cardeightmg, cardninthimg, cardtenthimg, cardeleventhimg, cardtwelththimg } from '../../data/images';
export default function Scrollcard(props) {
    const { value, heading, data } = props;
    // const Image = [cardfirstimg, cardsecondimg, cardthirdimg, cardfourthimg, cardfifthimg, cardsixthimg, cardseventhimg, cardeightmg, cardninthimg, cardtenthimg, cardeleventhimg, cardtwelththimg];
    return (
        <div className='scroll_container'>
            <h3>{heading}</h3>
            <div className="card">
                {data && data.map((data, index) => (
                    <Link to={`/product/${data.id}`} key={index}>
                        <img src={data.imgUrl[0]} />
                        <div style={{ display: value ? "block" : "none" }} className='card-offer'>
                            <h4> <span>Upto {data.discount}% off</span> Deal of the day</h4>
                            <p>Hyy this is des</p>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    )
}
