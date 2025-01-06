export default function TextH3({classes, children}) {
    const texth3style = {
        fontFamily: "Bruno Ace SC",
        fontWeight: 400,
        fontSize: "48px",
        color: "#000"
    }

    return (
        <h3 className={classes} style={texth3style}>{children}</h3>
    );
}