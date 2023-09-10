import { useEffect, useState } from 'react';
import './SearchPage.scss';
import { useParams, useNavigate, } from 'react-router-dom';
import { BsBag, BsCurrencyRupee, } from 'react-icons/bs';
import { MdDiscount } from 'react-icons/md';
import { product } from '../../data/data';

function SearchPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        min: "",
        max: "",
        product_types: "",
    });
    const [filterData, setFilterData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const item = product[id - 1];
        filterProducts(item);
    }, [id]);

    // Function to filter products based according to serching
    function filterProductsData() {
        if (form.min !== "" && form.max !== "" && form.product_types !== "") {
            const minPrice = parseFloat(form.min);
            const maxPrice = parseFloat(form.max);
            const priceFilteredItems = filterData.filter(item =>
                parseFloat(item.price - Math.floor((item.discount / 100) * item.price)) >= minPrice
                && parseFloat(item.price - Math.floor((item.discount / 100) * item.price)) <= maxPrice
                && form.product_types == item.name.split(' ')[0]
            );
            setFilterData(priceFilteredItems)
        } else if (form.min !== "" && form.max !== "" && form.product_types === "") {
            const minPrice = parseFloat(form.min);
            const maxPrice = parseFloat(form.max);
            const priceFilteredItems = filterData.filter(item =>
                parseFloat(item.price - Math.floor((item.discount / 100) * item.price)) >= minPrice
                && parseFloat(item.price - Math.floor((item.discount / 100) * item.price)) <= maxPrice
            );
            setFilterData(priceFilteredItems)
        }
        else if (form.min === "" && form.max === "" && form.product_types !== "") {
            const priceFilteredItems = filterData.filter(item =>
                form.product_types == item.name.split(' ')[0]
            );
            setFilterData(priceFilteredItems)
        }

    }

    // Function to filter products based according to serching
    function filterProducts(selectedItem) {
        const nameFilteredItems = product.filter(item =>

            item.name.split(' ')[0].toLowerCase().includes(selectedItem.name.split(' ')[0].toLowerCase())
        );
        const subcategoryFilteredItems = product.filter(item =>
            selectedItem.subcategory.includes(item.subcategory)
        );

        const categoryFilteredItems = product.filter(item =>
            selectedItem.category.includes(item.category) && !selectedItem.subcategory.includes(item.subcategory)
        );

        const filteredItems = [
            ...nameFilteredItems,
            ...subcategoryFilteredItems,
            ...categoryFilteredItems,
        ];

        const uniqueFilteredItems = Array.from(new Set(filteredItems.map(item => item.id)))
            .map(id => {
                return filteredItems.find(item => item.id === id);
            });

        setFilterData(uniqueFilteredItems);
    }
    function handleClickonProduct(id) {
        navigate(`/product/${id}`);
    }

    return (
        <div className="serchpage_main_container">
            <div className="filter_box">
                <div className="heading_box">
                    <h3>Filter</h3>
                    <p onClick={(e) => setForm(
                        {
                            project: "",
                            min: 0,
                            max: 0,
                            budget_types: "",
                            jobtype: "",
                            skills: [],
                        }
                    )}>Clear All</p>
                </div>
                <div className="price_box">
                    <h3>Price</h3>
                    <div className='input_box'>
                        <input
                            type="text"
                            name='min'
                            placeholder='min'
                            value={form.min}
                            onChange={(e) => setForm({ ...form, min: e.target.value })}

                        />
                        <p>to</p>
                        <input
                            type="text"
                            name='max'
                            placeholder='max'
                            value={form.max}
                            onChange={(e) => setForm({ ...form, max: e.target.value })}

                        />
                    </div>
                </div>
                <div className="product_box">
                    <h3>Product</h3>

                    <div className="options">
                        <select
                            name="product_types"
                            value={form.product_types}
                            onChange={(e) => setForm({ ...form, product_types: e.target.value })}
                        >
                            {Array.from(new Set(filterData.map((item) => item.name.split(' ')[0])))
                                .map((uniqueName, index) => (
                                    <option key={index} value={uniqueName}>
                                        {uniqueName}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>

                <button onClick={filterProductsData}>Apply</button>
            </div>
            <div className="posts_box">
                <div className="posts_box_header">
                    <div>
                        <p>{filterData.length} items found</p>
                    </div>
                </div>

                {filterData.map((item, index) => (
                    <div key={index} className="post_card" onClick={((e) => handleClickonProduct(item.id))}>
                        <div className='post_img_container'>
                            <img src={item.imgUrl[0]} alt="postimg" />
                        </div>
                        <div className='post_detail_container'>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>

                            <div className="detail">

                                <span className='iconwithdata price'><BsCurrencyRupee />{item.price - Math.floor((item.discount / 100) * item.price)}</span>
                                <span className='iconwithdata realprice'><BsBag />{item.price}</span>
                                <span className='iconwithdata discount'><MdDiscount />{item.discount}%</span>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
export default SearchPage;