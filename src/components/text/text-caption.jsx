export default function TextCaption({ classes, children }) {
    const placeholderText = "You have experience in powder coatings and we produce coatings that demands your expertise";

    const captionStyle = {
        fontFamily: `"Open Sans Condensed", sans-serif`,
        fontWeight: 300,
        fontSize: "32px",
        color: "#000",
    }

    return (
        <p className={classes} style={captionStyle}>{children || placeholderText}</p>
    );
}