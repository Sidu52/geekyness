import React, { useState } from 'react';
import '../../assets/css/component/Header.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo/logo.png';
import { BiSearch } from 'react-icons/bi';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { LiaBarsSolid } from 'react-icons/lia';
import { FaUserCircle } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { product, sidebarData } from '../../data/data';

export default function Header() {
    const [sidebar, setSidebar] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [searchItem, setSearchItem] = useState([]);

    // Handle searching user
    const handleSerach = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
        const userInput = e.target.value.toLowerCase();
        // Filter the items array based on the user's input
        const matchingItems = product.filter(item =>
            item.name.toLowerCase().includes(userInput) ||
            item.category.toLowerCase().includes(userInput) ||
            item.subcategory.toLowerCase().includes(userInput)
        );
        setSearchItem(matchingItems);
    }

    const toggleDropdown = () => {

        setSidebar(!sidebar)

    };

    return (
        <header className='header'>
            <div className="top_header">
                <div className="left">
                    <Link to="/" className="logo">
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="searchBox">
                    <form>
                        <input type="text" placeholder='Search' value={searchValue} onChange={((e) => { handleSerach(e) })} />
                        <div className='seachitem' style={{ display: searchValue && searchItem.length != 0 ? "flex" : "none" }}>
                            {searchItem.map((user, index) => (
                                <Link
                                    key={index}
                                    onClick={(e) => setSearchValue("")}
                                    to={`/items/${user.id}`}
                                    className="searchUserData">
                                    <img src={user.imgUrl} alt="prfile" />
                                    <p>{user.name}</p>
                                </Link>
                            ))}
                        </div>

                        <button><BiSearch /></button>
                    </form>
                </div>
                <div className="right">
                    <div className="cart">
                        <MdOutlineShoppingCart />
                        <p>Cart</p>
                    </div>
                </div>
            </div>
            <div className="bottom_header">
                <div style={{ display: sidebar ? "block" : "none" }} className='sidebar-container'>
                    <div className="sidebar">
                        <div className='cross' onClick={((e) => { toggleDropdown(e, "sidebar") })}><RxCross2 /></div>
                        <div className="head">
                            <FaUserCircle />
                            <h3>Hello, Sonu</h3>
                        </div>
                        {sidebarData.map((data, index) => (
                            <div key={index} className="data">
                                <h3>{data.heading}</h3>
                                {data.subdata.map((data, index) => (
                                    <p key={index}>{data}</p>
                                ))}
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="sroll-data">
                    <p onClick={((e) => { toggleDropdown(e, "sidebar") })}>
                        <span>
                            <LiaBarsSolid />
                            All
                        </span>

                    </p >
                    <p>Selles</p>
                    <p>Pay</p>
                    <p>Electronic</p>
                    <p>Gift Card</p>
                    <p>Buy Again</p>
                    <p>Offers</p>
                    <p>Coupons</p>
                    <p>Health</p>
                    <p>Household & Personal Care</p>
                    <p>Basics Needs</p>
                    <p>Books</p>
                    <p>Subcribe</p>
                </div>

            </div>
        </header>
    )
}
