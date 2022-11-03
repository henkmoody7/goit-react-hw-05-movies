import styled from 'styled-components';
import { color, space, layout, flexbox, border } from 'styled-system';

export const Box = styled('div')(
  {
    boxSizing: 'border-box',
  },
  space,
  layout,
  color,
  flexbox,
  border
);
