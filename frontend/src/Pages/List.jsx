import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function List() {
    const token = localStorage.getItem("token")
    const [user, setUser] = useState({})
    const [list, setList] = useState(null)
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

    async function fetchList() {
        const res = await fetch("/api/list", {
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

    /*
    {
                list !== null ?
                    //console.log(list.progresses)
                    //console.log(list.progresses[0][0])

                    list.progresses.map((content) => (
                        <div
                            key={content.progressID}
                        >
                            <p>{content.progressID}</p>
                        </div>
                    ))

                    :
                    <h2>Lista Vazia</h2>
            }
    */

    return (
        <div>
            <h1>LISTTTTTTTTAAAAAAAAAAAA</h1>
            <p>{token}</p>
            <p>{user.username}</p>
            {
                list !== null ?

                    list.map((progress) => (
                        < div
                            key={progress.content._id}
                        >
                            <p>{progress.content.name}</p>
                        </div>
                    ))
                    :
                    <h2>E</h2>
            }
        </div >
    )
}