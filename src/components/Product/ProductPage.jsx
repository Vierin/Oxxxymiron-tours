import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../Title/PageTitle";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getProductsItem } from "../reducers/productsReducer";
import Loader from "../Loader/Loader";
import { jsonToText } from "../../utils/common";

const ProductPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { item, isLoading } = useSelector(({ products }) => products);

    useEffect(() => {
        dispatch(getProductsItem(id));
    }, [dispatch, id]);

    return (
        <section className="page news-single">
            <div className="container">
                <PageTitle text="OXXXYSHOP" />
                {isLoading || !item ? (
                    <Loader />
                ) : (
                    <div className="product">
                        <div className="product__img">
                            <img src={item.image.url} alt={item.title} />
                        </div>
                        <div className="product__info">
                            <h1 className="product__title">{item.title}</h1>
                            <p className="product__description">
                                {item.description}
                            </p>
                            <button className="product__button button">
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
