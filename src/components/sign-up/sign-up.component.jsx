// React Import
import React, { useState } from 'react';

// Styles Import
import './sign-up.styles.scss';

// Component Import
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// Redux Imports
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {

  const [ userCredentials, setUserCredentials ] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Destructuring required fields
  const { displayName, email, password, confirmPassword } = userCredentials;

  /**
   * Resets state on form submit
   * @param {SyntheticEvent} event
   */
  const handleFormSubmit = async event => {
    // preventDefault tells the user agent that if the event does not get explicitly handled,
    // its default action should not be taken as it normally would be. The event continues to
    // propagate as usual, unless one of its event listeners calls stopPropagation() or
    // stopImmediatePropagation(), either of which terminates propagation at once.
    event.preventDefault();


    if (password !== confirmPassword) {
      alert("Passwords Don't match");
      return;
    }

    // Starting up sign up process in sagas
    signUpStart({ email, password, displayName });
  }

  /**
   * Modifies state on input change
   * @param {SyntheticEvent} event
   */
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  }

  // Component JSX code
  return(
    <div className='sign-up'>
      <h2 className='title'>I don't have an account</h2>
      <span>Sign up with your email and password</span>

      {/* Sign Up Form */}
      <form className='sign-up-form' onSubmit={handleFormSubmit}>
        {/* Form Inputs */}
        <FormInput
          name='displayName'
          type='text'
          value={displayName}
          handleChange={handleInputChange}
          label='Display Name'
          required
        />
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleInputChange}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleInputChange}
          label='Password'
          required
        />
        <FormInput
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          handleChange={handleInputChange}
          label='Confirm Password'
          required
        />

        {/* Form Submit */}
        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </div>
  );
};

/**
 * Maps dispatch actions to component props via connect
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
