import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/style.css';

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [toggle, setToggle] = useState(false)
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    function handleUserInput(e, input) {
        input === "email" ? setEmail(e.target.value.trimStart()) : setPassword(e.target.value.trimStart())
    }

    function handleSubmit(e) {
        e.preventDefault()

        // TODO Validações Login Frontend

        login(email, password) // Vai enviar para o back-end
    }

    useEffect(() => {
        localStorage.setItem('token', null)
    }, [])

    async function login(email, password) {
        const res = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const json = await res.json()
        if (res.status !== 400) {
            localStorage.setItem('token', json.token)
            navigate("/catalog")
        }
    }

    /*
<div>
            <form onSubmit={handleSubmit}>
                {errors.length > 0
                    && <span style={{ color: "red" }}>{errors}</span>}
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => handleUserInput(e, "email")} /> <br />
                <label>Password</label>
                <input type={toggle ? "text" : "password"} value={password} onChange={(e) => handleUserInput(e, "password")}></input>
                <button type="button"
                    onMouseDown={() => setToggle(!toggle)}
                    onMouseUp={() => setToggle(!toggle)}
                >Mostrar</button>
                <input type="submit"></input>
            </form>
        </div>
    */

    return (
        <div>
            <div>
                <form className='formPassword' onSubmit={handleSubmit}>
                    {errors.length > 0
                        && <span style={{ color: "red" }}>{errors}</span>}
                    <div>
                        <p>LOGO</p>
                    </div>

                    <div className='formLogin'>
                        <label className="textEmail">E-mail</label> 
                <input type="text" className="caixaemail" value={email} onChange={(e) => handleUserInput(e, "email")} /> <br /><br></br>
                    </div>


                    <div className='formLogin'>
                        <label className="textPassword">Password</label>
                        <div>
                        <input type={toggle ? "text" : "password"} className="caixapassword" value={password} onChange={(e) => handleUserInput(e, "password")}>
                        </input>
                        </div>
                    </div>
                    <div className="review">
                        Forget password
                    </div><br></br>
                        <div className='formLogin'>
                    <input type="submit" className="buttonBig" value="Login"></input>
                    </div>
                    <div className='formLogin'>
                    <input type="submit" className="buttonBig2" value="Create account"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}