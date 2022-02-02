import Header from "../components/header/header";
import Menu from "../components/menu/menu";
import DoubleLongButton from "../components/doubleLongButton/doubleLongButton";
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
            {/*<DoubleLongButton />*/}
            <Menu active="profil" />
        </>
    )
}

export default ProfilPage