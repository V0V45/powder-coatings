import classes from "./contact-us-button.module.css";
import arrow from"../../images/arrow-up-right.svg";

export default function ContactUsButton({gridAreaName}) {

    let allClasses = `${classes.contactUs}`;
    if (gridAreaName) {
        allClasses += ` ${classes[`grid-area-${gridAreaName}`]}`;
    }

    return (
        <button className={allClasses}>
            <span>Contact us</span>
            <img src={arrow} alt="click" />
        </button>
    );
}