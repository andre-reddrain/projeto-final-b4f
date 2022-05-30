import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Signup() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [birthday, setBirthday] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmedPassword] = useState("")
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem('token', null)
    }, [])

    function handleUserInput(e, input) {
        if (input === "username") setUsername(e.target.value.trimStart())
        else if (input === "password") setPassword(e.target.value.trimStart())
        else if (input === "email") setEmail(e.target.value.trimStart())
        else if (input === "birthday") setBirthday(e.target.value.trimStart())
        else if (input === "confirmPassword") setConfirmedPassword(e.target.value.trimStart())
        //else setConfirmedPassword(e.target.value.trimStart())
    }

    function handleSubmit(e) {
        //console.log(username, email, birthday, password, confirmPassword)
        e.preventDefault()

        // TODO Validações Signup Frontend

        signup(username, email, birthday, password, confirmPassword) // Vai enviar para o back-end
    }

    async function signup(username, email, birthday, password, confirmPassword) {
        const res = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                birthday: birthday,
                password: password,
                confirmPassword: confirmPassword
            })
        })
        const json = await res.json()
        if (res.status == 200) {
            localStorage.setItem('token', json.token)
            navigate("/list") // vai mas o token tá fudido
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {errors.length > 0
                    && <span style={{ color: "red" }}>{errors}</span>
                }

                <label>Username</label>
                <input type="text" value={username} onChange={(e) => handleUserInput(e, "username")} /> <br />

                <label>Email</label>
                <input type="text" value={email} onChange={(e) => handleUserInput(e, "email")} /> <br />

                <label>Birthday</label>
                <input type="text" value={birthday} onChange={(e) => handleUserInput(e, "birthday")} /> <br />

                <label>Password</label>
                <input type="password" value={password} onChange={(e) => handleUserInput(e, "password")} /> <br />

                <label>Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={(e) => handleUserInput(e, "confirmPassword")} />

                <input type="submit" />
            </form>
        </div>
    )
}