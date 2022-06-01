import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function Progress() {
    const token = localStorage.getItem("token")
    const [user, setUser] = useState({})
    const [progress, setProgress] = useState({})
    const navigate = useNavigate()
    const param = useParams()

    useEffect(() => {
        fetchLogin().then((result) => {
            setUser(result)
        })
        fetchProgress().then(content => {
            setProgress(content)
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

    async function fetchProgress() {
        const { id } = param;
        const res = await fetch(`/api/list/progress/${id}`, {
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
            <h1>Progress</h1>
            <p>{token}</p>

        </div>
    )
}