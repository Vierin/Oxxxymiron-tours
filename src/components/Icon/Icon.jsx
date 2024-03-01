const Icon = ({ name, width, height }) => (
    <svg className={`icon icon-${name}`} style={{ width, height }}>
        <use
            xlinkHref={`${process.env.PUBLIC_URL}/images/sprite.svg#${name}`}
        />
    </svg>
);

export default Icon;
