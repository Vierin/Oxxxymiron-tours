import { SOCIALS } from "../../utils/constants";
import Icon from "../Icon/Icon";

const Socials = ({ ...rest }) => (
    <ul className="socials">
        {SOCIALS.map(({ icon, link }) => (
            <li title={icon} key={link} className="socials-item">
                <a href={link} target="_blank" rel="noreferrer">
                    <Icon name={icon} {...rest} />
                </a>
            </li>
        ))}
    </ul>
);

export default Socials;
