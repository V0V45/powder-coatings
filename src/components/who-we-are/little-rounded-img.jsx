import team1 from "../../images/team1.jpg";
import team2 from "../../images/team2.jpg";
import team3 from "../../images/team3.jpg";

export default function LittleRoundedImg({number}) {
    let imgSrc;

    if (number === 1) {
        imgSrc = team1;
    } else if (number === 2) {
        imgSrc = team2;
    } else if (number === 3) {
        imgSrc = team3;
    }

    const imgStyle = {
        zIndex: number,
        borderRadius: "100%",
        maxHeight: "109px",
        position: "absolute",
        top: 0,
        left: `${(number - 1)*81}px`,
    };

    return (
        <img src={imgSrc} alt={`Employee ${number}`} style={imgStyle} />
    );
}