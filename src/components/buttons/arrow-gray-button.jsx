import arrowUpRightGray from "../../images/arrow-up-right-grey.svg";

export default function ArrowGrayButton({onClick, className}) {

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
            <img src={arrowUpRightGray} alt="arrow" style={{pointerEvents: "none"}} />
        </button>
    );
}