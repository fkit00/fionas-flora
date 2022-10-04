import { Outlet, Link } from "react-router-dom";
import LogoutButton from "../components/logout";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/yourplants">Your plants</Link>
          </li>
          <li>
            <Link to="/addaplant">Add a plant</Link>
          </li>
          <li><LogoutButton/>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;