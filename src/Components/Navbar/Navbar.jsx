// Imports
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css";

// Functional component for the Navbar.
export default function Navbar(){
    // Returning JSx
    return(
        <>
        <div className={styles.navbarContainer}>
            {/* Left side of nav */}
            <div className={styles.left}>
                <NavLink to="/" className={styles.navLink}>
                <h3>Busy Buy</h3>
                </NavLink>
            </div>

            {/* Right side of nav */}
            <ul className={styles.right}>
                <li>
                <NavLink to="/" className={styles.navLink}>
                    <img src="https://cdn-icons-png.flaticon.com/128/609/609803.png" alt="Home"/>
                    <h3>Home</h3>
                </NavLink>
                </li>
                
                
                <li>
                <NavLink to="/signIn" className={styles.navLink}>
                    <img src="https://cdn-icons-png.flaticon.com/128/2574/2574000.png" alt="SignIn"/>
                    <h3>SignIn</h3>
                </NavLink>
                </li>
                

            </ul>
        </div>

        {/* Showing childrens */}
        <Outlet/>
        </>
    )
}