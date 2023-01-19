const Notification = ({msg}) => {
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

export default Notification