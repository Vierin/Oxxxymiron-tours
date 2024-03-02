import React, { useState } from "react";
import Icon from "../Icon/Icon";

const FooterForm = () => {
    const [state, setState] = useState("");

    const handleChange = ({ target: { value } }) => {
        setState(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setState("");
    };

    return (
        <form className="footer-form" onSubmit={handleSubmit}>
            <p>Get concert updates</p>

            <div className="footer-form__email">
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={state}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="footer-form__button">
                <span>Subscribe</span>
                <Icon name="arrow-right" />
            </button>
        </form>
    );
};

export default FooterForm;
