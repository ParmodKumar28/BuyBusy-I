// Imports
import styles from "./Search.module.css";

// Functional component for the search and filter
export default function Search() {

    // Function to handle price range change
    const handlePriceChange = (event) => {
        // Handle price range change logic here
    };

    // Function to handle category selection
    const handleCategoryChange = (event) => {
        // Handle category selection logic here
    };

    // Returning JSX
    return (
        <div className={styles.searchFilterContainer}>
            <form>
                <div className={styles.filterSection}>
                    <p className={styles.heading}>Filter</p>
                    <div className={styles.priceRange}>
                        {/* Price range slider */}
                        <span>Price: 75000</span>
                        <input type="range" min="0" max="1000" onChange={handlePriceChange} />
                    </div>
                </div>
                <div className={styles.categorySection}>
                    <p className={styles.heading}>Category</p>
                    {/* Category checkboxes */}
                    <label>
                        <input type="checkbox" value="mens" onChange={handleCategoryChange} />
                        Men's Clothing
                    </label>
                    <label>
                        <input type="checkbox" value="womens" onChange={handleCategoryChange} />
                        Women's Clothing
                    </label>
                    <label>
                        <input type="checkbox" value="jewelry" onChange={handleCategoryChange} />
                        Jewelry
                    </label>
                    <label>
                        <input type="checkbox" value="electronics" onChange={handleCategoryChange} />
                        Electronics
                    </label>
                </div>
            </form>
        </div>
    )
}
