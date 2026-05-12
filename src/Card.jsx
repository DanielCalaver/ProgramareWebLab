function Card(props) {
    return (
        <div>
            {/* continutul componentei */}
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            {props.onDelete && <button onClick={props.onDelete}>Șterge</button>}
        </div>
    );
}

export default Card;