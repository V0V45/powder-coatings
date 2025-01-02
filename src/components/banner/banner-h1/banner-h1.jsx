import classes from "./banner-h1.module.css";

export default function BannerH1({children, gridAreaTitleNumber, border}) {

    let allClasses = `${classes.h1}`;
    if (gridAreaTitleNumber === 1) {
        allClasses += ` ${classes.title1}`;
    } else if (gridAreaTitleNumber === 2) {
        allClasses += ` ${classes.title2}`;
    }

    if (border) {
        allClasses += ` ${classes.border}`;
    }

    return (
        <h1 className={allClasses}>{children}</h1>
    );
}