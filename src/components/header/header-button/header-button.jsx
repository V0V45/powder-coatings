import classes from "./header-button.module.css";

export default function HeaderButton({onClick, children}) {
    return (
        <button onClick={onClick} className={classes.button}>{children}</button>
    );
}