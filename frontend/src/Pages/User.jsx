import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { secondsToMinutes, secondsToHours } from "../components/validate"
import Logo from '../styles/Images/LogobRed.svg'

export default function Content() {
    const token = localStorage.getItem("token")
    const [user, setUser] = useState({})
    const [edit, setEdit] = useState(false)
    const [time, setTimer] = useState(0)
    const navigate = useNavigate()

    useEffect(() => {
        fetchLogin().then((result) => {
            setUser(result)
        })
        fetchTime().then((result) => {
            setTimer(result)
        })
        //if (user) return navigate("/login")
    }, [])

    async function fetchLogin() {
        const res = await fetch("/api/get-user", {
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

    async function fetchTime() {
        const res = await fetch("/api/time", {
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


    /*       return (
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
                <p> Time watched: {secondsToHours(time)}</p>
                <a href={`/list`}>Lista</a>
            </div>
        )
    }


}*/



    if (edit) {
        return (
            <div className="divEdit">
                <h1>My Account</h1>
                <input
                    className="caixaTexto"
                    type="text"
                    placeholder="Username..."
                    defaultValue={user.username}
                />
                <input className="caixaTexto"

                    type="text"
                    placeholder="Birthday..."
                    defaultValue={user.birthday}
                />
                <input
                    className="caixaTexto"
                    type="text"
                    placeholder="Email..."
                    defaultValue={user.email}
                />

                <button className="buttonSmall"
                    onClick={() => setEdit(false)}
                >Voltar</button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>My Account</h1>
                <p>{user.username}</p>
                <p >Birthday: {user.birthday}</p>
                <p>Email: {user.email}</p>
                <button onClick={() => navigate(`/`)} className="buttonSmall">Voltar</button>

                <div>
                    <button className="buttonSmall"
                        onClick={() => setEdit(true)}
                    >Editar</button>
                </div>
                <p className="timeWatch"> Time whatched: <br /> {secondsToHours(time)}</p>
                <button className="buttonBig" onClick={() => navigate(`/list`)}>Lista</button>
            </div>
        )
    }


}