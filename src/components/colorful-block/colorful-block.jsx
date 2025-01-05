import classes from "./colorful-block.module.css";
import rainbow from "../../images/rainbow.jpg";
import RunningLine from "../running-line/running-line";
import parrotImg from "../../images/parrot.png";

export default function ColorfulBlock() {

    return (
        <section className={classes.colorfulBlock}>
            <div className={classes.block}>
                <img src={rainbow} alt="rainbow" className={classes.img} />
                <RunningLine />
            </div>
            <img src={parrotImg} alt="parrot" className={classes.parrot} />
        </section>
    );
}