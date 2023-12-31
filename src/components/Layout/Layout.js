import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <ul className={css.lists}>
            <li className={css.list}>
              <NavLink className={css.link} to="/">
                Home
              </NavLink>
            </li>
            <li className={css.list}>
              <NavLink className={css.link} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
      <main className={css.main}>
        <div className={css.container}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default Layout;
