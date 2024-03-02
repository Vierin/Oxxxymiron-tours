import { useState } from "react";

const ProductCounter = ({ onCountChange }) => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
        setCount((prevCount) => {
            const newCount = prevCount + 1;
            onCountChange(newCount);
            return newCount;
        });
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount((prevCount) => {
                const newCount = prevCount - 1;
                onCountChange(newCount);
                return newCount;
            });
        }
    };

    return (
        <div className="product__counter">
            <span className="product__counter-value">{count}</span>
            <div>
                <button
                    className="product__counter-button"
                    onClick={handleDecrement}
                >
                    -
                </button>
                <button
                    className="product__counter-button"
                    onClick={handleIncrement}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default ProductCounter;
