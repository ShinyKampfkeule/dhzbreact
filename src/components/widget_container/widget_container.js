import {useEffect, useState} from "react";
import Tasks from "../tasks/tasks";
import icon from "../../user_related_data/users/lehmann_kevin/images/officer.png"
import warning from "../../icons/Icon awesome-exclamation.png"
import {useNavigate} from "react-router-dom";

function WidgetContainer({topic, elements, page}) {

    const navigate = useNavigate()

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

                    let scheduleStart = new Date(elements[0].start)
                    let scheduleEnd = new Date(elements[1].end)

                    let dateStringStart = scheduleStart.toString()
                    let dateArrayStart = dateStringStart.split(' ')

                    let dateStringEnd = scheduleEnd.toString()
                    let dateArrayEnd = dateStringEnd.split(' ')

                    let scheduleMiddle = new Date((scheduleStart.getTime() + scheduleEnd.getTime()) / 2)

                    let middleMinutes = scheduleMiddle.getMinutes()
                    let middleHours = scheduleMiddle.getHours()
                    let middleString = ` `

                    if (middleMinutes <= 7) {

                        middleString = `${middleHours}:00`

                    }else if (22 >= middleMinutes) {

                        middleString = `${middleHours}:15`

                    } else if (37 >= middleMinutes) {

                        middleString = `${middleHours}:30`

                    } else if (52 >= middleMinutes) {

                        middleString = `${middleHours}:45`

                    } else if (60 >= middleMinutes) {

                        middleString = `${middleHours}:60`

                    }

                    showContent(
                        <>
                            <div className="widget_schedule">
                                <div className="widget_schedule_day">
                                    <div className="widget_schedule_day_wday">{dateArrayStart[0]}</div>
                                    <div className="widget_schedule_day_day">{dateArrayStart[2]}</div>
                                </div>
                                <div className="widget_schedule_time_container">
                                    <div className="widget_schedule_timeline">
                                        <p className="widget_schedule_timeline_time1">{dateArrayStart[4].substring(0, dateArrayStart[4].length - 3)}</p>
                                        <p className="widget_schedule_timeline_time2">{middleString}</p>
                                        <p className="widget_schedule_timeline_time3">{dateArrayEnd[4].substring(0, dateArrayEnd[4].length - 3)}</p>
                                        <div className="widget_schedule_timeline_line" />
                                    </div>
                                    {elements.length > 0
                                        ? elements.map(e => {
                                            let scheduleStart = new Date(e.start)
                                            let scheduleEnd = new Date(e.end)

                                            let dateStringStart = scheduleStart.toString()
                                            let dateArrayStart = dateStringStart.split(' ')

                                            let dateStringEnd = scheduleEnd.toString()
                                            let dateArrayEnd = dateStringEnd.split(' ')

                                            return <Termin topic={`${e.title} - Raum ${e.room}`} time={`${dateArrayStart[4].substring(0, dateArrayStart[4].length-3)} - ${dateArrayEnd[4].substring(0, dateArrayEnd[4].length-3)} Uhr`} amount="2" key={e.title} />
                                        })
                                        :null}
                                </div>
                            </div>
                        </>
                    )

                } else if (elements.length === 1) {

                    let scheduleStart = new Date(elements[0].start)
                    let scheduleEnd = new Date(elements[0].end)

                    let dateStringStart = scheduleStart.toString()
                    let dateArrayStart = dateStringStart.split(' ')

                    let dateStringEnd = scheduleEnd.toString()
                    let dateArrayEnd = dateStringEnd.split(' ')

                    let scheduleMiddle = new Date((scheduleStart.getTime() + scheduleEnd.getTime()) / 2)

                    let middleMinutes = scheduleMiddle.getMinutes()
                    let middleHours = scheduleMiddle.getHours()
                    let middleString = ` `

                    if (middleMinutes <= 7) {

                        middleString = `${middleHours}:00`

                    }else if (22 >= middleMinutes) {

                        middleString = `${middleHours}:15`

                    } else if (37 >= middleMinutes) {

                        middleString = `${middleHours}:30`

                    } else if (52 >= middleMinutes) {

                        middleString = `${middleHours}:45`

                    } else if (60 >= middleMinutes) {

                        middleString = `${middleHours}:60`

                    }

                    if (middleHours.toString().length === 1) {
                        middleString = "0" + middleString
                    }

                    showContent(
                        <>
                            <div className="widget_schedule">
                                <div className="widget_schedule_day">
                                    <div className="widget_schedule_day_wday">{dateArrayStart[0]}</div>
                                    <div className="widget_schedule_day_day">{dateArrayStart[2]}</div>
                                </div>
                                <div className="widget_schedule_time_container">
                                    <div className="widget_schedule_timeline">
                                        <p className="widget_schedule_timeline_time1">{dateArrayStart[4].substring(0, dateArrayStart[4].length - 3)}</p>
                                        <p className="widget_schedule_timeline_time2">{middleString}</p>
                                        <p className="widget_schedule_timeline_time3">{dateArrayEnd[4].substring(0, dateArrayEnd[4].length - 3)}</p>
                                        <div className="widget_schedule_timeline_line" />
                                    </div>
                                    {elements.length > 0
                                        ? elements.map(e => {
                                            let scheduleStart = new Date(e.start)
                                            let scheduleEnd = new Date(e.end)

                                            let dateStringStart = scheduleStart.toString()
                                            let dateArrayStart = dateStringStart.split(' ')

                                            let dateStringEnd = scheduleEnd.toString()
                                            let dateArrayEnd = dateStringEnd.split(' ')

                                            return <Termin topic={`${e.title} - Raum ${e.room}`} time={`${dateArrayStart[4].substring(0, dateArrayStart[4].length-3)} - ${dateArrayEnd[4].substring(0, dateArrayEnd[4].length-3)} Uhr`} amount="1" key={e.title} />
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
                        {elements.length > 0
                            ? elements.map(e => {

                                let date = new Date(e.sendDate)
                                let dateString = date.toString()
                                let dateArray = dateString.split(' ')
                                let month = date.getMonth()
                                let title

                                if (month < 10) {
                                    month = `0${month}`
                                }

                                date = `${dateArray[2]}.${month}.${dateArray[3]}`

                                if (e.title.length >= 25) {
                                    title = e.title.substring(0, e.title.length - (e.title.length - 25)) + '...'
                                } else {
                                    title = e.title
                                }

                                if (e.urgency === "urgent") {
                                    return <Message icon={icon} date={date} reference={title} sender={e.senderName} warningStatus={true} key={e._id} />
                                } else {
                                    return <Message icon={icon} date={date} reference={title} sender={e.senderName} warningStatus={false} key={e._id} />
                                }
                            })
                        :null}
                    </div>
                )
            }
        })()
    }, [topic, elements])

    const [content, showContent] = useState()
    return(
        <div className="widget_container" onClick={e => navigate(`${page}`)}>
            <div className="widget_header">{topic}</div>
            {content}
        </div>
    )
}

function Termin ({topic, time, amount}) {

    if (amount === "1") {
        return (
            <div className="widget_schedule_scheduled_single">
                <div><b>{topic}</b></div>
                <div>{time}</div>
            </div>
        )
    } else {
        return (
            <div className="widget_schedule_scheduled">
                <div><b>{topic}</b></div>
                <div>{time}</div>
            </div>
        )
    }
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