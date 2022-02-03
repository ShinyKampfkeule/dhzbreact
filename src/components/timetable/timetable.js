function Timetable({icon, title, url}) {
    return (
        <>
            <h2>Tag 1</h2>
            <table>
                <TimetableItem from={'9:00 Uhr'} to={'10:15 Uhr'} what={'Einführung'} where={'Raum 10'}/>
                <TimetableItem from={'10:30 Uhr'} to={'12:00 Uhr'} what={'Musterabteilung'} where={'Raum 11'} />
                <BreakItem/>
                <TimetableItem from={'13:15 Uhr'} to={'14:45 Uhr'} what={'Musterworkshop'} where={'Raum 12'} />
                <TimetableItem from={'15:00 Uhr'} to={'16:30 Uhr'} what={'Musterseminar'} where={'Raum 13'} />
                <TimetableItem from={'16:45 Uhr'} to={'17:15 Uhr'} what={'Fototermin'} where={'Raum 14'} />
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

function BreakItem() {
    return (
        <tr>
            <td>Mittagspause</td>
        </tr>
    )
}

export default Timetable