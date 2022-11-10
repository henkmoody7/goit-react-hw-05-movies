import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box } from 'components/Box';

export const SharedLayout = () => {
  return (
    <>
      <Box as="nav" display="flex" padding={3}>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
