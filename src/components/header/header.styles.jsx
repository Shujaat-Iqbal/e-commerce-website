// React Import
import { Link } from 'react-router-dom';

// Styled Import
import styled, { css } from 'styled-components';
// css lets us write css code block and then it can e used in components
// Useful for multiple different components, tags using same styles

// Reusable Styles
const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

// Styled Components
export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
