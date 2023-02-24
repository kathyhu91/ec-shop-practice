// 引入影像

import { ReactComponent as SvgSearch } from "assets/icons/search.svg";
import { ReactComponent as SvgToggle } from "assets/icons/toggle.svg";
import { ReactComponent as SvgCart } from "assets/icons/cart.svg";
// import { ReactComponent as SvgMoon } from "assets/icons/moon.svg";
import { ReactComponent as SvgSun } from "assets/icons/sun.svg";
import { ReactComponent as SvgLogo } from "assets/icons/logo.svg";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container mx-auto">
        {/* <!-- navbar-toggle --> */}
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label htmlFor="navbar-toggle" className="burger-container">
          <svg className="icon-toggle cursor-point">
            <SvgToggle />
          </svg>
        </label>

        {/* <!-- navbar-menu --> */}
        <nav className="navbar-menu">
          <ul className="nav-list site-menu-list mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                男款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                女款
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                最新消息
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                客製商品
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                聯絡我們
              </a>
            </li>
          </ul>
          <ul className="nav-list site-action-list">
            {/* <!-- search --> */}
            <li className="nav-item">
              <svg className="nav-icon cursor-point">
                <SvgSearch />
              </svg>
            </li>
            {/* <!-- cart --> */}
            <li className="nav-item">
              <svg className="nav-icon cursor-point">
                <SvgCart />
              </svg>
            </li>
            <li id="theme-toggle" className="nav-item">
              {/* <!-- moon --> */}
              {/* <svg className="nav-icon cursor-point">
            <SvgMoon/>
            </svg> */}
              {/* <!-- sun --> */}
              <svg className="nav-icon cursor-point">
                <SvgSun />
              </svg>
            </li>
          </ul>
        </nav>
        {/* <!-- logo --> */}
        <a className="header-logo-container" href="/">
          <svg className="icon-logo cursor-point">
            <SvgLogo />
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
