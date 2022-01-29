import {useNavigate} from "react-router-dom";

function BigButton({icon, title, url}) {
    const navigate = useNavigate();
    const handleClick = () => navigate(`/${url}`)
    return(
        <>
            <button type="submit" className="bigBlueButton" onClick={handleClick}>
                <img src={icon} className="icon" alt="" />
                <span className="btnText">{title}</span>
            </button>
        </>
    )
}

export default BigButton