import { Link } from "react-router-dom";
import logo from "../../images/logo.webp";

const Logo = () => {
    return (
        <div className="logo">
            <Link to="/">
                <img src={logo} alt="oxxxymiron logo" />
            </Link>
        </div>
    );
};

export default Logo;
