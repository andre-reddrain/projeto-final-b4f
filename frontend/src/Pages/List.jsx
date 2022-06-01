import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Catalog() {
    const token = localStorage.getItem("token")
    const [user, setUser] = useState({})
    const [list, setList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        fetchLogin().then((result) => {
            setUser(result)
        })
        fetchList().then(list => {
            setList(list)
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

    async function fetchList() {
        const res = await fetch("/list", {
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
            <h1>LISTTTTTTTTAAAAAAAAAAAA</h1>
            <p>{token}</p>
            <p>{user.username}</p>
            {
                list.map((content) => (
                    <div
                        key={content._id}
                    >
                        {
                            content.type === 0 ?
                                <p>Nome: {content.name}</p> :
                                <p>Titulo: {content.title}</p>
                        }
                        <p>Data de lançamento: {content.releaseDate}</p>
                        <p>Tempo: {content.seconds}</p>
                    </div>
                ))
            }
        </div>
    )
}