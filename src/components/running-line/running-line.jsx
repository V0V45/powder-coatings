import RunningLineElement from "./running-line-element/running-line-element";
import classes from "./running-line.module.css";

export default function RunningLine() {

    return (
        <div className={classes.runningLine}>
            <div className={classes.showing}>
                <RunningLineElement />
                <RunningLineElement />
                <RunningLineElement />
                <RunningLineElement />
                <RunningLineElement />
            </div>
            <div className={classes.showing}>
                <RunningLineElement />
                <RunningLineElement />
                <RunningLineElement />
                <RunningLineElement />
                <RunningLineElement />
            </div>
        </div>
    );
}