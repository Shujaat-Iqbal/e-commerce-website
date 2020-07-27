// React Import
import React from 'react';

// Styled Components Import
import { HomePageContainer } from './homepage.styles';

// Component Import
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
