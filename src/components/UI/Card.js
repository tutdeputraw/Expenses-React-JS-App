const Card = (props) => {
    const classes = "card " + props.className + " rounded-3xl";
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;