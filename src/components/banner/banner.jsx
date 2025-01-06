import classes from "./banner.module.css";
import BannerH1 from "./banner-h1/banner-h1";
import ContactUsButton from "../contact-us-button/contact-us-button";
import TextCaption from "../text/text-caption";

export default function Banner() {

    return (
        <section className={classes.container}>
            <BannerH1 gridAreaTitleNumber={1} border paddingLeft paddingTop>Powder</BannerH1>
            <div className={classes.border11} />
            <div className={classes.border12} />
            <BannerH1 gridAreaTitleNumber={2} paddingLeft>Coatings</BannerH1>
            <div className={classes.border21} />
            <TextCaption classes={classes.caption}>You have experience<br />in powder coatings and we<br />produce coatings that<br />corresponds your<br />experience</TextCaption>
            <ContactUsButton gridAreaName={"contactUs"} />
        </section>
    );
}