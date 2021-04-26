import React from "react";
import "./App.css";

import ExpenseItem from "./components/ExpenseItem";

function App() {
    const titlearr = ["Macbook", "Iphone", "SurFace", "Nokia"];

    let items = titlearr.map((item, index) => {
        return (
            <ExpenseItem key={index} price="20" title={item}>
                <button>Click me!</button>
            </ExpenseItem>
        );
    });
    return <div className="App">{items}</div>;
}

export default App;
