import { Button } from "@material-tailwind/react";
import React from "react";
import clothes from "../../assets/images/clothes.jpg";
import { useDispatch } from "react-redux";
import { filteredProducts } from "../../features/slices/productSlice";
import { Link } from "react-router-dom";
const NavigateButtons = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center py-8">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="m-1">
              <Link to={`/filteredProducts/${button}`}>
                <Button
                  onClick={() => dispatch(filteredProducts(button))}
                  ripple={true}
                  color="gray"
                  variant="outlined"
                  size="md"
                  className="hover:bg-gray-300 hover:text-black durantion-500 "
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-black p-2 w-[90%] md:w-[50%] mx-auto rounded-md ">
        <h3 className="text-white text-center text-lg font-inter font-bold tracking-normal leading-none">
          Sales Up To 50%
        </h3>
      </div>
      <div className="flex justify-center item-center py-4">
        <img
          alt=""
          className="h-[600px] lg:w-[70%] rounded-md shadow-lg shadow-gray-600 "
          src={clothes}
        ></img>
      </div>
    </div>
  );
};

export default NavigateButtons;
