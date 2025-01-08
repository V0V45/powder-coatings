export default function TextH3Upper({classes, children}) {
    const textH3UpperStyle = {
        fontFamily: `"Open Sans Condensed", sans-serif`,
        fontWeight: "300",
        fontSize: "48px",
        textTransform: "uppercase",
    }

    return (
        <h3 className={classes} style={textH3UpperStyle}>{children}</h3>
    );
}