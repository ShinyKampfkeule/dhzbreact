import impuls from "../../images/impuls.png";

function PagesHeader({topic}) {

    return(
        <>
            <div className="header">
                <img className="impuls" src={impuls} alt="Impuls"/>
            </div>
            <p className="topics"><b>{topic}</b></p>
        </>
    )
}

export default PagesHeader