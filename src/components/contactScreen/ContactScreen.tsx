import React from 'react';
import styles from './ContactScreen.module.scss';
import { contactEmail } from '../../constants';

const ContactScreen: React.FC = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.contentContainer}`}>
          <div className={`${styles.cardContainer}`}>
            <div className={`${styles.text1}`}>If you have any queries, please write to us at</div>
            <a href={`mailto:${contactEmail}`}>
              <div className={`${styles.text2}`}>{contactEmail}</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactScreen;
