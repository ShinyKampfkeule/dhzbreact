import Header from "../components/header/header";
import Menu from "../components/menu/menu";
import Formular from "../components/formular/formular";
import rightArrow from "../icons/right-arrow.png";
import leftArrow from "../icons/left-arrow.png"

function ProfilPage() {

    return(
        <>
            <Header topic="Mitarbeiterprofil" klasse="topics"/>
            <Formular />
            <img src={rightArrow} className="rightArrow" alt="" />
            <img src={leftArrow} className="leftArrow" alt="" />
            <Menu active="profil" />
        </>
    )
}

export default ProfilPage