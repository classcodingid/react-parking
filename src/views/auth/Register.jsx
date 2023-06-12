import { useState } from "react"
import useAuth from "../../hooks/useAuth"
import ValidationError from '../../components/ValidationError'

function Register() {

    // menambahkan field penting dari register
    const [nopeg, setNopeg] = useState('')
    const [phone, setPhone] = useState('')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const { register, errors } = useAuth()

    // proses simpan
    async function handleSubmit(event) {
        event.preventDefault()
        await register({ nopeg, phone, name, email, password, password_confirmation: passwordConfirmation })
        setPassword('')
        setPasswordConfirmation('')

    }
    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col mx-auto md:w-96 w-full">

                <h1 className="heading">Register</h1>

                {/* nopeg */}
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="nopeg" className="required">Nopeg</label>
                    <input
                        type="number"
                        id="nopeg"
                        name="nopeg"
                        value={nopeg}
                        onChange={event => setNopeg(event.target.value)}
                        className="form-input"
                        autoComplete="nopeg"
                    />
                    <ValidationError errors={errors} field="nopeg" />
                </div>

                {/* phone */}
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="phone" className="required">Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={event => setPhone(event.target.value)}
                        className="form-input"
                        autoComplete="phone"
                    />
                    <ValidationError errors={errors} field="phone" />
                </div>

                {/* register */}
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="name" className="required">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={event => setName(event.target.value)}
                        className="form-input"
                        autoComplete="name"
                    />
                    <ValidationError errors={errors} field="name" />
                </div>

                {/* email */}
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        className="form-input"
                        onChange={event => setEmail(event.target.value)}
                        autoComplete="email"
                    />
                    <ValidationError errors={errors} field="email" />
                </div>

                {/* password */}
                <div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="password" className="required">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        className="form-input"
                        autoComplete="new-password"
                    />
                    <ValidationError errors={errors} field="password" />
                </div>
                {/* confirm password */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="password_confirmation" className="required">Confirm Password</label>
                    <input
                        id="password_confirmation"
                        name="password_confirmation"
                        type="password"
                        value={passwordConfirmation}
                        onChange={event => setPasswordConfirmation(event.target.value)}
                        className="form-input"
                        autoComplete="new-password"
                    />
                </div>

                <div className="border-t h-[1px] my-6"></div>

                {/* button */}
                <div className="flex flex-col gap-2 mb-4">
                    <button
                        type="submit"
                        className="btn btn-primary">
                        Register
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Register