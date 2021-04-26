import React from "react";
import './App.css';

import Card from './components/Card'
function App() {

  const productsArr = [
    {
      title: 'áo phông có cổ',
      image: 'https://picsum.photos/100/120',
      price: '300.000',
      sale: 20
    },
    {
      title: 'Váy đầm thời trang',
      image: 'https://picsum.photos/100/120',
      price: '100.000',
      sale: 40
    },
    {
      title: 'Sơ mi nam',
      image: 'https://picsum.photos/100/120',
      price: '100.000',
      sale: 15
    },
    {
      title: 'Jeans rách gối',
      image: 'https://picsum.photos/100/120',
      price: '300.000',
      sale: 10
    }
  ];

  let items = productsArr.map((item, index) => {
    return (
      <Card key={index} title={item.title} image={item.image} price={item.price} sale={item.sale} />
    );
  });

  return <div className="App">{items}</div>;
}

export default App;
