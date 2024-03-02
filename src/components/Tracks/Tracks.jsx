import { useState } from "react";
import Section from "../Section/Section";
import SectionTitle from "../Title/SectionTitle";
import Icon from "../Icon/Icon";
import { getLocaleDateString } from "../../utils/common";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import { useTrackItems } from "../../hooks/useTrackItems";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Tracks = () => {
    const { items = [], isLoading } = useTrackItems();

    const [audio] = useState(new Audio());
    const [playing, setPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);

    const handleTrackClick = (track) => {
        setPlaying((prev) => {
            const isPlaying =
                track.sys.id === currentTrack?.sys.id ? !prev : true;

            audio.src = track.link.url;
            !isPlaying ? audio.pause() : audio.play();

            return isPlaying;
        });

        setCurrentTrack(track);
    };

    return (
        <Section className="tracks-section">
            <div className="container">
                <SectionTitle title="Tracks" />

                {isLoading ? (
                    <Loader />
                ) : (
                    <div>
                        {items
                            .filter((_, i) => i < 3)
                            .map((track) => {
                                const {
                                    cover,
                                    title,
                                    sys: { id },
                                    date,
                                } = track;

                                const iconName =
                                    playing && id === currentTrack?.sys.id
                                        ? "pause"
                                        : "play";

                                return (
                                    <AnimationOnScroll
                                        key={id}
                                        className="track-item"
                                        animateIn="animate__fadeInLeft"
                                        animateOut="animate__fadeOutRight"
                                    >
                                        <div
                                            className="track"
                                            onClick={() =>
                                                handleTrackClick(track)
                                            }
                                        >
                                            <div className="track-image">
                                                <img
                                                    src={cover.url}
                                                    alt={title}
                                                />
                                                <Icon name={iconName} />
                                            </div>
                                            <p className="track-date">
                                                {getLocaleDateString(date, {
                                                    month: "short",
                                                    day: "numeric",
                                                })}
                                            </p>
                                            <h3 className="track-title">
                                                {title}
                                            </h3>
                                        </div>
                                    </AnimationOnScroll>
                                );
                            })}
                    </div>
                )}

                <Link to="/tracks" className="button-more">
                    All tracks
                </Link>
            </div>
        </Section>
    );
};

export default Tracks;
