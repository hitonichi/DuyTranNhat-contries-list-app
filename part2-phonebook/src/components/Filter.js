const Filter = ({newFilter, handleFilterChange}) => {
    return (
        <input
        value={newFilter}
        onChange={handleFilterChange}
        placeholder='find your contacts'>
        </input>
    )
}

export default Filter