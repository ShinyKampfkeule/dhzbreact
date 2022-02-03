import Header from "../components/header/header";
import Menu from "../components/menu/menu";
import Timetable from "../components/timetable/timetable";


function SchedulePage() {
    return(
        <>
            <Header topic="Zeitplan" klasse="topics"/>
            <Timetable/>
            //P-Tag
            <Menu active="tasks" />

        </>
    )
}

export default SchedulePage