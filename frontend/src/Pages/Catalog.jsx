import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Catalog() {
    const token = localStorage.getItem("token")
    const [user, setUser] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        fetchLogin().then((result) => {
            setUser(result)
        })
        //if (user) return navigate("/login")
    }, [])

    async function fetchLogin() {
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
            <h1>CATALOGGGGGGG</h1>
            <p>{token}</p>
            <p>{user.username}</p>
        </div>
    )
}