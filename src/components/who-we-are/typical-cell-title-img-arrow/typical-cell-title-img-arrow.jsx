import TextH3 from "../../text/text-h3";
import ArrowGrayButton from "../../buttons/arrow-gray-button";
import classes from "./typical-cell-title-img-arrow.module.css";
import industriesImg from "../../../images/industries.jpg";
import clientsImg from "../../../images/clients.jpg";

export default function TypicalCellTitleImgArrow({ arrowPosition, title }) {
    
    let arrowType;
    if (arrowPosition === "left") {
        arrowType = classes.arrowLeft;
    } else if (arrowPosition === "right") {
        arrowType = classes.arrowRight;
    }

    let imgType;
    if (title === "industries") {
        imgType = industriesImg;
    } else if (title === "clients") {
        imgType = clientsImg;
    }

    return (
    <>
        <div className={classes.container}>
            <TextH3 classes={classes.h3}>{`${title[0].toUpperCase()}${title.slice(1)}`}</TextH3>
            <img src={imgType} alt="industries" className={classes.img} />
        </div>
        <ArrowGrayButton className={arrowType} />
    </>
    );
}