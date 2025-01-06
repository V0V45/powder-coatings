import ArrowButton from "../../arrow-button";
import classes from "./running-line-element.module.css";


export default function RunningLineElement() {

    return (
        <div className={classes.container}>
            <ArrowButton className={classes.arrow} />
            <p className={classes.text}>Color your business!</p>
        </div>
    );
}