import Person from './Person';

const Persons = ({peopleToShow}) => {
    return (
    <ul>
        {peopleToShow.map(person => <Person key={person.name} person={person}></Person>)}
    </ul>
    )
}

export default Persons