import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem"; // Make sure the path matches your project structure

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]); // Runs whenever the products data updates

  return (
    <div className="my-10">
      {/* Title Section */}
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          possimus aliquid minus, odit tenetur quam quas ea assumenda, fugit
          totam deleniti, consequuntur in voluptate doloribus iure perferendis
          eaque ducimus et!
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
          latestProducts.map((item, index) => (
            <ProductItem 
              key={index} 
              id={item._id} 
              image={item.image} 
              name={item.name} 
              price={item.price} 
            />
          ))
        }
      </div>
    </div>
  );
};

export default LatestCollection;
