import Icon from "../Icon/Icon";

import { getLocaleDateString } from "../../utils/common";
import { AnimationOnScroll } from "react-animation-on-scroll";

const TourItem = ({
    date,
    city,
    place,
    ticketLink,
    videoLink,
    soldOut,
    country,
    i,
    offset = 120,
}) => {
    return (
        <li>
            <AnimationOnScroll
                className="tour-item"
                animateIn="animate__fadeInLeft"
                animateOut="animate__fadeOutRight"
                delay={i * 100}
                offset={offset}
            >
                <div className="tour-item__info">
                    <div className="tour-item__date">
                        {getLocaleDateString(date, {})}
                    </div>
                    <p className="tour-item__place">{place}</p>
                </div>

                <p className="tour-item__city">
                    {city}, {country}
                </p>

                {!soldOut ? (
                    <a
                        href={ticketLink || videoLink}
                        target="__black"
                        className="tour-item__button"
                    >
                        {ticketLink ? (
                            <>
                                <span>Tickets</span>
                                <Icon name="arrow-right" />
                            </>
                        ) : (
                            <span>Video</span>
                        )}
                    </a>
                ) : (
                    <button className="tour-item__button soldout">
                        SOLD OUT
                    </button>
                )}
            </AnimationOnScroll>
        </li>
    );
};

export default TourItem;
