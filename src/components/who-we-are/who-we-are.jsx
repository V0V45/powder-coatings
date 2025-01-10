import TextH2 from "../text/text-h2";
import ArrowOrangeButton from "../buttons/arrow-orange-button";
import classes from "./who-we-are.module.css";
import TextH3 from "../text/text-h3";
import LittleRoundedImg from "./little-rounded-img";
import TypicalCellTitleImgArrow from "./typical-cell-title-img-arrow/typical-cell-title-img-arrow";
import CatalogButton from "./catalog-button";
import TextCaption from "../text/text-caption";
import TextH3Upper from "../text/text-h3-upper";
import TopProduct from "./top-product/top-product";

export default function WhoWeAre() {

    return (
        <section className={classes.container}>
            <div className={classes.cell11}>
                <TextH2 classes={classes.h2}>Who<br />We<br />Are?</TextH2>
                <ArrowOrangeButton className={classes.arrow11} />
            </div>
            <div className={classes.cell12}>
                <TextH3Upper classes={classes.text12}>You have experience in powder coatings<br />and we produce coatings that demands your<br />expertise</TextH3Upper>
            </div>
            <div className={classes.cell13}>
                <TextH3 classes={classes.h3cell13}>our team</TextH3>
                <div className={classes.threeImgs}>
                    <LittleRoundedImg number={1} />
                    <LittleRoundedImg number={2} />
                    <LittleRoundedImg number={3} />
                </div>
                <ArrowOrangeButton className={classes.arrow13} />
            </div>
            <div className={classes.cell21}>
                <TypicalCellTitleImgArrow arrowPosition={"left"} title={"industries"} />
            </div>
            <div className={classes.cell22}>
                <CatalogButton className={classes.catalog} />
                <TopProduct />
                <TextCaption classes={classes.text22}>You have experience in powder coatings<br />and we produce coatings that demands your expertise</TextCaption>
            </div>
            <div className={classes.cell23}>
                <TypicalCellTitleImgArrow arrowPosition={"right"} title={"clients"} />
            </div>
        </section>
    );
}