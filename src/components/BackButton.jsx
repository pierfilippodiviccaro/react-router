import { useNavigate } from "react-router-dom";
export default function BackButton(){
    const navigate = useNavigate()
    function VaiIndietro(event){
        event.preventDefault();
        navigate(-1)
    }
    return(
        <a href="" className="btn btn-success" onClick={VaiIndietro}>
            Ritorna indietro
        </a>
    )
}