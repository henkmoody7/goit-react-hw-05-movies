import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Navigation } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Navigation>
        <Link to="/">Home</Link>
        <Link to="movies">Movies</Link>
      </Navigation>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
