import { Outlet, Link } from "react-router-dom";
import LogoutButton from "../components/logout";
import './Layout.css' 

function Layout() {
    return (
        
     <div className="layout">
     <div className="dropdown">
    <button className="dropbtn">Dropdown 

    </button>
    <div class="dropdown-content">
            <nav className="navbar">
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
                    <li><LogoutButton />
                    </li>
                </ul>
            </nav>
</div>
</div>

            <Outlet />
           </div>
    );
}

export default Layout;