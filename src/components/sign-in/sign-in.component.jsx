// React Import
import React, { Component } from 'react';

// Styles Import
import './sign-in.styles.scss';

// Component Import
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// FireBase Util Import
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  /**
   * Resets state on form submit
   * @param {SyntheticEvent} event
   */
  handleFormSubmit = event => {
    // preventDefault tells the user agent that if the event does not get explicitly handled,
    // its default action should not be taken as it normally would be. The event continues to
    // propagate as usual, unless one of its event listeners calls stopPropagation() or
    // stopImmediatePropagation(), either of which terminates propagation at once.
    event.preventDefault();
    this.setState({ email: '', password: '' });
  }

  /**
   * Modifies state on input change
   * @param {SyntheticEvent} event
   */
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleFormSubmit}>

          {/* Form Input fields */}
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            required
            label='email'
            handleChange={this.handleInputChange}
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            required
            label='password'
            handleChange={this.handleInputChange}
          />

          {/* Form Buttons */}
          <div className='buttons'>
            <CustomButton
              type='submit'
            >
              SIGN IN
            </CustomButton>
            <CustomButton
              isGoogleSignIn
              onClick={signInWithGoogle}
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
};

export default SignIn;
