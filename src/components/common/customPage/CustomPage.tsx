import React, { ReactNode } from 'react';
import styles from './CustomPage.module.scss';
import Footer from '../footer/Footer';
import NavBar from '../navBar/NavBar';

type CustomPageProps = {
  children: ReactNode;
};

const CustomPage: React.FC<CustomPageProps> = ({ children }) => {
  // // select the favicon
  // const faviconEl: Element = document.querySelector('link[rel="icon"]')!;
  // // watch for changes
  // const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  // mediaQuery.addEventListener('change', themeChange);
  // // listener
  // function themeChange(event: MediaQueryListEvent) {
  //   faviconEl.setAttribute('href', 'https:///favicon.ico');
  // }

  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.contentContainer}`}>
          <div className={`${styles.headerContainer}`}>
            <NavBar />
          </div>
          <div className={`${styles.bodyContainer}`}>{children}</div>
        </div>
        <div className={`${styles.footerContainer}`}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CustomPage;
