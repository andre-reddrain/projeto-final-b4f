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
        let error = []
        // Validações Username
        if (username == "" || username == undefined) {
            error.push("Por favor introduza um username.")
        }

        // Validações Email
        if (email == "" || email == undefined) {
            error.push("Por favor introduza o seu endereço de email.")
        } else if (!validateEmail(email)) {
            error.push("Por favor introduza um endereço de email válido.")
        }

        // Validações Data de Nascimento
        if (birthday == "" || birthday == undefined) {
            error.push("Por favor introduza uma data de nascimento.")
        }

        // Validações Password
        if (password == "" || password == undefined) {
            error.push("Por favor introduza a sua password.")
        } else if (password.length < 8) {
            error.push("A sua password deve ter no mínimo 8 caracteres.")
        } else if (checkPasswordStrength(password) < 4) {
            error.push("A sua password deve ter pelo menos um número, uma mínuscula, uma maiúscula e um símbolo.")
        }

        // Validações Password Confirmation
        if (password != undefined) {
            if (confirmPassword == "" || confirmPassword == undefined) {
                error.push("Por favor introduza novamente a sua password.")
            } else if (confirmPassword !== password) {
                error.push("As passwords não coincidem.")
            }
        }

        // console.log(error)
        setErrors(error)

        e.preventDefault()

        if (errors.length == 0) {
            signup(username, email, birthday, password, confirmPassword) // Vai enviar para o back-end
        }
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
            navigate("/catalog") // vai mas o token tá fudido
        }
    }

    // Validações
    function validateEmail(email) {
        // Esta expressão regular não garante que email existe, nem que é válido
        // No entanto deverá funcionar para a maior parte dos emails que seja necessário validar.
        const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return EMAIL_REGEX.test(email)
    }

    function checkPasswordStrength(password) {
        if (password.length < 8) return 0;
        const regexes = [
            /[a-z]/,
            /[A-Z]/,
            /[0-9]/,
            /[~!@#$%^&*)(+=._-]/
        ]
        return regexes
            .map(re => re.test(password))
            .reduce((score, t) => t ? score + 1 : score, 0)
    }

    return (
        <div>
            <div> <img src={Logo} alt="" className="logo" /></div>
            <div className="divSignUp">
                <h1>Welcome to The WATCHER</h1>
                {/* {console.log(errors)} */}

                <form onSubmit={handleSubmit}>
                    {
                        errors.map((error, i) => {
                            return <p key={i} style={{ color: "red" }}>{String(error)}</p>
                        })
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