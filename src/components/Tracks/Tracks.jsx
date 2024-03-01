import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTracksItems } from "../reducers/tracksReducer";
import Section from "../Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";
import ScrollAnimation from "react-animate-on-scroll";
import Icon from "../Icon/Icon";
import { getLocaleDateString } from "../../utils/common";
import { Link } from "react-router-dom";

const Tracks = () => {
    const dispatch = useDispatch();

    const { items = [], isLoading } = useSelector(({ tracks }) => tracks);

    const [audio] = useState(new Audio());
    const [playing, setPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(null);

    useEffect(() => {
        dispatch(getTracksItems());
    }, [dispatch]);

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
                    "Loading..."
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

                                return (
                                    <ScrollAnimation
                                        key={id}
                                        className="track-item"
                                        animateIn="fadeInLeft"
                                        animateOut="fadeOutRight"
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
                                                {playing &&
                                                    currentTrack.sys.id ===
                                                        id && (
                                                        <Icon name="pause" />
                                                    )}
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
                                    </ScrollAnimation>
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
