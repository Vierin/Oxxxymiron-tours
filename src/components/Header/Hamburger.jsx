import { useState } from "react";
import { NavLink } from "react-router-dom";

import { MENU } from "../../utils/constants";

import Icon from "../Icon/Icon";
import Logo from "../Logo/Logo";

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="menu-mobile">
            <button className="menu-mobile__button" onClick={toggleMenu}>
                <Icon name="round-menu" />
            </button>

            <nav className={`menu-mobile__list ${isOpen ? "opened" : ""}`}>
                <Logo onClick={toggleMenu} />

                <ul className="menu-mobile__items">
                    {MENU.map(({ link, name }, i) => (
                        <li className="menu-mobile__item" key={link}>
                            <NavLink
                                className={({ isActive }) =>
                                    !link.startsWith("#") && isActive
                                        ? "active"
                                        : ""
                                }
                                to={`/${link}`}
                                onClick={toggleMenu}
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="menu-mobile__button" onClick={toggleMenu}>
                    <Icon name="round-close" />
                </div>
            </nav>
        </div>
    );
};

export default Hamburger;
