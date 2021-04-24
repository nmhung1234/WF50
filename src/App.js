import React from "react";
import styled from 'styled-components';

import "./App.css";

import Card from "./components/Card/Card";
import ExpenseItem from "./components/Card/ExpenseItem/ExpenseItem";
import ExpenseForm from './components/ExpenseForm/ExpenseForm';

function App() {
    const titlearr = [
        {
            price: 20,
            description: 'New Shose',
            date: new Date(2020, 4, 22)
        },
        {
            price: 200,
            description: 'Bike',
            date: new Date(2021, 3, 10)
        },
        {
            price: 500,
            description: 'Phone',
            date: new Date(2019, 7, 20)
        },
        {
            price: 1000,
            description: 'Laptop',
            date: new Date(2018, 12, 5)
        }
    ]

    let items = titlearr.map((item, index) => {
        return (
            <ExpenseItem key={index} date={item.date} price={item.price} title={item.description} />
        );
    });
    return (
        <>
            <ExpenseForm />
            <Card> {items}</Card>


        </>
    )
}

export default App;
