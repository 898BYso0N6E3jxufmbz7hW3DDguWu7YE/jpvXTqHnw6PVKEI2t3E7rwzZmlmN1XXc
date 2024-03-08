import React from 'react';
import HomeScreen from '../components/homeScreen/HomeScreen';
import CustomPage from '../components/common/customPage/CustomPage';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <CustomPage>
        <HomeScreen />
      </CustomPage>
    </>
  );
};

export default HomePage;
