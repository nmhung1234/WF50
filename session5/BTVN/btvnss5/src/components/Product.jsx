import React from "react";
import "./../css/Product.css";
import Item from "./Item";

function Product(props) {
    const { category, data, onAddToCart, search, onForPay } = props;
    const format_curency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    };
    let items = data.map((item, index) => {
        let name = item.name;
        let code = item.code;
        if (name.includes(search.toUpperCase()) || code.includes(search.toUpperCase())) {
            return (
                <Item
                    key={index}
                    data={item}
                    price={format_curency(item.price)}
                    onAddToCart={onAddToCart}
                    onForPay={onForPay}
                />
            );
        }
    });

    return (
        <div className="product" id="product">
            <div className="category">{category}</div>
            <div className="items">{items}</div>
        </div>
    );
}

export default Product;
