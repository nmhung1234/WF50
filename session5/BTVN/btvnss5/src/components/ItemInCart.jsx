import React, { useState, useEffect } from "react";
import "./../css/ItemInCart.css";

function ItemInCart(props) {
    const { data, onProductDelete, onChangeQty, price } = props;

    const [imageback, setImageback] = useState([]);
    const [active, setActive] = useState("");
    const [qty, setQty] = useState(data.qty);

    if (qty === 0) {
        onProductDelete(data.code);
    }
    useEffect(() => {
        setQty(data.qty);
    }, [data]);
    let color = data.colors;

    const colorProduct = color.map((element, index) => {
        let value = element.code;
        return (
            <p
                key={index}
                className={value == active ? "active" : ""}
                style={{ backgroundColor: `${value}` }}
                onClick={() => onChangeBack(index)}
            />
        );
    });

    useEffect(() => {
        let object = color.filter((color) => color.code == data.colorSelection);
        // console.log(object);

        let imageSelected = object[0].image;
        // console.log(imageSelected);

        let activecolor = data.colorSelection;
        setImageback([imageSelected]);
        setActive(activecolor);
    }, []);

    

    const onChangeBack = (index) => {
        // console.log(index);

        let newback = color[index].image;
        let activecolor = color[index].code;
        setImageback([newback]);
        setActive(activecolor);
    };

    return (
        <div className="item">
            <img src={imageback[0]} alt="Ảnh sản phẩm" />
            <div className="info">
                <div className="color">{colorProduct}</div>
                <div className="name">{data.name}</div>
                <div className="id-item">{data.code}</div>
                <div className="price-qty">
                    <div className="price">
                        {price} đ
                    </div>
                    <div className="qty">
                        <span>số lượng:</span>
                        <span
                            className="change-qty"
                            onClick={() =>
                                onChangeQty({ id: data.code, sign: "-" })
                            }
                        >
                            -
                        </span>
                        <span>{qty}</span>
                        <span
                            className="change-qty"
                            onClick={() =>
                                onChangeQty({ id: data.code, sign: "+" })
                            }
                        >
                            +
                        </span>
                    </div>
                </div>
                <div
                    className="delete"
                    onClick={() => onProductDelete(data.code)}
                >
                    Xóa
                </div>
            </div>
        </div>
    );
}

export default ItemInCart;
