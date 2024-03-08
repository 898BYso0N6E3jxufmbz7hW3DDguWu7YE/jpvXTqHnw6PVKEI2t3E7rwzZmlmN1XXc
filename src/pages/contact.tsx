import React from 'react';
import CustomPage from '../components/common/customPage/CustomPage';
import ContactScreen from '../components/contactScreen/ContactScreen';

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <>
      <CustomPage>
        <ContactScreen />
      </CustomPage>
    </>
  );
};

export default ContactPage;
