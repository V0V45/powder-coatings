import classes from "./header-link.module.css";

export default function HeaderLink({link, space, children}) {
    return (
        <a href={link} className={`${classes.link} ${space && classes.space}`}>{children}</a>
    );
}