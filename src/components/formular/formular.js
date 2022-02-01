import {useLocation} from "react-router-dom";
import Input_Area from "../input_area/input_area";
import {InferType} from "yup";

function Formular() {
    return(
        <div className="container">
            <Input_Area text="Geschlecht" />
            <Input_Area text="Geburtsdatum" />
            <Input_Area text="Titel" />
            <Input_Area text="Vorname" />
            <Input_Area text="Nachname" />
            <Input_Area text="Straße" />
            <Input_Area text="Nr." />
            <Input_Area text="Stadt" />
            <Input_Area text="PLZ" />
            <Input_Area text="E-Mail" />
            <Input_Area text="Telefonnummer" />
            <Input_Area text="Position" />
            <Input_Area text="Abteilung" />
        </div>
    )
}

export default Formular