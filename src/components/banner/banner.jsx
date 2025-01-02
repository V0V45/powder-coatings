import classes from "./banner.module.css";
import BannerH1 from "./banner-h1/banner-h1";
import ContactUsButton from "../contact-us-button/contact-us-button";

export default function Banner() {

    return (
        <section className={classes.container}>
            <BannerH1 gridAreaTitleNumber={1}>Powder</BannerH1>
            <BannerH1 gridAreaTitleNumber={2}>Coatings</BannerH1>
            <p className={classes.caption}>You have experience in powder coatings and we produce coatings that corresponds your experience</p>
            <ContactUsButton gridAreaName={"contactUs"} />
        </section>
    );
}