import { AnimationOnScroll } from "react-animation-on-scroll";

const SectionTitle = ({ title }) => {
    return (
        <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutLeft"
        >
            <h2>{title}</h2>
        </AnimationOnScroll>
    );
};

export default SectionTitle;
