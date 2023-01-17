const Country = ({country}) => {
    console.log(country.flags.png);
    return (
        <div>
            <h1>{country.name.official}</h1>
            <div>Capital: {country.capital}</div>
            <div>Area: {country.area}</div>
            <h2>Languages:</h2>
            <ul>
                {Object.values(country.languages).map(lang => (<li key={lang}>{lang}</li>))}
            </ul>
            <img src={country.flags.png}></img>
        </div>
    )
}

export default Country