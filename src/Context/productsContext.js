// Creating products context API here.
import { createContext, useContext, useEffect, useState } from "react";

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
    const [productsLoading, setProductsLoading] = useState(true);

    // Fetching products data here.
    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
            setProductsLoading(false);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        }
    
        fetchData();
      }, []);

    // Returning Here
    return(
        // Default Provider
        <productContext.Provider value={{ products, productsLoading }}>
            {children}
        </productContext.Provider>
    )
}