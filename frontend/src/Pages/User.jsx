import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Content() {
    const token = localStorage.getItem("token")
    const [user, setUser] = useState({})
    const [edit, setEdit] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        fetchLogin().then((result) => {
            setUser(result)
        })
        //if (user) return navigate("/login")
    }, [])

    async function fetchLogin() {
        const res = await fetch("/get-user", {
            method: "GET",
            headers: {
                "Authenticate": localStorage.getItem("token")
            }
        })
        const json = await res.json()
        if (res.status === 404) {
            return navigate("/login")
        }
        return json
    }

    if (edit) {
        return (
            <div>
                <h1>USER</h1>
                <p>{token}</p>
                <input
                    type="text"
                    placeholder="Username..."
                    defaultValue={user.username}
                />
                <input
                    type="text"
                    placeholder="Birthday..."
                    defaultValue={user.birthday}
                />
                <input
                    type="text"
                    placeholder="Email..."
                    defaultValue={user.email}
                />
                <a href={`/catalog`}>Voltar</a>
                <button
                    onClick={() => setEdit(false)}
                >Voltar</button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>USER</h1>
                <p>{token}</p>
                <p>{user.username}</p>
                <p>Birthday: {user.birthday}</p>
                <p>Email: {user.email}</p>
                <a href={`/catalog`}>Voltar</a>
                <button
                    onClick={() => setEdit(true)}
                >Editar</button>
            </div>
        )
    }


}