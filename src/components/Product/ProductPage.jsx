import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../Title/PageTitle";
import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getProductsItem } from "../reducers/productsReducer";
import Loader from "../Loader/Loader";
import { SIZES } from "../../utils/constants";
import ProductCounter from "./ProductCounter";
import { setCartCount } from "../reducers/cartReducer";

const ProductPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const [activeSize, setActiveSize] = useState(null);
    // eslint-disable-next-line
    const [totalCount, setTotalCount] = useState(null);

    const { item, isLoading } = useSelector(({ products }) => products);

    const toggleSize = useCallback((size) => {
        setActiveSize(size);
    }, []);

    const handleCountChange = (newCount) => {
        setTotalCount(newCount);
    };

    useEffect(() => {
        toggleSize(SIZES[1]);
    }, [toggleSize]);

    useEffect(() => {
        dispatch(getProductsItem(id));
    }, [dispatch, id]);

    const handleAddToCart = () => {
        dispatch(setCartCount());
    };

    return (
        <section className="page news-single">
            <div className="container">
                <PageTitle text="OXXXYSHOP" />
                {isLoading || !item ? (
                    <Loader />
                ) : (
                    <div className="product">
                        {item.image && (
                            <div className="product__img">
                                <img src={item.image.url} alt={item.title} />
                            </div>
                        )}
                        <div className="product__info">
                            <h1 className="product__title">{item.title}</h1>
                            <p className="product__description">
                                {item.description}
                            </p>
                            <ul className="product__sizes">
                                {SIZES.map((size, i) => (
                                    <li
                                        key={i}
                                        className={`product__size${
                                            activeSize === size
                                                ? " is-active"
                                                : null
                                        }`}
                                        onClick={() => toggleSize(size)}
                                    >
                                        {size}
                                    </li>
                                ))}
                            </ul>
                            <ProductCounter onCountChange={handleCountChange} />
                            <button
                                className="product__button button"
                                onClick={handleAddToCart}
                            >
                                <span>Add to cart</span>
                                <span>{item.price}$</span>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductPage;
