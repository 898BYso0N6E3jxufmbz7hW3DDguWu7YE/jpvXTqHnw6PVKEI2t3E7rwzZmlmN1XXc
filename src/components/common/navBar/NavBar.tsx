import { useState } from "react";
import styles from "./NavBar.module.scss";
import { HashLink } from "react-router-hash-link";

const NavBar: React.FC = () => {
  const [isShowSideNavbar, setIsShowSideNavbar] = useState(false);
  const contentContainerStyles = isShowSideNavbar
    ? styles.contentContainerActive
    : styles.contentContainerInactive;
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.logo}`}>
          <a href={"/"} rel={"noreferrer"}>
            <img
              src="/assets/logos/fnLogo.png"
              width={"100%"}
              height={"100%"}
              alt="fnLogo"
            />
          </a>
        </div>
        <div
          className={`${styles.menuIcon}`}
          onClick={() => setIsShowSideNavbar(true)}
        >
          <img
            src="/assets/images/menuIcon.svg"
            width={"100%"}
            height={"100%"}
            alt="menuLogo"
          />
        </div>
        <div className={`${styles.contentContainer} ${contentContainerStyles}`}>
          <div
            className={`${styles.closeIcon}`}
            onClick={() => setIsShowSideNavbar(false)}
          >
            <img
              src="/assets/images/closeIcon.svg"
              width={"100%"}
              height={"100%"}
              alt="closeLogo"
            />
          </div>
          <div className={`${styles.navElementsContainer}`}>
            <div className={`${styles.navElement}`}>
              <HashLink
                smooth
                to={"/"}
                onClick={() => {
                  setIsShowSideNavbar(false);
                }}
              >
                Home
              </HashLink>
            </div>
            {/* <div className={`${styles.navElement}`}>
              <HashLink
                smooth
                to={"/contact"}
                onClick={() => {
                  setIsShowSideNavbar(false);
                }}
              >
                Contact Us
              </HashLink>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
