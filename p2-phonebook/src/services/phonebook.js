import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const req = axios.get(baseUrl)
    return req.then(response => response.data)
}

const create = (newObj) => {
    const req = axios.post(baseUrl, newObj)
    return req.then(response => response.data)
}


const remove = id => {
    const req = axios.delete(`${baseUrl}/${id}`)
    return req
}
export default {getAll, create, remove}
