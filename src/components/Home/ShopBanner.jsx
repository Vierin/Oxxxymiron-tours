import React from "react";
import Section from "../Section/Section";
import { Link } from "react-router-dom";

import logo from "../../images/oxxxyshop.webp";
import bannerImg from "../../images/banner.webp";
import { AnimationOnScroll } from "react-animation-on-scroll";

const ShopBanner = () => (
    <Section className="shop-banner__section">
        <div className="container">
            <div className="shop-banner__wrapper">
                <Link to="/shop" className="shop-banner">
                    <AnimationOnScroll
                        animateIn="animate__fadeInLeft"
                        animateOut="animate__fadeOutLeft"
                        className="shop-banner__text"
                    >
                        <p className="shop-banner__subtitle">
                            Updated merch from Oxxxymiron
                        </p>
                        <p className="shop-banner__title">OXXXYSHOP 2.0</p>
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__fadeInRight"
                        animateOut="animate__fadeOutRight"
                        className="shop-banner__logo"
                    >
                        <img src={logo} alt="OXXXYSHOP" className="shop-logo" />
                    </AnimationOnScroll>
                    <AnimationOnScroll
                        animateIn="animate__fadeInRight"
                        animateOut="animate__fadeOutRight"
                        className="shop-banner__image"
                    >
                        <img src={bannerImg} alt="OXXXYMIRON" />
                    </AnimationOnScroll>
                </Link>
            </div>
        </div>
    </Section>
);

export default ShopBanner;
