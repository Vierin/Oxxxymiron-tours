import Section from "../Section/Section";
import SectionTitle from "../Title/SectionTitle";
import TourItem from "./TourItem";
import { Link } from "react-router-dom";
import { sortByDate } from "../../utils/common";
import Loader from "../Loader/Loader";
import { useTourItems } from "../../hooks/useTourItems";

const TourItems = () => {
    const { items = [], isLoading } = useTourItems();

    const filtered = sortByDate(
        items
            .filter(({ soldOut, ticketLink }) => !soldOut && ticketLink)
            .filter((_, i) => i < 5)
    ); // Limit to 5 items

    return (
        <Section className="tour">
            <div className="container">
                <SectionTitle title="Tour" />
                {isLoading ? (
                    <Loader />
                ) : (
                    <ul className="tour__list">
                        {filtered.map((item, i) => (
                            <TourItem {...item} i={i} key={item.sys.id} />
                        ))}
                    </ul>
                )}
                <Link to="/tour" className="button-more">
                    All concerts
                </Link>
            </div>
        </Section>
    );
};

export default TourItems;
