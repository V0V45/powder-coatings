import TextH2 from "../text/text-h2";
import ArrowButton from "../arrow-button";
import classes from "./who-we-are.module.css";
import TextH3 from "../text/text-h3";
import LittleRoundedImg from "./little-rounded-img";

export default function WhoWeAre() {

    return (
        <section className={classes.container}>
            <div className={classes.cell11}>
                <TextH2 classes={classes.h2}>Who<br />We<br />Are?</TextH2>
                <ArrowButton className={classes.arrow11} />
            </div>
            <div className={classes.cell12}>
                <p className={classes.text12}>You have experience in powder coatings<br />and we produce coatings that demands your<br />expertise</p>
            </div>
            <div className={classes.cell13}>
                <TextH3 classes={classes.h3}>our team</TextH3>
                <div className={classes.threeImgs}>
                    <LittleRoundedImg number={1} />
                    <LittleRoundedImg number={2} />
                    <LittleRoundedImg number={3} />
                </div>
                <ArrowButton className={classes.arrow13} />
            </div>
            <div className={classes.cell21}>
                <TextH2 classes={classes.h2}>Who We Are?</TextH2>
            </div>
            <div className={classes.cell22}>
                <TextH2 classes={classes.h2}>Who We Are?</TextH2>
            </div>
            <div className={classes.cell23}>
                <TextH2 classes={classes.h2}>Who We Are?</TextH2>
            </div>
        </section>
    );
}