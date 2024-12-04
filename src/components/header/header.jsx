import classes from "./header.module.css";
import logo from "../../images/logo.svg";
import logoHover from "../../images/logo-hover.svg";
import HeaderLink from "./header-link/header-link";
import HeaderButton from "./header-button/header-button";

export default function Header() {
    function handleMouseOver(event) {
        event.target.src = logoHover;
    }

    function handleMouseOut(event) {
        event.target.src = logo;
    }

    return (
        <header>
            <div className={classes.logoContainer}>
                <img src={logo} alt="Primatek" className={classes.logo} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
            </div>
            <div className={classes.links}>
                <HeaderLink link="/" space>Products</HeaderLink>
                <HeaderLink link="/" space>Service</HeaderLink>
                <HeaderLink link="/" space>Certificates</HeaderLink>
                <HeaderLink link="/" space>Company</HeaderLink>
                <HeaderLink link="/">Contact</HeaderLink>
            </div>
            <div className={classes.logInContainer}>
                <HeaderLink link="/">Log in</HeaderLink>
            </div>
            <HeaderButton onClick={() => {}}>Sign up</HeaderButton>
        </header>
    );
}