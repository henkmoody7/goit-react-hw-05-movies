import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const GoBackLink = styled(Link)`
  text-decoration: none;
  width: max-content;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;
  box-shadow: -1px 0px 2px 2px rgba(232, 223, 232, 1);
  border-radius: ${p => p.theme.radii.normal};
  &:hover {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;
