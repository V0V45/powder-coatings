import arrowDownRightOrange from "../images/arrow-down-right-orange.svg";

export default function ArrowButton({onClick, className}) {

    const buttonStyle = {
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
}

    return (
        <button onClick={onClick} style={buttonStyle} className={className}>
            <img src={arrowDownRightOrange} alt="arrow" style={{pointerEvents: "none"}} />
        </button>
    );
}