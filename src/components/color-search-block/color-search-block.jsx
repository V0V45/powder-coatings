import TextH2 from "../text/text-h2";
import classes from "./color-search-block.module.css";

export default function ColorSearchBlock() {
    return (
        <section className={classes.container}>
            <TextH2 classes={classes.h2}>Choose the paint<br />for yourself</TextH2>
            <div className={classes.search}>
                
            </div>
        </section>
    );
}