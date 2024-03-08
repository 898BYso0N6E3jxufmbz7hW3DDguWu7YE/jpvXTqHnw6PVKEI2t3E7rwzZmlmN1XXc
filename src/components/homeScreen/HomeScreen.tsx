import React from 'react';
import styles from './HomeScreen.module.scss';
import { fnPlayStoreUrl, fnWebsiteUrl } from '../../constants';

const HomeScreen: React.FC = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.contentContainer}`}>
          <div className={`${styles.cardContainer}`}>
            <img className={`${styles.appLogo}`} src="/assets/logos/fnLogo.png" alt="fnLogo" />
            <div className={`${styles.title}`}>FNearby</div>
            <div className={`${styles.description}`}>Find Nearby Services - Makes Life Easier</div>
            <div className={`${styles.actionsContainer}`}>
              <a href={fnPlayStoreUrl} target="_blank" rel="noreferrer">
                <img className={`${styles.playStoreImg}`} src="/assets/images/playstore.png" alt="fnLogo" />
              </a>
              <a href={fnWebsiteUrl} target="_blank" rel="noreferrer">
                <div className={`${styles.text}`}>Website</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
