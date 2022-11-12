import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const CastListItem = styled.li`
  width: calc((100% / 4) - 15px);
`;

export const Character = styled.span`
  color: ${p => p.theme.colors.accent};
  font-style: italic;
`;
