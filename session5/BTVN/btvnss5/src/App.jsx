import React, { useState } from "react";

import Nav from "./components/Nav";
import Promo from "./components/Promo";
import Product from "./components/Product";
import Footer from "./components/Footer";

import "./App.css";

import data from "./data.json";

function App() {
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState("");

    const onSearch = async (value) => {
        let val = value;
        await setSearch(() => val);
    };

    const onAddToCart = (product) => {
        // console.log(product);
        const newCart = JSON.parse(JSON.stringify(cart));
        let reFormProduct = {
            ...product,
            qty: product.qty === undefined ? 1 : product.qty + 1,
        };

        const index = cart.findIndex((item) => item.code === product.code);
        // console.log(index);
        if (index != -1) {
            newCart[index].qty = newCart[index].qty + 1;
            setCart(newCart);
        } else {
            setCart([...cart, reFormProduct]);
        }
    };

    const onProductDelete = (codeDel) => {
        console.log(codeDel);
        const newCart = cart.filter((item) => item.code != codeDel);
        setCart(newCart);
    };
    const onChangeQty = (obj) => {
        // console.log(obj);

        const newCart = JSON.parse(JSON.stringify(cart));
        const index = cart.findIndex((item) => item.code === obj.id);

        if (index != -1 && obj.sign == "+") {
            newCart[index].qty = newCart[index].qty + 1;
            setCart(newCart);
        }
        if (index != -1 && obj.sign == "-") {
            newCart[index].qty = newCart[index].qty - 1;
            setCart(newCart);
        }
    };

    let cate = [];
    data.map((element) => {
        cate.push(element.category);
    });
    const hmm = Array.from(new Set(cate));

    let products = hmm.map((category, index) => {
        let dataMatchCategories = data.filter((item) => {
            return item.category == category;
        });
        return (
            <Product
                key={index}
                category={category}
                data={dataMatchCategories}
                onAddToCart={onAddToCart}
                search={search}
            />
        );
    });

    return (
        <div className="App">
            <Nav
                selectedItem={cart}
                onProductDelete={onProductDelete}
                onSearch={onSearch}
                onChangeQty={onChangeQty}
            />
            {search ? "" : <Promo />}

            {products}
            <Footer />
        </div>
    );
}

export default App;
