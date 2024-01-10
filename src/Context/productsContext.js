// Creating products context API here.
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Create Context
export const productContext = createContext();

// Custom hooks to use product context
export function useProductContext(){
    const value = useContext(productContext);
    return value;
}

// Creating Custom provider component
export function CustomProductContext({ children }){
    // States
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [isFiltered, setIsfiltered] = useState(false);
    const [productsLoading, setProductsLoading] = useState(true);
    const [searchValue, setSearchValue] = useState("");
    const [selectedPrice, setSelectedPrice] = useState(0);
    const [selectedCategories, setSelectedCategories] = useState([]);

    // Fetching products data here.
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            // Converting the prices in the Dollar to Rupees
            const productsWithINRPrice = data.map(product => ({
              ...product,
              price: Math.round(product.price * 80) // Assuming 1 USD = 74.5 INR
            }));

            // Setting the products state here
            setProducts(productsWithINRPrice);
            setProductsLoading(false);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        }
    
        fetchData();
      }, []);

    // Search and filter
    useEffect(() => {
      // Setting isFiltered state to true
      setIsfiltered(true);
      let filteredProducts = products;
    
      // If both price and categories selected
      if (selectedPrice && selectedCategories.length > 0) {
        filteredProducts = products.filter(
          (product) => product.price <= selectedPrice && selectedCategories.includes(product.category)
        );
      } else if(searchValue){
        filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchValue));
      } else if (selectedPrice) { 
        filteredProducts = products.filter((product) => product.price <= selectedPrice);
      } else if (selectedCategories.length > 0) {
        filteredProducts = products.filter((product) => selectedCategories.includes(product.category));
      }
      // If price and categories both deselected then setting isFiltered false
      else if(!searchValue && !selectedPrice && selectedCategories.length === 0)
      {
        setIsfiltered(false);
      }
      // Setting the state for filtered products
      setFilteredProducts(filteredProducts);
      // Showing notification
    }, [products, searchValue, selectedPrice, selectedCategories]);

    // Function to handle the search name.
    const handleSearchProductByName = (event) => {
      const selectedName = event.target.value.toLowerCase();
      setSearchValue(selectedName)
    }
    

    // Function to handle price range change
      const handlePriceChange = (event) => {
        const selectedValue = parseInt(event.target.value);
        setSelectedPrice(selectedValue);
    };

    // Function to handle category selection
    const handleCategoryChange = (event) => {
      const selectedCategory = event.target.value;
      if(selectedCategories.includes(selectedCategory))
      {
        // Remove the selected category
        const updatedCategories = selectedCategories.filter((category) => category !== selectedCategory);
        setSelectedCategories(updatedCategories);
      }
      else
      {
        setSelectedCategories([...selectedCategories, selectedCategory]);
      }
    };

    // Returning Here
    return(
        // Default Provider
        <productContext.Provider value={{ 
              products,
              productsLoading, 
              handlePriceChange, 
              handleCategoryChange, 
              selectedPrice, 
              isFiltered, 
              filteredProducts,
              handleSearchProductByName
            }}>
            {children}
        </productContext.Provider>
    )
}