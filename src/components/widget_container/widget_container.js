import {useEffect, useState} from "react";
import Tasks from "../tasks/tasks";
import icon from "../../user_related_data/users/lehmann_kevin/images/officer.png"
import warning from "../../icons/Icon awesome-exclamation.png"

function WidgetContainer({topic, elements}) {
    useEffect(() => {
        (async () => {
            if (topic === "Aufgaben") {
                showContent(
                    <>
                        <div className="widget_task_container">
                            {elements.length > 0
                                ? elements.map(e => {return <Tasks text={e.title} checked={e.status} page="home" key={e.title}/>})
                            :null}
                        </div>
                    </>
                )
            } else if (topic === "Termine") {

                if (elements.length === 2) {

                    let hoursStartTimeline
                    let minutesStartTimeline
                    let hoursEndTimeline
                    let minutesEndTimeline
                    let hoursMidTimeline
                    let minutesMidTimeline

                    // if (elements.length === 2) {
                    //
                    //     let scheduleEnd = new Date(elements[1].end)
                    //
                    //     let hoursStartTimelineRAW = scheduleStart.getHours()
                    //     if (hoursStartTimelineRAW.toString().length === 1) {
                    //         hoursStartTimeline = `0${hoursStartTimelineRAW}`
                    //     } else {
                    //         hoursStartTimeline = hoursStartTimelineRAW
                    //     }
                    //     let minutesStartTimelineRAW = scheduleStart.getMinutes()
                    //     if (minutesStartTimelineRAW.toString().length === 1) {
                    //         minutesStartTimeline = `0${minutesStartTimelineRAW}`
                    //     } else {
                    //         minutesStartTimeline = minutesStartTimelineRAW
                    //     }
                    //     let hoursEndTimelineRAW = scheduleEnd.getHours()
                    //     if (hoursEndTimelineRAW.toString().length === 1) {
                    //         hoursEndTimeline = `0${hoursEndTimelineRAW}`
                    //     } else {
                    //         hoursEndTimeline = hoursEndTimelineRAW
                    //     }
                    //     let minutesEndTimelineRAW = scheduleEnd.getMinutes()
                    //     if (minutesEndTimelineRAW.toString().length === 1) {
                    //         minutesEndTimeline = `0${minutesEndTimelineRAW}`
                    //     } else {
                    //         minutesEndTimeline = minutesEndTimelineRAW
                    //     }
                    //     let midpoint = new Date((scheduleStart.getTime() + scheduleEnd.getTime()) / 2)
                    //     let hoursMidTimelineRAW = midpoint.getHours()
                    //     if (hoursMidTimelineRAW.toString().length === 1) {
                    //         hoursMidTimeline = `0${hoursMidTimelineRAW}`
                    //     } else {
                    //         hoursMidTimeline = hoursMidTimelineRAW
                    //     }
                    //     let minutesMidTimelineRAW = midpoint.getMinutes()
                    //     if (minutesMidTimelineRAW.toString().length === 1) {
                    //         minutesMidTimeline = `0${minutesMidTimelineRAW}`
                    //     } else {
                    //         minutesMidTimeline = minutesMidTimelineRAW
                    //     }
                    //
                    // } else {
                    //
                    //     let scheduleEnd = new Date(elements[0].end)
                    //
                    //     let hoursStartTimelineRAW = scheduleStart.getHours()
                    //     if (hoursStartTimelineRAW.toString().length === 1) {
                    //         hoursStartTimeline = `0${hoursStartTimelineRAW}`
                    //     } else {
                    //         hoursStartTimeline = hoursStartTimelineRAW
                    //     }
                    //     let minutesStartTimelineRAW = scheduleStart.getMinutes()
                    //     if (minutesStartTimelineRAW.toString().length === 1) {
                    //         minutesStartTimeline = `0${minutesStartTimelineRAW}`
                    //     } else {
                    //         minutesStartTimeline = minutesStartTimelineRAW
                    //     }
                    //     let hoursEndTimelineRAW = scheduleEnd.getHours()
                    //     if (hoursEndTimelineRAW.toString().length === 1) {
                    //         hoursEndTimeline = `0${hoursEndTimelineRAW}`
                    //     } else {
                    //         hoursEndTimeline = hoursEndTimelineRAW
                    //     }
                    //     let minutesEndTimelineRAW = scheduleEnd.getMinutes()
                    //     if (minutesEndTimelineRAW.toString().length === 1) {
                    //         minutesEndTimeline = `0${minutesEndTimelineRAW}`
                    //     } else {
                    //         minutesEndTimeline = minutesEndTimelineRAW
                    //     }
                    //     let midpoint = new Date((scheduleStart.getTime() + scheduleEnd.getTime()) / 2)
                    //     let hoursMidTimelineRAW = midpoint.getHours()
                    //     if (hoursMidTimelineRAW.toString().length === 1) {
                    //         hoursMidTimeline = `0${hoursMidTimelineRAW}`
                    //     } else {
                    //         hoursMidTimeline = hoursMidTimelineRAW
                    //     }
                    //     let minutesMidTimelineRAW = midpoint.getMinutes()
                    //     console.log(minutesMidTimelineRAW)
                        // if (minutesMidTimelineRAW === 0) {
                        //     minutesMidTimeline = '00'
                        // } else if (minutesMidTimelineRAW === 15 || 30 || 45) {
                        //     minutesMidTimeline = minutesMidTimelineRAW
                        // } else if (0 < minutesMidTimelineRAW < )


                        // if (minutesMidTimelineRAW - 15 <= 0) {
                        //     if (15 - minutesMidTimelineRAW < minutesMidTimelineRAW) {
                        //         minutesMidTimeline = '00'
                        //     } else {
                        //         minutesMidTimeline = 15
                        //     }
                        // } else if (minutesMidTimelineRAW - 30 <= 0) {
                        //     if (30 - minutesMidTimelineRAW < minutesMidTimelineRAW) {
                        //
                        //     }
                        // }
                    //     if (minutesMidTimelineRAW.toString().length === 1) {
                    //         minutesMidTimeline = `0${minutesMidTimelineRAW}`
                    //     } else {
                    //         minutesMidTimeline = minutesMidTimelineRAW
                    //     }
                    //
                    // }

                    let dateArray1 = 'Platzhalter'

                    showContent(
                        <>
                            <div className="widget_schedule">
                                <div className="widget_schedule_day">
                                    <div className="widget_schedule_day_wday">{dateArray1}</div>
                                    <div className="widget_schedule_day_day">{dateArray1}</div>
                                </div>
                                <div className="widget_schedule_time_container">
                                    <div className="widget_schedule_timeline">
                                        <p className="widget_schedule_timeline_time1">{dateArray1}</p>
                                        <p className="widget_schedule_timeline_time2">{hoursMidTimeline}:{minutesMidTimeline}</p>
                                        <p className="widget_schedule_timeline_time3">{dateArray1}</p>
                                        <div className="widget_schedule_timeline_line" />
                                    </div>
                                    {elements.length > 0
                                        ? elements.map(e => {
                                            let dateStart = new Date(e.start)
                                            let dateEnd = new Date(e.end)
                                            let hoursStart = dateStart.getHours()
                                            let minutesStart = dateStart.getMinutes()
                                            if (minutesStart === 0) {
                                                minutesStart = `0${minutesStart}`
                                            }
                                            let hoursEnd = dateEnd.getHours()
                                            let minutesEnd = dateEnd.getMinutes()
                                            if (minutesEnd === 0) {
                                                minutesEnd = `0${minutesEnd}`
                                            }

                                            let scheduleStart = new Date(e.start)
                                            let scheduleEnd = new Date(e.end)

                                            let dateStringStart = scheduleStart.toString()
                                            let dateArrayStart = dateStringStart.split(' ')
                                            console.log(dateArrayStart)

                                            let dateStringEnd = scheduleEnd.toString()
                                            let dateArrayEnd = dateStringEnd.split(' ')
                                            console.log(dateArrayEnd)

                                            return <Termin topic={`${e.title} - Raum ${e.room}`} time={`${dateArrayStart[4].substring(0, dateArrayStart[4].length-3)} - ${dateArrayEnd[4].substring(0, dateArrayEnd[4].length-3)} Uhr`} key={e.title} />
                                        })
                                        :null}
                                </div>
                            </div>
                        </>
                    )
                }
            } else if (topic === "Nachrichten") {
                showContent(
                    <div className="message_container_overflow">
                        <Message icon={icon} date="10.03.2022" reference="Teams-Link" sender="Prof. Dr. Sam Fischer"/>
                        <Message icon={icon} date="05.03.2022" reference="Erinnerung: Dokumente uploaden" sender="Jutta Grün (HR)" warningStatus={true}/>
                        <Message icon={icon} date="08.02.2022" reference="Willkommen im Unternehmen !" sender="Prof. Dr. Winterkorn" />
                        <Message icon={icon} date="04.02.2022" reference="Erinnerung: Arbeitsvertrag unterschreiben" sender="Jutta Grün (HR)" warningStatus={true}/>
                        <Message icon={icon} date="04.02.2022" reference="Erinnerung: Foto bei Poststelle abgeben" sender="Poststelle" warningStatus={true}/>
                    </div>
                )
            }
        })()
    }, [topic, elements])

    const [content, showContent] = useState()
    return(
        <div className="widget_container">
            <div className="widget_header">{topic}</div>
            {content}
        </div>
    )
}

function Termin ({topic, time}) {
    return (
        <div className="widget_schedule_scheduled">
            <div><b>{topic}</b></div>
            <div>{time}</div>
        </div>
    )
}

function Message ({icon, sender, reference, date, warningStatus}) {

    useEffect(() => {
        (async () => {
            if (warningStatus === true) {
                warningIcon (
                    <>
                        <img src={warning} alt="Wichtig" className="message_container_user_warn_icon"/>
                    </>
                )
            }
        })()
    }, [warningStatus])

    const[warnIcon, warningIcon] = useState()

    return (
        <div className="message_container">
            <img src={icon} alt="User-Icon" className="message_container_user_icon" />
            <div className="message_container_user_sender">{sender}</div>
            <div className="message_container_user_reference"><b>{reference}</b></div>
            <div className="message_container_user_date">{date}</div>
            {warnIcon}
        </div>
    )
}

export default WidgetContainer