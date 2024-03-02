import React from "react";
import PageTitle from "../Title/PageTitle";
import Loader from "../Loader/Loader";
import { useProducts } from "../../hooks/useProducts";
import { Link } from "react-router-dom";

const ShopPage = () => {
    const { isLoading, items = [] } = useProducts();
    return (
        <section className="shop-page page">
            <div className="container">
                <PageTitle text="OXXXYSHOP" />

                {isLoading ? (
                    <Loader />
                ) : (
                    <ul className="shop-list">
                        {items.map(
                            ({ title, price, sys: { id }, image: { url } }) => {
                                return (
                                    <li className="shop-list__item" key={id}>
                                        <Link
                                            className="shop-list__item-link"
                                            to={`/shop/${id}`}
                                        >
                                            <div className="shop-list__item-img">
                                                <img src={url} alt={title} />
                                            </div>
                                            <div className="shop-list__item-info">
                                                <h2 className="shop-list__item-title">
                                                    <span data-text={title}>
                                                        {title}
                                                    </span>
                                                </h2>
                                                <p className="shop-list__item-price">
                                                    {price}$
                                                </p>
                                            </div>
                                        </Link>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                )}
            </div>
        </section>
    );
};

export default ShopPage;
