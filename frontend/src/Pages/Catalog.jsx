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

    function handleClick(_id) {
        // console.log("Clicou-me! " + _id)
        return navigate(`/catalog/content/${String(_id)}`)
    }

    function filter(e) {
        console.log(e.target.value)
        setCatalog(catalog.filter(content => String(content.name).includes(e.target.value) == true))
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
            <input type="text" placeholder="a tua mae" onChange={(e) => filter(e)}></input>
            {
                catalog.map((content) => (

                    <div key={content._id}>
                        {
                            content.type === 0 ?
                                <div className={styles.divseries} onClick={() => handleClick(content._id)}>
                                    <div className={styles.divImage} style={{ backgroundImage: "url('https://cdn.vox-cdn.com/thumbor/aIgnekvyjdARf_NVJj21EL37uT8=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23434598/DrStrange2_Payoff_1_Sht_v6_Lg.jpeg')" }}>
                                    </div>
                                    <div style={{ marginTop: "15vh", padding: "5px", paddingTop: "10px", textAlign: "left" }}>
                                        {content.name}<br />({content.releaseDate.substring(0, 4)})
                                        <div style={{ float: "right", marginBottom: "5px" }}>
                                            <FontAwesomeIcon icon={faHeart} style={{ color: "red" }}></FontAwesomeIcon> {Math.floor(Math.random() * (100 - 50 + 1)) + 50}%
                                        </div>
                                    </div>
                                </div>
                                :
                                <p>Epah ya</p>
                            // <div>
                            //     <h2>Filme</h2>
                            //     <a href={`/catalog/content/${String(content._id)}`}>Titulo: {content.title}</a>
                            // </div>
                        }
                        <br></br>
                    </div>
                ))
            }
        </div >
    )
}