import Person from './Person';

const Persons = ({peopleToShow, handleDelete}) => {
    return (
    <ul>
        {peopleToShow.map(person => <Person key={person.name} person={person} handleDelete={() => handleDelete(person.id)}></Person>)}
    </ul>
    )
}

export default Persons