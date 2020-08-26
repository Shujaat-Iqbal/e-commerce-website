// React Import
import React, { Component } from 'react';

// Styles Import
import './sign-in.styles.scss';

// Component Import
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// Redux Imports
import { googleSignInStart, userSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

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

    // Destructuring Properties
    const { userSignInStart } = this.props;
    const { email, password } = this.state;

    userSignInStart(email, password);

    // Clearing out form entries
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
    const { googleSignInStart } = this.props;
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
  }
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
