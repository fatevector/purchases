import { useState } from "react";
import Counter from "./counter";

const CountersList = ({ initialState }) => {
    const [counters, setCounters] = useState(initialState);

    const handleDelete = id => {
        setCounters(counters.filter(counter => counter.id !== id));
    };

    const handleReset = () => {
        setCounters(initialState);
    };

    const handleIncrement = id => {
        setCounters(prevState => {
            return prevState.map(counter =>
                counter.id === id
                    ? { ...counter, value: counter.value + 1 }
                    : counter
            );
        });
    };

    const handleDecrement = id => {
        setCounters(prevState => {
            return prevState.map(counter =>
                counter.id === id
                    ? { ...counter, value: counter.value - 1 }
                    : counter
            );
        });
    };

    return (
        <div className="m-2">
            {counters.map(counter => (
                <Counter
                    key={counter.id}
                    {...counter}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                />
            ))}
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={handleReset}
            >
                Сброс
            </button>
        </div>
    );
};

export default CountersList;
