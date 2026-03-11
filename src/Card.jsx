function Card(props) {
    return (
        <div>
            {/* continutul componentei */}
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;