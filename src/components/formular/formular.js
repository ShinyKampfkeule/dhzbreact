import InputArea from "../input_area/input_area";
import SelectArea from "../select_area/select_area";

function Formular() {
    return(
        <div className="container">
            <div className="everyElement">
                <SelectArea text="Geschlecht" values={["männlich", "weiblich", "divers"]}/>
                <InputArea text="Geburtsdatum" />
                <div className="horizontalLine" />
                <InputArea text="Titel" />
                <InputArea text="Vorname" />
                <div className="horizontalLine2" />
                <InputArea text="Nachname" />
                <div className="horizontalLine3" />
                <InputArea text="Straße" />
                <InputArea text="Nr." />
                <div className="horizontalLine4" />
                <InputArea text="Stadt" />
                <InputArea text="PLZ" />
                <div className="horizontalLine5" />
                <InputArea text="Telefonnummer" />
            </div>
        </div>
    )
}

export default Formular