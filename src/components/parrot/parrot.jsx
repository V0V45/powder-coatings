import classes from "./parrot.module.css";
import rainbow from "../../images/rainbow.jpg";
import RunningLine from "../running-line/running-line";

export default function Parrot() {

    return (
        <section className={classes.block}>
            <img src={rainbow} alt="rainbow" className={classes.img} />
            <RunningLine />
        </section>
    );
}