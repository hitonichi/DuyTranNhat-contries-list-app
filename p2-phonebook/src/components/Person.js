const Person = ({person, handleDelete}) => {
    return (
        <li>
            <div>{person.name} {person.number}</div>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default Person