import classes from "./running-line-element.module.css";
import arrowDownRightOrange from "../../../images/arrow-down-right-orange.svg";

export default function RunningLineElement() {

    return (
        <div className={classes.container}>
            <img src={arrowDownRightOrange} alt="arrow" className={classes.arrow} />
            <p className={classes.text}>Color your business!</p>
        </div>
    );
}