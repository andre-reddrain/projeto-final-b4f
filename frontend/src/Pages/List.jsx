import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function List() {
    const token = localStorage.getItem("token")
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        fetchLogin().then((result) => {
            console.log(result)
            setUser(result)
        })
        //if (user) return navigate("/login")
    }, [])

    async function fetchLogin() {
        const token = localStorage.getItem("token")
        if (token == "null" || !token || token == "undefined") return navigate("/login")
        const res = await fetch("/list", {
            method: "GET",
            headers: {
                "Authenticate": token
            }
        })
        const json = await res.json()
        console.log(res.status)
        if (res.status === 404) {
            return navigate("/login")
        }
        return json
    }

    return (
        <div>
            <h1>FEITO</h1>
            <p>{token}</p>
            <p>{user.username}</p>
        </div>
    )
}