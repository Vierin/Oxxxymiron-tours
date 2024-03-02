import { MENU } from "../../utils/constants";
import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Hamburger from "./Hamburger";
import { useSelector } from "react-redux";

const Header = () => {
    const totalCount = useSelector(({ cart }) => cart.totalCount);

    return (
        <section className="header">
            <div className="container">
                <header>
                    <Logo />
                    <nav className="menu">
                        {MENU.map(({ link, name }, i) => (
                            <AnimationOnScroll
                                key={link}
                                className="menu-item"
                                animateIn="animate__fadeInDown"
                                delay={i * 100}
                                offset={0}
                            >
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "active" : ""
                                    }
                                    to={`/${link}`}
                                >
                                    {name}
                                </NavLink>
                            </AnimationOnScroll>
                        ))}
                    </nav>
                    <button className="cart-btn">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/cart.svg`}
                            alt=""
                        />
                        <span>{totalCount}</span>
                    </button>
                    <Hamburger />
                </header>
            </div>
        </section>
    );
};

export default Header;
