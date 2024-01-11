// Imports
import styles from "./ProductCard.module.css";
import { useUserContext } from "../../Context/usersContext";
import { useProductContext } from "../../Context/productsContext";

// Functional component for the ProductCard
export default function ProductsCard({id, title, price, description, image}){
    // Consuming User Context
    const {signedUser} = useUserContext();
    const {handleAddToCart} = useProductContext();

    // Returning JSX
    return(
        <div className={styles.productCardContainer}>
            <div className={styles.imageContainer}>
            <img src={image} alt={title} className={styles.productImage}/>
            </div>
            <div className={styles.productTitleContainer}>
            <p className={styles.productTitle}>{title}</p>
            </div>
            <p className={styles.productPrice}>{`₹ ${price}`}</p>
            <div className={styles.addToCartBtn}
                onClick={() => handleAddToCart({id, title, price, description, image}, signedUser)}>
                Add To Cart
                </div>
        </div>
    )
}