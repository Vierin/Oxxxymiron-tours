import { useNewsItems } from "../../hooks/useNewsItems";
import PageTitle from "../Title/PageTitle";
import Loader from "../Loader/Loader";
import { getLocaleDateString } from "../../utils/common";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";

const NewsPage = () => {
    const { items = [], isLoading } = useNewsItems();

    return (
        <section className="news-page page">
            <div className="container">
                <PageTitle text="All News" />

                {isLoading ? (
                    <Loader />
                ) : (
                    <div className="news-list">
                        {items.map(
                            ({ title, date, sys: { id }, cover: { url } }) => {
                                return (
                                    <div className="news-list__item">
                                        <div
                                            className="news-list__item-img"
                                            style={{
                                                backgroundImage: `url(${url})`,
                                            }}
                                        ></div>
                                        <div className="news-list__item-info">
                                            <p className="news-list__item-date">
                                                {getLocaleDateString(date, {
                                                    month: "short",
                                                })}
                                            </p>
                                            <h2 className="news-list__item-title">
                                                {title}
                                            </h2>
                                            <Link
                                                to={`/news/${id}`}
                                                className="news-list__item-button"
                                            >
                                                <span>Read</span>
                                                <Icon name="arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            }
                        )}
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsPage;
