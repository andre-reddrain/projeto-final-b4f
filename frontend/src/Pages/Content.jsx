import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { secondsToMinutes, secondsToHours } from "../components/validate"

export default function Content() {
    const token = (localStorage.getItem("token") !== "null") ?
        localStorage.getItem("token") :
        null
    const [user, setUser] = useState({})
    const [content, setContent] = useState({})
    const navigate = useNavigate()
    const param = useParams()

    useEffect(() => {
        if (token) {
            fetchLogin().then((result) => {
                setUser(result)
            })
        }
        fetchContent().then(content => {
            setContent(content)
        })
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

    async function fetchContent() {
        const { id } = param;
        const res = await fetch(`/catalog/content/${id}`, {
            method: "GET"
        })
        const json = await res.json()
        if (res.status === 404) {
            return navigate("/login")
        }
        return json
    }

    async function add() {
        const { id } = param;
        const res = await fetch(`/catalog/content/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: user._id,
                contentId: content._id
            })
        })
    }

    return (
        <div>
            <h1>CONTENNNNTTTTTTT</h1>
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
            {
                content.type === 0 ?
                    <p>Nome: {content.name}</p> :
                    <p>Titulo: {content.title}</p>
            }
            <p>Data de lançamento: {content.releaseDate}</p>
            <p>Tempo: {secondsToHours(content.seconds)}</p>
            {
                token &&
                <button
                    onClick={() => add()}
                >Adicionar
                </button>
            }
            <a href={`/catalog`}>Voltar</a>
        </div>
    )
}