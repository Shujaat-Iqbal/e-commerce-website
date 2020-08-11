// React Import
import React from 'react';

// Styled Components Import
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const withSpinner = WrappedComponent => {
  // Based on property 'isLoading' spinner gets rendered else we use the component
  // wrapped into spinner and pass on required props for that
  const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading
      ? (
        <SpinnerOverlay>
          <SpinnerContainer />
        </SpinnerOverlay>
      ) : (
        <WrappedComponent {...otherProps} />
      )
  }

  return spinner;
}

export default withSpinner;
