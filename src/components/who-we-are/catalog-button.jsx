import arrowUpRightVector from "../../images/arrow-up-right-vector.svg";

export default function CatalogButton({ onClick, className }) {

    const buttonStyle = {
        border: "none",
        outline: "none",
        backgroundColor: "#000",
        borderRadius: "100%",
        width: "162px",
        height: "162px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "blur(7.5px)",
        opacity: "50%"
    };

    const textStyle = {
        marginTop: "12px",
        fontFamily: `"Open Sans", sans-serif`,
        fontWeight: "700",
        fontSize: "22px",
        textTransform: "uppercase",
        color: "#fff",
    };


    return (
        <button onClick={onClick} style={buttonStyle} className={className}>
            <img src={arrowUpRightVector} alt="arrow" style={{ pointerEvents: "none" }} />
            <p style={textStyle}>Catalog</p>
        </button>
    );
}