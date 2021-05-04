import React, { useEffect, useState } from "react";
import "./../css/Item.css";
function Item(props) {
    const { data, onAddToCart } = props;

    const [imageback, setImageback] = useState([]);
    const [active, setActive] = useState("");

    let color = data.colors;

    useEffect(() => {
        let firstImage = color[0].image;
        let activecolor = color[0].code;
        setImageback([firstImage]);
        setActive(activecolor);
    }, []);

    const onChangeBack = (index) => {
        let newback = color[index].image;
        let activecolor = color[index].code;
        setImageback([newback]);
        setActive(activecolor);
    };

    const handleAddItem = (data) => {
        onAddToCart({ ...data, colorSelection: active });
    };

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

    return (
        <div className="item">
            <img src={imageback[0]} alt="Ảnh sản phẩm" lazyload="true" />
            <div className="color">{colorProduct}</div>
            <div className="name">{data.name}</div>
            <div className="id-item">{data.code}</div>
            <div className="price">
                {data.price.toString().slice(0, 3)}.000 đ
            </div>
            <div className="add-to-card" onClick={() => handleAddItem(data)}>
                + thêm vào giỏ hàng
            </div>
        </div>
    );
}

export default Item;
