function Tabs({icon}) {
    if (icon === '/static/media/notebook-of-contacts_white.683313c8.png') {
        return(
            <>
                <button className="menu_button_lastElement"><img src={icon} alt="Logo" className="tab"/></button>
                {/*<div className="vl"></div>*/}
            </>
        )
    } else {
        return(
            <>
                <button className="menu_button"><img src={icon} alt="Logo" className="tab"/></button>
                {/*<div className="vl"></div>*/}
            </>
        )
    }
}

export default Tabs