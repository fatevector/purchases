import React from "react";
import CountersList from "./components/countersList";

const App = () => {
    const initialState = [
        { id: 0, value: 0, name: "Ненужная вещь" },
        { id: 1, value: 4, name: "Ложка" },
        { id: 2, value: 0, name: "Вилка" },
        { id: 3, value: 0, name: "Тарелка" },
        { id: 4, value: 0, name: "Набор минималиста" }
    ];
    return <CountersList {...{ initialState }} />;
};

export default App;
