// Imports
import { Link } from "react-router-dom";
import styles from "./SignIn.module.css";

// Functional component for the signin
export default function Signin(){

    // Returning JSX
    return(
        <div className={styles.signInContainer}>
            {/* Sign In form */}
            <form className={styles.signinForm}>
            <h1 className={styles.heading}>Sign In</h1>
                <input type="email" required="true" placeholder="Enter Email"/>
                <input type="password" required="true" placeholder="Enter Password"/>
                <button type="submit" className={styles.signinBtn}>Sign In</button>
                {/* Routing to the sign up page */}
                <Link to="/signUp" className={styles.signUpLink}>
                <p>Or SignUp instead</p>
                </Link>
            </form>

        </div>
    )
}