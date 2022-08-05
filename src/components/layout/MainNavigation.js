import { NavLink, Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to='/quotes' className={classes.logo}>
        Great Quotes
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to='/quotes'
              className={navData => (navData.isActive ? classes.active : '')}
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/new-quote'
              className={navData => (navData.isActive ? classes.active : '')}
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
