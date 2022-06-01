import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { secondsToMinutes, secondsToHours } from "../components/validate"
import styles from "../styles/style.module.css"

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

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

    async function fetchCatalog() {
        const res = await fetch("/api/catalog", {
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

    function filter(e) {
        console.log(e.target.value)
        // setCatalog(...catalog, catalog.filter(content => String(content.name).includes(e.target.value) == true))
    }

    return (
        <div>
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
                <input type="text" placeholder="Search" onChange={(e) => filter(e)}></input>
            </div>

            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px" }}>
                {
                    catalog.map((content) => (
                        <div key={content._id}>
                            <div className={styles.divseries} onClick={() => handleClick(content._id)} >
                                <div className={styles.divImage} style={{
                                    backgroundImage: `url(${content.image[0]}`
                                }}>
                                </div>
                                <div style={{ marginTop: "15vh", padding: "5px", paddingTop: "10px", textAlign: "left" }}>
                                    {content.name ? content.name : content.title}<br />({content.releaseDate.substring(0, 4)})
                                    <div style={{ float: "right", marginBottom: "5px" }}>
                                        <FontAwesomeIcon icon={faHeart} style={{ color: "red" }}></FontAwesomeIcon> {Math.floor(Math.random() * (100 - 50 + 1)) + 50}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}