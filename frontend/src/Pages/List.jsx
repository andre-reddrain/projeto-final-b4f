import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "../styles/style.module.css"

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

export default function List() {
    const token = localStorage.getItem("token")
    const [user, setUser] = useState({})
    const [list, setList] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            fetchLogin().then((result) => {
                setUser(result)
            })
        }

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

    function handleClick(_id) {
        // console.log("Clicou-me! " + _id)
        return navigate(`/catalog/content/${String(_id)}`)
    }

    return (
        <div>
            <h1>Lista de Utilizador</h1>
            {/* <p>{token}</p> */}
            <p>{user.username}</p>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px" }}>
                {
                    list !== null ?

                        list.map((progress) => (
                            <div key={progress.content._id}>
                                <div className={styles.divseries} onClick={() => handleClick(progress.content._id)} >
                                    <div className={styles.divImage} style={{
                                        backgroundImage: `url(${progress.content.image[0]}`,
                                        backgroundPosition: "top"
                                    }}>
                                    </div>
                                    <div style={{ marginTop: "15vh", padding: "5px", paddingTop: "10px", textAlign: "left" }}>
                                        {progress.content.name ? progress.content.name : progress.content.title}<br />
                                        ({progress.content.releaseDate.substring(0, 4)})
                                        <div style={{ float: "right", marginBottom: "5px" }}>
                                            <FontAwesomeIcon icon={faHeart} style={{ color: "red" }}></FontAwesomeIcon> {Math.floor(Math.random() * (100 - 50 + 1)) + 50}%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                        : <h1>Lista vazia!</h1>
                }
            </div>
        </div >
    )
}