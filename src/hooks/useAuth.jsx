import axios from "axios"
import { useNavigate } from "react-router-dom"
import { route } from "../routes"
import { useState } from "react"

function useAuth() {
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    async function register(data) {
        setErrors({})

        return axios.post('auth/register', data)
            .then(() => {
                navigate(route('vehicles.index'))
            })
            .catch(error => {
                if (error.response.status === 422) {
                    setErrors(error.response.data.errors)
                }
            })
    }
    return { register, errors }
}

export default useAuth