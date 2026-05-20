function Card(props) {
    return (
        <div className={props.done ? 'project-card project-done' : 'project-card project-todo'}>
            {/* continutul componentei */}
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            {props.onToggle && (
                <button
                    className={props.done ? 'btn-undone' : 'btn-done'}
                    onClick={props.onToggle}
                >
                    {props.done ? 'Marcheaza ca neterminat' : 'Marcheaza ca terminat'}
                </button>
            )}
            {props.onEdit && <button className='btn-edit' onClick={props.onEdit}>Editeaza</button>}
            {props.onDelete && <button className='btn-delete' onClick={props.onDelete}>Șterge</button>}
        </div>
    );
}

export default Card;