import classes from "./header.module.css";
import HeaderLink from "./header-link/header-link";
import HeaderButton from "./header-button/header-button";
import HeaderLogo from "./header-logo/header-logo";

export default function Header() {

    return (
        <header>
            <div className={classes.logoContainer}>
                <HeaderLogo />
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