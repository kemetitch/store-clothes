import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@material-tailwind/react";
import {
  filteredProducts,
  filterColor,
  filterPrice,
  filterSize,
  filterGender,
} from "../../features/slices/productSlice";
import Error from "../Error/Error";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Navbar from "../Navbar/Navbar";
const FilteredProducts = () => {
  const { type } = useParams();
  const error = useSelector((state) => state.products.error);
  console.log(error);
  const products = useSelector((state) => state.products.filteredProducts);
  const colors = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const genders = ["male", "female"];
  const dispatch = useDispatch();
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto">
        <div className="">
          <h1 className="text-4xl py-2 font-inter text-gray text-gray-600">
            {type}
          </h1>
        </div>
        <div className="flex flex-wrap gap-1 p-1 justify-center align-center">
          {genders.map((gender, index) => {
            return (
              <Button
                key={index}
                onClick={() => dispatch(filterGender(gender))}
                color="gray"
                variant="outlined"
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-2"
              >
                {gender}
              </Button>
            );
          })}
          <Button
            color="gray"
            onClick={() => dispatch(filterPrice())}
            variant="outlined"
            className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-2"
          >
            high price
          </Button>
          <Menu>
            <MenuHandler>
              <Button
                color="gray"
                variant="outlined"
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-2"
              >
                select a color
              </Button>
            </MenuHandler>
            <MenuList>
              {colors.map((color, index) => {
                return (
                  <MenuItem
                    onClick={() => dispatch(filterColor(color))}
                    key={index}
                    style={{ color: color }}
                  >
                    {color}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
          <Menu>
            <MenuHandler>
              <Button
                disabled={type === "Bags"}
                color="gray"
                variant="outlined"
                className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-2"
              >
                select a size
              </Button>
            </MenuHandler>
            <MenuList>
              {sizes.map((size, index) => {
                return (
                  <MenuItem
                    onClick={() => dispatch(filterSize(size))}
                    key={index}
                  >
                    {size}
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
          <Button
            onClick={() => dispatch(filteredProducts(type))}
            color="gray"
            variant="outlined"
            className="text-black hover:bg-gray-300 duration-300 ease-in-out"
          >
            Reset all filters
          </Button>
        </div>
        {error ? (
          <Error></Error>
        ) : (
          <div className="products py-8 ">
            {products
              .filter((product) => product.type === type)
              .map((product, index) => {
                return (
                  <ProductCard
                    key={index}
                    id={product.id}
                    name={product.name}
                    text={product.text}
                    img={product.img}
                    colors={product.color}
                    price={product.price}
                  ></ProductCard>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilteredProducts;
