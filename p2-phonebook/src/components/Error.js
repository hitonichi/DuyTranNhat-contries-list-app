const Error = ({msg}) => {
    if (msg === null) {
        return null
    }
    else {
        return (
            <div className='error'>
                {msg}
            </div>
        )
    }
}

export default Error