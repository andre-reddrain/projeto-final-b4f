import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styles from "../styles/style.module.css"
//import '../styles/style.css'
import imgAccount from "../styles/icon.svg"
import Logo from '../styles/Images/LogobRed.svg'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Catalog() {
    const token = (localStorage.getItem("token") !== "null") ?
        localStorage.getItem("token") :
        null
    const [user, setUser] = useState({})
    const [catalog, setCatalog] = useState([])
    const [filterCatalog, setFilterCatalog] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (token) {
            fetchLogin().then((result) => {
                setUser(result)
            })
        }

        fetchCatalog().then(catalog => {
            setCatalog(catalog)
            setFilterCatalog(catalog)
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
        return navigate(`/catalog/content/${String(_id)}`)
    }

    function filter(e) {
        console.log(e.target.value)
        setFilterCatalog(catalog.filter(content => (String(content.name)).toLowerCase().includes(e.target.value) == true))
    }

    return (
        <div>
            <div style={{ float: "left" }}> <img style={{ maxWidth: "25vh", maxHeight: "25vh" }} src={Logo} alt="" className="logo" /></div>
            {
                //<p>{token}</p>
                //<a href={`/user`}>USER: {user.username}</a>
                token ?
                    <div style={{ float: "right", marginRight: "20px", marginTop: "10px" }}>
                        <div
                            className={styles.divAccount}
                            onClick={() => navigate(`/user`)}
                        >
                            <img className={styles.iconAccount} src={imgAccount} alt="icon" />
                            <p>{user.username}</p>
                        </div>
                        <br />
                        <a href={`/login`}>SIGNOUT</a>
                    </div>
                    :
                    <div style={{ float: "right", marginRight: "20px", marginTop: "10px" }}>
                        <div className={styles.divAccount}>
                            <p onClick={() => navigate(`/login`)}>LOGIN</p>
                        </div>
                    </div>
            }
            <div>
                <input className={styles.searchbar} type="text" placeholder="&#xF002; Search..." onChange={(e) => filter(e)}></input>
            </div>

            <h1 className={styles.title}>Catalog</h1>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "25px",
                    margin: "auto",
                    width: "80%",
                }}>
                {
                    filterCatalog.map((content) => (
                        <div key={content._id}>
                            <div className={styles.divseries} onClick={() => handleClick(content._id)} >
                                <div className={styles.divImage} style={{
                                    backgroundImage: `url(${content.image[0]}`,
                                    backgroundPosition: "top"
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