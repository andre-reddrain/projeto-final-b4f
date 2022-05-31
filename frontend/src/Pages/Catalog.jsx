import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { secondsToMinutes, secondsToHours } from "../components/validate"

export default function Catalog() {
    const token = (localStorage.getItem("token") !== "null") ?
        localStorage.getItem("token") :
        null
    const [user, setUser] = useState({})
    const [catalog, setCatalog] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            fetchLogin().then((result) => {
                setUser(result)
            })
        }

        fetchCatalog().then(catalog => {
            setCatalog(catalog)
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

    async function fetchCatalog() {
        const res = await fetch("/catalog", {
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

    return (
        <div>
            <h1>CATALOGGGGGGG</h1>
            {
                token ?
                    <div>
                        <p>{token}</p>
                        <a href={`/user`}>USER: {user.username}</a>
                        <br />
                        <a href={`/login`}>SIGNOUT</a>
                    </div>
                    :
                    <a href={`/login`}>Login</a>
            }
            <br />
            {
                catalog.map((content) => (
                    <div
                        key={content._id}
                    >
                        {
                            content.type === 0 ?
                                <div>
                                    <h2>Serie</h2>
                                    <a href={`/catalog/content/${String(content._id)}`}>Nome: {content.name}</a>
                                    <p>Tempo: {secondsToHours(content.seconds)}</p>
                                </div>
                                :
                                <div>
                                    <h2>Filme</h2>
                                    <a href={`/catalog/content/${String(content._id)}`}>Titulo: {content.title}</a>
                                    <p>Tempo: {secondsToHours(content.seconds)}</p>
                                </div>
                        }
                        {
                            content.image ?
                                <img src={content.image[0]} alt="imagem" width="400" height="600" /> :
                                <img src="future.webp" alt="imagem" width="400" height="600" />
                        }
                        <p>Data de lançamento: {content.releaseDate}</p>
                    </div>
                ))
            }
        </div>
    )
}