import React, { useState, useEffect } from 'react';
import '../../assets/css/pages/Home.scss';
import SlideShow from '../../component/SlideShow/SlideShow';
import Card4x4 from '../../component/4x4Card/Card4x4';
import Scrollcard from '../../component/Scrollcard/Scrollcard';
import { product } from '../../data/data';
import { ad } from '../../data/images';
export default function Home() {

    // Function to filter products based on category and subcategory
    function filterProducts(categories, subcategories) {
        return product.filter(item =>
            categories.includes(item.category) && subcategories.includes(item.subcategory)
        );
    }
    // Function to filter products based on discount
    function filterProductsByDiscount(discount) {
        return product.filter(item =>
            item.discount >= 50
        );
    }

    function filtersProducts(data) {
        return product.filter(item => item.category == data)
    }

    return (
        <>

            <div className='home'>
                <SlideShow />

                <div className='card_container'>
                    {/* //take data from product */}
                    <Card4x4
                        heading="Smartphones that suit your budget"
                        data={filterProducts(
                            ["Electronics"],
                            ["Smartphones"]
                        )} />
                    <Card4x4
                        heading="50% - 80% off | Men's fashion"
                        data={filterProducts(
                            ["Fashion"],
                            ["Men's Clothing",
                                "Women's Clothing",
                                "Shoes",
                                "Bags",
                                "Accessories",])} />
                    <Card4x4
                        heading="Up to 70% off | Home, kitchen & outdoors"
                        data={filterProducts(
                            ["Home & Furniture"],
                            ["Kitchen & Dining"]
                        )} />
                    <div className="ad">
                        <img src="https://user-images.githubusercontent.com/14011726/94132137-7d4fc100-fe7c-11ea-8512-69f90cb65e48.gif" />
                        <h3>Hello Buyer</h3>
                    </div>
                </div>
                <div className='card_container'>
                    <div className="ad extraAdStryle" >
                        <h3 >Starting ₹129 | Monitors, storage, accessories & more</h3>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/aa23/pdacc/gw/unrec/PC_CC_379x304._SY304_CB599426206_.jpg" />
                    </div>
                    <Card4x4
                        data={filterProducts(
                            ["Electronics"],
                            ["Smartphones"]
                        )} />
                    <div className="ad extraAdStryle" >
                        <h3 style={{ fontSize: "1.5rem " }}>Up to 35% off on medicines</h3>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/AUG23/PC_CC_379x304_AUGART._SY304_CB599354219_.jpg" />
                    </div>
                    <Card4x4
                        data={filterProducts(
                            ["Fashion"],
                            ["Men's Clothing",
                                "Women's Clothing",
                                "Shoes",
                                "Bags",
                                "Accessories",])}
                    />
                </div>
                <Scrollcard heading="Best Discount offer" data={filterProductsByDiscount(product.discount)} value={true} />
                <Scrollcard heading="Funiture For Decorate Home" data={filtersProducts("Home & Furniture")} value={false} />
                <Scrollcard heading="Today fashion" data={filtersProducts("Fashion")} value={false} />
                <Scrollcard heading="Electronic Market" data={filtersProducts("Electronics")} value={true} />

                <div className='card_container'>
                    <Card4x4
                        data={filterProducts(
                            ["Home & Furniture"],
                            ["Kitchen & Dining"]
                        )} />
                    <Card4x4
                        data={filterProducts(
                            ["Fashion"],
                            ["Men's Clothing",
                                "Women's Clothing",
                                "Shoes",
                                "Bags",
                                "Accessories",])}
                    />
                    <div className="ad" style={{ height: "auto" }}>
                        <h3>New Faison Design (Add Section)</h3>
                        <img src={ad} />
                    </div>
                    <Card4x4
                        data={filterProducts(
                            ["Home & Furniture"],
                            ["Furniture",
                                "Home Decor",
                                "Kitchen & Dining",
                                "Bedding & Linens",
                                "Storage & Organization",])}
                    />
                </div>
                <Scrollcard value={false} />
                <div className='card_container'>
                    <Card4x4
                        data={filterProducts(
                            ["Home & Furniture"],
                            ["Furniture",
                                "Home Decor",
                                "Kitchen & Dining",
                                "Bedding & Linens",
                                "Storage & Organization",])}

                    />
                    <div className="ad" style={{ height: "auto" }}>
                        <h3>New Faison Design (Add Section)</h3>
                        <img src={ad} />
                    </div>
                    <div className="ad" style={{ height: "auto" }}>
                        <h3>New Faison Design (Add Section)</h3>
                        <img src={ad} />
                    </div>
                    <Card4x4
                        data={filterProducts(
                            ["Home & Furniture"],
                            ["Furniture",
                                "Home Decor",
                                "Kitchen & Dining",
                                "Bedding & Linens",
                                "Storage & Organization",])}

                    />
                </div>
                <Scrollcard value={false} />
                <div className='backtotop'>
                    <a href="#">Back to top</a>

                </div>
            </div>
        </>
    );
}