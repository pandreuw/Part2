import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    //   return axios.get(baseUrl) // this code was replaced for the following line which simplify the app reading
    // const request = axios.get(baseUrl)
    // return request.then(response => response.data)

    // modification for the example of errors, note hardcoded
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    // return axios.post(baseUrl, newObject) // simplification of the code
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    // return axios.put(`${baseUrl}/${id}`, newObject) // simplification of the code
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

export default { getAll, create, update }

    // getAll: getAll,
    // create: create,
    // update: update
    // Since the names of the keys and the assigned variables are the same, we can write the object definition with more compact syntax
//     getAll,
//     create,
//     update
// }   