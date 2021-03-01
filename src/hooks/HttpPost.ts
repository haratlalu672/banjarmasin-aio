import { useEffect, useState } from 'react'
import axios from "axios";

function useAxiosPost(url: any) {
    const [request, setRequest] = useState({
        loading: false,
        data: null,
        error: false
    })
    // , {headers: {'Access-Control-Allow-Origin' : '*'}}
    useEffect(() => {
        setRequest({
            loading: true,
            data: null,
            error: false
        })
        axios.post(url).then(response => {
            setRequest({
                loading: false,
                data: response.data,
                error: false
            })
        })
            .catch(() => {
                setRequest({
                    loading: false,
                    data: null,
                    error: true
                })
            })
    }, [url])
    return request
}

export default useAxiosPost