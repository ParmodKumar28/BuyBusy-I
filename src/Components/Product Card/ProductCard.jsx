// Imports
import styles from "./ProductCard.module.css";

// Functional component for the ProductCard
export default function ProductsCard({id, title, price, description, image}){

    // Returning JSX
    return(
        <div className={styles.productCardContainer}>
            <div className={styles.imageContainer}>
            <img src={image} alt={title} className={styles.productImage}/>
            </div>
            <div className={styles.productTitleContainer}>
            <p className={styles.productTitle}>{title}</p>
            </div>
            <p className={styles.productPrice}>{`₹ ${price * 80}`}</p>
            <div className={styles.addToCartBtn}>Add To Cart</div>
        </div>
    )
}