import FilledButton from "../buttons/filled-button/filled-button";
import TextH2 from "../text/text-h2";
import classes from "./color-search-block.module.css";

export default function ColorSearchBlock() {
    return (
        <section className={classes.container}>
            <TextH2 classes={classes.h2}>Choose the paint<br />for yourself</TextH2>
            <div className={classes.searchContainer}>
                <FilledButton color="orange">Search</FilledButton>
                <FilledButton color="gray">Reset filters</FilledButton>
            </div>
        </section>
    );
}