import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import MyPhotos from "../../Assets/feed.svg?react";
import Stats from "../../Assets/estatisticas.svg?react";
import AddPhoto from "../../Assets/adicionar.svg?react";
import Exit from "../../Assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();
  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? styles.navMobile : styles.nav} ${
          mobileMenu && styles.navMobileActive
        }`}
      >
        <NavLink to="/account">
          <MyPhotos />
          {mobile && "My Photos"}
        </NavLink>
        <NavLink to="/account/statistics">
          <Stats />
          {mobile && "Statistics"}
        </NavLink>
        <NavLink to="/account/post">
          <AddPhoto />
          {mobile && "Add Photo"}
        </NavLink>
        <button onClick={handleLogout}>
          <Exit />
          {mobile && "Logout"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
