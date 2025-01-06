export default function TextH2({classes, children}) {
    const texth2style = {
        fontFamily: "Bruno Ace SC",
        fontWeight: 400,
        fontSize: "64px",
        textTransform: "uppercase",
        color: "#000"
    }

    return (
        <h2 className={classes} style={texth2style}>{children}</h2>
    );
}