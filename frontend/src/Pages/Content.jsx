import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { secondsToMinutes, secondsToHours } from "../components/validate"
import '../styles/style.css';
import Logo from '../styles/Images/LogobRed.svg';

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

//     return (
//         <div>
//             <h1>CONTENNNNTTTTTTT</h1>
//             {
//                 token ?
//                     <div>
//                         <p>{token}</p>
//                         <a href={`/user`}>USER: {user.username}</a>
//                         <br />
//                         <a href={`/login`}>SIGNOUT</a>
//                     </div>
//                     :
//                     <a href={`/login`}>Login</a>
//             }
//             {
//                 content.type === 0 ?
//                     <p>Nome: {content.name}</p> :
//                     <p>Titulo: {content.title}</p>
//             }
//             <p>Data de lançamento: {content.releaseDate}</p>
//             <p>Tempo: {secondsToHours(content.seconds)}</p>
//             {
//                 token &&
//                 <button
//                     onClick={() => add()}
//                 >Adicionar
//                 </button>
//             }
//             <a href={`/catalog`}>Voltar</a>
//         </div>
//     )
// }

return (
    
         <div> 
             
             <div> <img src={Logo} alt="" className="logoContent" /><h1>Movies</h1></div>
            <div></div>
            <div class="iconAdding">
            <i class="fa-solid fa-check checked"></i>
            <i class="fa-solid fa-circle-plus checked"></i>
   <div>
       <div>
       <div>
   <p className="halo">About: Marvel Studios' "Doctor Strange in the Multiverse of Madness"—a thrilling ride through the Multiverse with <br></br>Doctor Strange, his trusted friend Wong and Wanda Maximoff, aka Scarlet Witch. "Doctor Strange in the Multiverse of Madness"</p> 
   <p className="halo">Director: Sam Raimi.
    Studio:Marvel Studios
    Stars:Benedict Cumberbatch, Elizabeth Olsen, Chiwetel Ejiofor. </p>
    <p className="halo">DOCTOR STRANGE 
        2022
        +14
        Runtime: 2 h 6m.</p>
   </div>
            
       </div>
   <div className="boxSeriesGrande" >
   </div>
    </div>
</div>
<input type="bar" class="barraProgressoV" name="progresso"></input>

        {
            token ?
                <div>
                    <p>{token}</p>
                    <a href={`/user`}>USER: {user.username}</a>
                    <br />
                    <a href={`/login`}>SIGNOUT</a>
                </div>
                :
                <a href={`/login`} className="buttonBig2">Login</a>
        }
        {
            content.type === 0 ?
                <p>Nome: {content.name}</p> :
                <p>Titulo: {content.title}</p>
        }
        
        <p>Tempo: {secondsToHours(content.seconds)}</p>
        {
            token &&
            <button
                onClick={() => add()}
            >Adicionar
            </button>
        }
        <a href={`/catalog`} className="buttonBig2">Voltar</a>
    </div>
)
}