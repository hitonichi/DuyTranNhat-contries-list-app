const Form = ({newName, newNumber, handleNameChange, handleNumberChange, handleAddPerson}) => {
    return (
        <div>
            <h2>Add new Contacts</h2>
            <form onSubmit={handleAddPerson}>
                <div>
                name:
                <input
                    value={newName}
                    onChange={handleNameChange}
                    placeholder='new person...'></input>
                </div>
                <div>
                Contacts:
                <input
                    value={newNumber}
                    onChange={handleNumberChange}
                    placeholder='new phone number...'></input>
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default Form