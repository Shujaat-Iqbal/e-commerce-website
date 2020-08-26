// React Import
import React, { useState } from 'react';

// Styles Import
import './sign-in.styles.scss';

// Component Import
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// Redux Imports
import { googleSignInStart, userSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const SignIn = ({ userSignInStart, googleSignInStart }) => {

  // React Hooks
  const [ userCredentials, setUserCredentials ] = useState({ email: '', password: '' });

  // Destructuring Properties
  const { email, password } = userCredentials;

  /**
   * Resets state on form submit
   * @param {SyntheticEvent} event
   */
  const handleFormSubmit = event => {
    // preventDefault tells the user agent that if the event does not get explicitly handled,
    // its default action should not be taken as it normally would be. The event continues to
    // propagate as usual, unless one of its event listeners calls stopPropagation() or
    // stopImmediatePropagation(), either of which terminates propagation at once.
    event.preventDefault();

    userSignInStart(email, password);

    // Clearing out form entries
    setUserCredentials({ email: '', password: '' });
  }

  /**
   * Modifies state on input change
   * @param {SyntheticEvent} event
   */
  const handleInputChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  }

  // Component JSX
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleFormSubmit}>

        {/* Form Input fields */}
        <FormInput
          name='email'
          type='email'
          value={userCredentials.email}
          required
          label='email'
          handleChange={handleInputChange}
        />
        <FormInput
          name='password'
          type='password'
          value={userCredentials.password}
          required
          label='password'
          handleChange={handleInputChange}
        />

        {/* Form Buttons */}
        <div className='buttons'>
          <CustomButton
            type='submit'
          >
            SIGN IN
          </CustomButton>

          {/* We have to specify button as a type otherwise it'll get treated as a form subbmit handler */}
          <CustomButton
            type='button'
            isGoogleSignIn
            onClick={googleSignInStart}
          >
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

/**
 * maps Dispatch actions to component props
 * @param dispatch
 */
const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  userSignInStart: (email, password) => dispatch(userSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
