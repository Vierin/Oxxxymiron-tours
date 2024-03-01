import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTracksItems } from "../reducers/tracksReducer";
import Section from "../Section/Section";
import SectionTitle from "../SectionTitle/SectionTitle";
import ScrollAnimation from "react-animate-on-scroll";
import Icon from "../Icon/Icon";

const Tracks = () => {
    const dispatch = useDispatch();

    const { items = [], isLoading } = useSelector(({ tracks }) => tracks);

    useEffect(() => {
        dispatch(getTracksItems());
    }, [dispatch]);

    return (
        <Section className="tracks-section">
            <div className="container">
                <SectionTitle title="Tracks" />

                {isLoading
                    ? "Loading..."
                    : items
                          .filter((_, i) => i < 3)
                          .map(({ cover, title, sys: { id }, link }) => (
                              <ScrollAnimation
                                  key={id}
                                  className="track-item"
                                  animateIn="fadeInLeft"
                                  animateOut="fadeOutRight"
                              >
                                  <div className="track">
                                      <div className="track-image">
                                          <img src={cover.url} alt={title} />
                                          <Icon name="pause" />
                                      </div>
                                      <p className="track-date"></p>
                                  </div>
                              </ScrollAnimation>
                          ))}
            </div>
        </Section>
    );
};

export default Tracks;
