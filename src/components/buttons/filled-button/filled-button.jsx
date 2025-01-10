import classes from "./filled-button.module.css";

export default function FilledButton({onClick, children, color}) {
    let allClasses = `${classes.filledButton}`;
    if (color === "orange") {
        allClasses += ` ${classes.orangeBg}`;
    } else if (color === "gray") {
        allClasses += ` ${classes.grayBg}`;
    }

    return (
        <button onClick={onClick} className={allClasses}>{children}</button>
    );
}
