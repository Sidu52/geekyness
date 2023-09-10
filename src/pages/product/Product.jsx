import React, { useState } from 'react'
import '../../assets/css/pages/Product.scss';
import { useParams } from 'react-router-dom';
import { IoStarSharp } from 'react-icons/io5';
import { TbTruckDelivery, TbPigMoney, TbReplaceFilled, TbTruckReturn, TbBrandMyOppo } from 'react-icons/tb';
import { product } from '../../data/data';

export default function Product() {
    const { id } = useParams();
    const item = product[id - 1]

    const [MainImages, setMainImages] = useState(item.imgUrl[0]);

    const offer = [
        {
            heading: "No Const EMI",
            data: "No Cost EMI Upto ₹179.80 EMI interest savings on Amazon Pay ICICI Bank Credit Cards, Bajaj Finserv EMI cardsUpto ₹179.80 EMI interest savings on Amazon Pay ICICI…"
        },
        {
            heading: "Bank Offer",
            data: "10% Instant Discount up to INR 1250 on SBI Credit Card Non-EMI Trxn. Min purchase value INR 5000"
        },
        {
            heading: "Caseback",
            data: "Amazon Pay Rewards - Earn Rs. 100 cashback when you shop for Rs.1000 or more using UPI Collect your offer here"
        },
    ]


    // Calculate the discount percentage
    const discount = Math.floor((item.discount / 100) * item.price);
    const sellingprice = item.price - discount;
    return (
        <>
            <div className="item_main">
                <div className="img_cotainer">
                    {item.imgUrl.map((image, index) => (
                        <img src={image} key={index} onClick={((e) => setMainImages(image))} />
                    ))}

                </div>
                <div className="big_img_container">
                    <img src={MainImages} />
                </div>
                <div className="data_container">
                    <h3>{item.name}</h3>
                    <div className='raiting'>
                        <p>Rating:
                            {Array.from({ length: 5 }, (_, index) => (
                                <IoStarSharp style={{ color: index < 3 ? "yellow" : "gray" }} key={index} />
                            ))}
                        </p>
                        <p>6,111 ratings</p>
                        <hr />
                        <p>190 questions</p>

                    </div>
                    <hr />
                    <p className='discount'><p style={{ color: "red" }}>-{item.discount}%</p> ₹{sellingprice}</p>
                    <p style={{ color: "gray", textDecoration: "line-through" }}>MRP Price: {item.price}</p>
                    <hr />
                    <div className="offer_box">
                        {offer.map((data, index) => (
                            <div key={index}>
                                <h3>{data.heading}</h3>
                                <p>{data.data}</p>
                            </div>
                        ))}

                    </div>
                    <hr />
                    <div className="serviece">
                        <span>
                            <TbTruckDelivery />
                            <p>Free Delivery</p>
                        </span>
                        <span>
                            <TbPigMoney />
                            <p>Pay on Delivery</p>
                        </span>
                        <span>
                            <TbReplaceFilled />
                            <p>Replacement</p>
                        </span>
                        <span>
                            <TbTruckReturn />
                            <p>7 day Return Policy</p>
                        </span>
                        <span>
                            <TbBrandMyOppo />
                            <p>Top Brand</p>
                        </span>
                    </div>

                    <hr />
                    <div className="decription">
                        <h3>About this item</h3>
                        <div>
                            {item.description}
                        </div>
                    </div>
                    <div className='button_contianer'>
                        <button className='buynow'>Buy Now</button>
                        <button className='addtocart'>Add to Cart</button>
                    </div>
                </div>

            </div>
        </>
    )
}
