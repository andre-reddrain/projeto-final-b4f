import { useEffect, useState } from "react"

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [toggle, setToggle] = useState(false)
    const [errors, setErrors] = useState([])

    function handleUserInput(e, input) {
        input === "username" ? setUsername(e.target.value.trimStart()) : setPassword(e.target.value.trimStart())
    }

    function handleSubmit(e) {
        console.log(username, password)
        e.preventDefault()

        // Validações!

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
                <input type={toggle ? "text" : "password"} value={password} onChange={(e) => handleUserInput(e, "password")}></input>
                <button type="button"
                    onMouseDown={() => setToggle(!toggle)}
                    onMouseUp={() => setToggle(!toggle)}
                >Mostrar</button>
                <input type="submit"></input>
            </form>
        </div>
    )
}