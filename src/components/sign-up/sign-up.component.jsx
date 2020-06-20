import React, { Component } from 'react';

import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {

  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

    /**
   * Resets state on form submit
   * @param {SyntheticEvent} event
   */
  handleFormSubmit = async event => {
    // preventDefault tells the user agent that if the event does not get explicitly handled,
    // its default action should not be taken as it normally would be. The event continues to
    // propagate as usual, unless one of its event listeners calls stopPropagation() or
    // stopImmediatePropagation(), either of which terminates propagation at once.
    event.preventDefault();

    // Destructuring required fields from state
    const { displayName, email, password, confirmPassword } = this.state;
  
    if (password !== confirmPassword) {
      alert("Passwords Don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch(error) {
      console.error('error while creating user. ', error.message);
    }
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
    // Destructuring required fields from state
    const { displayName, email, password, confirmPassword } = this.state;

    return(
      <div className='sign-up'>
        <h2 className='title'>I don't have an account</h2>
        <span>Sign up with your email and password</span>

        {/* Sign Up Form */}
        <form className='sign-up-form'>
          {/* Form Inputs */}
          <FormInput
            name='displayName'
            type='text'
            value={displayName}
            handleChange={this.handleInputChange}
            label='Display Name'
            required
          />
          <FormInput
            name='email'
            type='email'
            value={email}
            handleChange={this.handleInputChange}
            label='Email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={this.handleInputChange}
            label='Password'
            required
          />
          <FormInput
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            handleChange={this.handleInputChange}
            label='Confirm Password'
            required
          />

          {/* Form Submit */}
          <CustomButton type='submit'>Sign Up</CustomButton>
        </form>
      </div>
    );
  }

};

export default SignUp;
