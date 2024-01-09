// Imports
import styles from "./Products.module.css";
import Search from "../../Components/Search/Search";
import ProductsList from "../../Components/Products List/ProductsList";
import { useProductContext } from "../../Context/productsContext";
import Loader from "../../Components/Loader/Loader";

// Page for the products
export default function Products(){
    // Using context
    const {productsLoading} = useProductContext();

    // Returning Jsx
    return(
        <>
        {/* Showing loader while products loads */}
        { productsLoading ? (
            <Loader/>
            ) : (
            <>
        <div className={styles.searchBarContainer}>
        <input type="search" placeholder="Search By Name" className={styles.searchBar}/>
        </div>
        <div className={styles.searchFilterContainer}>
            <Search/>
        </div>
        <div className={styles.productsContainer}>
            <ProductsList/>
        </div>
            </>
        )}
        </>
    )
}