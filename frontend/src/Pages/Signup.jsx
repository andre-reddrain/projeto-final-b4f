import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/style.css'
import Logo from '../styles/Images/LogobRed.svg'

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
        const res = await fetch("/api/signup", {
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
        if (res.status === 200) {
            localStorage.setItem('token', json.token)
            navigate("/list") // vai mas o token tá fudido
        }

        /* <div>
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
        </div>*/
    }

    return (


        <div>
            <div> <img src={Logo} alt="" className="logo" /></div>
            <div className="divSignUp">
                <h1>Welcome to The WATCHER</h1>

                <form onSubmit={handleSubmit}>
                    {errors.length > 0
                        && <span style={{ color: "red" }}>{errors}</span>
                    }
                    <label className="formUsername">Username</label>
                    <input type="text" className="caixaTexto" value={username} onChange={(e) => handleUserInput(e, "username")} /> <br />

                    <label className="formEmail">Email</label>
                    <input type="text" className="caixaTexto" value={email} onChange={(e) => handleUserInput(e, "email")} /> <br />

                    <label className="formBirthday">Birthday</label>
                    <input type="text" className="caixaTexto" value={birthday} onChange={(e) => handleUserInput(e, "birthday")} /> <br />

                    <label className="formPassword">Password</label>
                    <input type="password" className="caixaTexto" value={password} onChange={(e) => handleUserInput(e, "password")} /> <br />

                    <label className="formConfirmPassword">Confirm Password</label>
                    <input type="password" className="caixaTexto" value={confirmPassword} onChange={(e) => handleUserInput(e, "confirmPassword")} />
                    <br />
                    <input type="submit" value="Create Account" className="buttonBig2" />
                </form>
            </div>
        </div>
    )
}