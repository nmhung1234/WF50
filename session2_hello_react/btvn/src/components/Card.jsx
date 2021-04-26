import React from "react";

import "./Card.css";

function Card(props) {
    const { title, image, price, sale } = props;

    return (
        <div className="card">
            <div className="left">
                <img src={image} alt="product" />
                <div className="detail">
                    <p className="title">{title}</p>
                    <p className="price">{price}đ</p>
                    <p className="sale">Giảm giá {sale}%</p>
                </div>

            </div>
            <div className="right">
                <img src="https://icons-for-free.com/iconfiles/png/512/buy+market+multimedia+shop+shopping+store+icon-1320185664922545085.png"/>
            </div>
        </div>
    );
}

export default Card;
