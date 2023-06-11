import { useState } from "react"

function Register() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        const data = { name, email, password, passwordConfirmation }
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col mx-auto md:w-96 w-full">

                <h1 className="heading">Register</h1>

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
                        autoComplete="name" />
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
                        autoComplete="email" />
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