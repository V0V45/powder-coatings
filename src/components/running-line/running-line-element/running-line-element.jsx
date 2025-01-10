import ArrowOrangeButton from "../../buttons/arrow-orange-button";
import classes from "./running-line-element.module.css";


export default function RunningLineElement() {

    return (
        <div className={classes.container}>
            <ArrowOrangeButton className={classes.arrow} />
            <p className={classes.text}>Color your business!</p>
        </div>
    );
}