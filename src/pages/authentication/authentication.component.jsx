// React Import
import React from 'react';

// Styles Import
import './authentication.styles.scss';

// Component Import
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const AuthenticationPage = () => (
  <div className='authentication'>
    <SignIn />
    <SignUp />
  </div>
);

export default AuthenticationPage;
