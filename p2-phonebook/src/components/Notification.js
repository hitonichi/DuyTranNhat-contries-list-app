const Notification = ({msg}) => {
    if (msg === null) {
        return null
    }
    else {
        return (
            <div className='noti'>
                {msg}
            </div>
        )
    }
}

export default Notification