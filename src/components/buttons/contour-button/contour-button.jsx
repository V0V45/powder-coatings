import classes from "./contour-button.module.css";

export default function ContourButton({onClick, children}) {
    return (
        <button onClick={onClick} className={classes.button}>{children}</button>
    );
}