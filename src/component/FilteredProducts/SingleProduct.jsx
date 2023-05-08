import React from "react";
import { useSelector } from "react-redux";
import { Tooltip, Button } from "@material-tailwind/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";
import Navbar from "../Navbar/Navbar";
const SingleProduct = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.filteredOneProduct);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const { id } = useParams();
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto">
        {product
          .filter((product) => product.id === id)
          .map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center  flex-wrap gap-10 flex-col  md:flex-row "
              >
                <div className="flex-1 h-[80vh] flex items-center ">
                  <img src={item.img} className=" h-[80%] rounded-lg" alt="" />
                </div>
                <div className="flex-1  p-3 ">
                  <h2 className="pb-4">{item.name}</h2>
                  <p className="text-orange-700 pb-4 font-bold font-inter">
                    15% OFF
                  </p>
                  <p className="text-gray-700 pb-4  font-inter">{item.text}</p>
                  <div className="pb-4">
                    <div>
                      <label htmlFor="size">Select Size</label>
                      <select
                        className="w-full p-2 rounded-md border-2 border-solid border-gray-400"
                        id="size"
                        name="size"
                        onChange={(e) => setSize(e.target.value)}
                        value={size}
                      >
                        {item?.size?.map((size, index) => {
                          return <option key={index}>{size}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="pb-4">
                    <div>
                      <label htmlFor="color">Select Color</label>
                      <select
                        className="w-full p-2 rounded-md border-2 border-solid border-gray-400"
                        id="color"
                        onChange={(e) => setColor(e.target.value)}
                        value={color}
                        name="color"
                      >
                        {item.color.map((color, index) => {
                          return <option key={index}>{color}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                  <Tooltip content="add to card" placement="bottom">
                    <Button
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            size: size,
                            img: item.img,
                            text: item.text,
                            color: color,
                            totalPrice: item.price,
                            amount: 1,
                          })
                        )
                      }
                      variant="outlined"
                      color="gray"
                    >
                      Add To Card
                    </Button>
                  </Tooltip>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SingleProduct;
