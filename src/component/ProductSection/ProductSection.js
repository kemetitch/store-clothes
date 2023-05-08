import React from "react";
import { storeData } from "../../assets/data/dummyData";

import ProductSectionCard from "./ProductSectionCard";
const ProductSection = () => {
  return (
    <div>
      <div className="bg-black p-2 w-[90%] md:w-[50%] mx-auto rounded-md ">
        <h3 className="text-white text-center text-lg font-inter font-bold tracking-normal leading-none">
          T-Shits sale up to 19%
        </h3>
      </div>
      <div className="container mx-auto py-4">
        <div className="products">
          {storeData.slice(0, 6).map((product, index) => {
            return (
              <div key={index}>
                <ProductSectionCard
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  img={product.img}
                  colors={product.color}
                  price={product.price}
                  totalPrice={product.price}
                  size={product.size[0]}
                  color={product.color[0]}
                ></ProductSectionCard>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
