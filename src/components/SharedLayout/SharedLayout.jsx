import { Link, Outlet } from 'react-router-dom';

import { Box } from 'components/Box';

export const SharedLayout = () => {
  return (
    <>
      <Box as="nav" display="flex" padding={3}>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
      </Box>
      <Outlet />
    </>
  );
};
