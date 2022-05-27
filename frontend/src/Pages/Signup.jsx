import { useEffect, useState } from "react"

export default function Signup() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmedPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleUserInput(e, input) {
        if (input === "username") setUsername(e.target.value.trimStart())
        else if (input === "password") setPassword(e.target.value.trimStart())
        else setConfirmedPassword(e.target.value.trimStart())
    }

    function handleSubmit(e) {
        console.log(username, password, confirmPassword)
        e.preventDefault()

        // TODO Validações Signup Frontend

        // Vai enviar para o back-end
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {errors.length > 0
                    && <span style={{ color: "red" }}>{errors}</span>}
                <label>Username</label>
                <input type="text" value={username} onChange={(e) => handleUserInput(e, "username")} /> <br />
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => handleUserInput(e, "password")}></input> <br />
                <label>Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={(e) => handleUserInput(e, "confirmPassword")}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}