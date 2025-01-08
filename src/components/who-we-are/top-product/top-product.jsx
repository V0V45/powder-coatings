import TextH3Upper from "../../text/text-h3-upper";
import classes from "./top-product.module.css";

export default function TopProduct() {
    
    return (
        <div className={classes.container}>
            <TextH3Upper classes={classes.text}>Watch our top product</TextH3Upper>
        </div>
    );
}