import React from "react";
import Counter from "./counter";

const CountersList = () => {
    const counters = [
        { id: 0, value: 0, name: "Ненужная вещь" },
        { id: 1, value: 4, name: "Ложка" },
        { id: 2, value: 0, name: "Вилка" },
        { id: 3, value: 0, name: "Тарелка" },
        { id: 4, value: 0, name: "Набор минималиста" },
    ];
    return (
        <>
            {counters.map((counter) => (
                <Counter
                    key={counter.id}
                    value={counter.value}
                    name={counter.name}
                />
            ))}
        </>
    );
};

export default CountersList;
