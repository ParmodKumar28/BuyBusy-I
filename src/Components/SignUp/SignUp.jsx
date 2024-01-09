// Imports
import styles from "./SignUp.module.css";

// Functional component for the signUp
export default function Signup(){

    // Returning JSX
    return(
        <div className={styles.signUpContainer}>
            <form className={styles.signupForm}>
            <h1 className={styles.heading}>Sign Up</h1>
                <input type="text" required="true" placeholder="Enter Name"/>
                <input type="email" required="true" placeholder="Enter Email"/>
                <input type="password" required="true" placeholder="Enter Password"/>
                <button type="submit"  className={styles.signupBtn}>Sign Up</button>
            </form>
        </div>
    )
}