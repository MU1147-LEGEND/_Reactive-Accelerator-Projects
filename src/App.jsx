import { useState } from "react";
import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";
import { ProductContext } from "./context/productContext";
import AddProduct from "./components/AddProduct";

const App = () => {
    const [id, setId] = useState();
    return (
        <div className="flex m-2 gap-1 items-start">
            <ProductContext.Provider value={{ id, setId }}>
                <AddProduct />
                <div className="flex-1">
                    <ProductList />
                </div>
                <ProductDetails />
            </ProductContext.Provider>
        </div>
    );
};
export default App;
