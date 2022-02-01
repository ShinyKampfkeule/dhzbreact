import Header from "../components/header/header";
import Menu from "../components/menu/menu";
import DoubleLongButton from "../components/doubleLongButton/doubleLongButton";
import Formular from "../components/formular/formular";
import {useLocation} from "react-router-dom";

function ProfilPage() {
    return(
        <>
            <Header topic="Mitarbeiterprofil" klasse="profil"/>
            <Formular />
            <DoubleLongButton />
            <Menu />
        </>
    )
}

export default ProfilPage