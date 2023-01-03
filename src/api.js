import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.com/'

const getData = async(url) => {
    const {data} = await axios.get(`${BASE_URL}${url}`)
    return data
}

export default getData;