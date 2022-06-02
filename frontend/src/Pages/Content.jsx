import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { secondsToMinutes, secondsToHours } from "../components/validate"
import '../styles/style.css';
import Logo from '../styles/Images/LogobRed.svg';
import styles from "../styles/style.module.css"
import imgAccount from "../styles/icon.svg"

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

    async function fetchContent() {
        const { id } = param;
        const res = await fetch(`/api/catalog/content/${id}`, {
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
        const res = await fetch(`/api/catalog/content/${id}`, {
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
            {
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

            {
                Object.keys(content).length !== 0 &&
                <div>
                    <div style={{ float: "left" }}> <img style={{ maxWidth: "25vh", maxHeight: "25vh" }} src={Logo} alt="" className="logo" /></div>
                    <div class="iconAdding">
                        <i class="fa-solid fa-check checked"></i>
                        <i class="fa-solid fa-circle-plus checked"></i>
                        <div style={{ marginTop: "200px" }}>
                            <h1 style={{
                                textAlign: "center",
                                fontSize: "70px",
                            }}>
                                {
                                    content.type === 0 ?
                                        <p>Series</p> :
                                        <p>Movie</p>
                                }
                            </h1>
                            <div>
                                <div
                                    style={{
                                        backgroundImage: `url(${content.image[1]}`,
                                        backgroundSize: "200px 500px"
                                    }}
                                    className="boxSeriesGrande" >
                                </div>
                                <div
                                    style={{ display: "inline" }}
                                >
                                    <p className="halo">{content.description}</p>
                                    <p className="halo">
                                        {
                                            content.type === 0 ?
                                                <p>Nome: {content.name}</p> :
                                                <p>Titulo: {content.title}</p>
                                        }
                                    </p>
                                    <p className="halo">
                                        +14
                                    </p>
                                    <p className="halo">
                                        Runtime: {secondsToHours(content.seconds)}
                                    </p>

                                </div>

                            </div>

                        </div>
                    </div>
                    <input type="bar" class="barraProgressoV" name="progresso"></input>
                </div>

            }
            {
                token &&
                <button
                    onClick={() => add()}
                >Adicionar
                </button>
            }
            <button onClick={() => navigate(`/catalog`)} className="buttonBig2">Voltar</button>
        </div>
    )
}