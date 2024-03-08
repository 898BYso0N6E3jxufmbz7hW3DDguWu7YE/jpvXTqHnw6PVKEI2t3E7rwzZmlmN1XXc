import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <>
      <div className={`footer-container ${styles.footerContainer}`}>
        <div className={`${styles.footerContent}`}>
          <div className={`${styles.copyrightText} font-semibold`}>© 2024 FNearby Labs. All rights reserved</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
