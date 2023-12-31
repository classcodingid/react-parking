import axios from "axios"
import { useNavigate } from "react-router-dom"
import { route } from "../routes"
import { useEffect, useMemo, useState } from "react"
import { useLocalStorage } from "react-use-storage"

function useAuth() {
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [accessToken, setAccessToken, removeAccessToken] = useLocalStorage('access_token', '')
    const navigate = useNavigate()
    const isLoggedIn = useMemo(() => !!accessToken, [accessToken])

    // use effect hook
    useEffect(() => {
        if (accessToken) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        }
    }, [accessToken])

    // registr
    async function register(data) {
        setErrors({})
        setLoading(true)

        return axios.post('auth/register', data)
            .then((response) => {
                setAccessToken(response.data.access_token)
                navigate(route('vehicles.index'))
            })
            .catch(error => {
                if (error.response.status === 422) {
                    setErrors(error.response.data.errors)
                }
            })
            .finally(() => setLoading(false))
    }

    //login
    async function login(data) {
        setErrors({})
        setLoading(true)

        return axios.post('/auth/login', data)
            .then(response => {
                setAccessToken(response.data.access_token)
                navigate(route('parkings.active'))
            })
            .catch(error => {
                if (error.response.status === 422) {
                    setErrors(error.response.data.errors)
                }
            })
            .finally(() => setLoading(false))
    }

    // logout
    async function logout(force = false) {
        if (!force) {
            await axios.post('auth/logout')
        }

        // destroy token dari client
        removeAccessToken()
        navigate(route('login'))
    }

    return { register, login, errors, loading, isLoggedIn, logout }
}

export default useAuth