import ScrollAnimation from "react-animate-on-scroll";

const SectionTitle = ({ title }) => {
    return (
        <ScrollAnimation animationIn="fadeInLeft" animationOut="fadeOutLeft">
            <h2>{title}</h2>
        </ScrollAnimation>
    );
};

export default SectionTitle;
