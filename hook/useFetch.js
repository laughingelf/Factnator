import { useState } from 'react'
import axios from 'axios'
import { set } from 'react-native-reanimated'

const useFetch = async (endpoint) => {

    console.log(endpoint)

    const [data, setData] = useState('hello')
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState(null)

    const options = {
        method: 'GET',
        url: `https://numbersapi.p.rapidapi.com/${endpoint}`,
        params: {
            fragment: 'false',
            json: 'true'
        },
        headers: {
            'X-RapidAPI-Key': '39af2f4383msha9a56f3ac4a9f8ep12c99ajsn19417c0ac7dd',
            'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await axios.request(options)
            setData(response.data)
            console.log('response', response.data)
        } catch (error) {
            axios.request(options)
            setData(response.data)
        } finally {
            setIsLoading(false)
        }
    }

    fetchData()



    return { data, isLoading, err }
}

export default useFetch