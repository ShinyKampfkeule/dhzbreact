function Timetable({icon, title, url}) {
    return (
        <>
            <h2>Tag 1</h2>
            <table>
                <TimetableItem from={'9:00 Uhr'} to={'10:00 Uhr'} what={'Einführung'} where={'Raum 10'}/>
                <TimetableItem/>
                <TimetableItem/>
                <TimetableItem/>
            </table>
        </>
    )
}

function TimetableItem(obj) {
    const {
        from = '-',
        to = '-',
        where = 'unbekannt',
        what = 'unbekannt',
    } = obj;
    return (
        <tr>
            <td>{from} {to}</td>
            <td>{what} {where}</td>
        </tr>
    )
}

export default Timetable