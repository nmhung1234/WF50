import React, { useState, useEffect } from "react";
import "./../css/Nav.css";

import shoppingicon from "./../asset/icon/shopping-bag.svg";
import searchicon from "./../asset/icon/search.svg";
import ItemInCart from "./ItemInCart";

function Nav(props) {
    const { selectedItem, onProductDelete, onSearch, onChangeQty } = props;

    const [showModal, setShowModal] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQty, setTotalQty] = useState(0);

    useEffect(() => {
        if (selectedItem) {
            let price = selectedItem.reduce((total, current) => {
                return Number(total) + Number(current.price) * current.qty;
            }, 0);
            setTotalPrice(price);
        }
    }, [selectedItem]);

    useEffect(() => {
        if (selectedItem) {
            let qty = selectedItem.reduce((total, current) => {
                return Number(total) + Number(current.qty);
            }, 0);

            setTotalQty(qty);
        }
    }, [selectedItem]);

    const onSearchVal = async (e) => {
        let value = e.target.value;
        await setSearchValue(() => value);
        onSearch(value);
    };
    const onShowModal = (value) => {
        setShowModal(value);
    };

    const format_curency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    };
    
    let produscts = selectedItem.map((item) => {
        // let totalqty = selectedItem.map((item) =>{
        //     console.log(item);
        // })

        return (
            <ItemInCart
                key={item.code}
                data={item}
                price={format_curency(item.price)}
                onProductDelete={onProductDelete}
                onChangeQty={onChangeQty}
            />
        );
    });

    return (
        <div className="header">
            <div className="nav">
                <div className="logo">
                    <img
                        src="https://i1.wp.com/www.writefromscratch.com/wp-content/uploads/2018/12/demo-logo.png?fit=539%2C244&ssl=1&w=640"
                        alt="Shopify"
                    />
                </div>
                <div className="search-and-cart">
                    <div className="search">
                        <span className="searchicon">
                            <img src={searchicon} alt="" />
                        </span>
                        <input
                            type="text"
                            value={searchValue}
                            placeholder="Bạn đang tìm gì?"
                            onChange={onSearchVal}
                        />
                    </div>

                    <span className="cart">
                        <div className="numberitem">{selectedItem.length}</div>
                        <img
                            src={shoppingicon}
                            alt=""
                            onClick={() => onShowModal(true)}
                        />

                        <div
                            className="modal"
                            style={
                                showModal == false
                                    ? {
                                          transform: "translate(0, -30%)",
                                          background: "rgba(0, 0, 0, 0)",
                                          opacity: "0",
                                          height: 0,
                                          width: 0,
                                      }
                                    : {
                                          transform: "translate(-88%, -48px)",
                                          background: "rgba(0, 0, 0, 0.603)",
                                          opacity: "1",
                                          width: "99vw",
                                          height: "100vh",
                                      }
                            }
                        >
                            <div className="detail-cart">
                                <div className="cart">Giỏ hàng</div>
                                <div className="list-item">{produscts}</div>
                                <div className="total">
                                    <div className="totall total-qty">
                                        <p>Số lượng sản phẩm:</p>
                                        <p>{totalQty}</p>
                                    </div>
                                    <div className="totall total-price">
                                        <p>Tổng giá trị:</p>
                                        <p>{format_curency(totalPrice)} đ</p>
                                    </div>
                                </div>
                                <div
                                    className="close-modal"
                                    onClick={() => onShowModal(false)}
                                >
                                    Close
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Nav;
