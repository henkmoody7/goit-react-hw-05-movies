import styled from 'styled-components';

export const Navigation = styled.nav`
  width: 100%;
  overflow: hidden;
  display: flex;
  gap: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  border-bottom: ${p => p.theme.borders.normal} grey;
  background-color: #252537;
  color: white;
`;
