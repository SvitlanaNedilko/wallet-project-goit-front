import React from 'react'
import { NavLink } from 'react-router-dom'
import Media from 'react-media'
// import PropTypes from "prop-types";
import { ReactComponent as HomeIcon } from '../../images/svg/home.svg'
import { ReactComponent as DiagramIcon } from '../../images/svg/diagram.svg'
import { ReactComponent as CurrencyIcon } from '../../images/svg/currency.svg'
// import home from "../../images/svg/home.svg";
// import diagram from "../../images/svg/diagram.svg";
// import currency from "../../images/svg/currency.svg";
import './Navigation.scss'

// const checkActive = (match, location) => {
//   console.log(location);
//   if (!location) return false;
//   const { pathname } = location;
//   const { url } = match;
//   return pathname === url ? true : false;
// };

const Navigation = () => {
  return (
    <nav className="nav_container">
      <ul className="nav_list">
        <li>
          <NavLink
            to="/wallet-project-goit-front/home"
            className={({ isActive }) =>
              'nav_link' + (isActive ? ' nav_link_active' : '')
            }
          >
            <HomeIcon className="nav_icon" />
            <Media
              query="(min-width: 768px)"
              render={() => <span className="nav_text">Главная</span>}
            />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/wallet-project-goit-front/diagram"
            className={({ isActive }) =>
              'nav_link' + (isActive ? ' nav_link_active' : '')
            }
          >
            <DiagramIcon className="nav_icon" />
            <Media
              query="(min-width: 768px)"
              render={() => <span className="nav_text">Статистика</span>}
            />
          </NavLink>
        </li>

        <li className="nav_link_currency">
          <Media
            query="(max-width: 767px)"
            render={() => (
              <NavLink
                to="/wallet-project-goit-front/currency"
                className={({ isActive }) =>
                  'nav_link' + (isActive ? ' nav_link_active' : '')
                }
              >
                <CurrencyIcon className="nav_icon" />
                <Media
                  query="(min-width: 768px)"
                  render={() => <span className="nav_text">Статистика</span>}
                />
              </NavLink>
            )}
          />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
