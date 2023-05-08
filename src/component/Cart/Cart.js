import React from "react";
import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../../features/slices/cartSlice";
const Cart = ({ openModal, setOpen }) => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  return (
    <div>
      <Fragment>
        {totalAmount > 0 ? (
          <Dialog
            size="xl"
            className="max-h-[500px] overflow-scroll"
            open={openModal}
            handler={() => setOpen(false)}
          >
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody divider>
              {cart.map((product, index) => {
                return (
                  <div key={index}>
                    <div className="grid grid-cols-2 mb-3">
                      <div>
                        <div>
                          <img
                            src={product.img}
                            alt={product.name}
                            className="h-[100px] rounded-md"
                          ></img>
                        </div>
                        <h3 className="text-black font-bold py-2 font-inter">
                          {product.name}
                        </h3>
                        <p className="text-xs max-w-xs text-black">
                          {product.text}
                        </p>
                      </div>
                      <div className="pl-2">
                        <p>
                          Selected Size :{" "}
                          <span className="text-black">{product.size}</span>
                        </p>
                        <p>
                          Selected color :{" "}
                          <span className="text-black">{product.color}</span>
                        </p>
                        <p>
                          {" "}
                          Amount:{" "}
                          <span className="text-black">{product.amount}</span>
                        </p>
                        <p>
                          Single Item Price :{" "}
                          <span className="text-black">{product.price}</span>
                        </p>
                        <p>
                          Total Item Price :{" "}
                          <span className="text-black">
                            {product.totalPrice}
                          </span>
                        </p>
                        <Button
                          onClick={() => dispatch(removeItem(product))}
                          color="red"
                          size="sm"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </DialogBody>
            <DialogFooter className="text-black text-xl">
              Total Price is : {totalPrice}
            </DialogFooter>
          </Dialog>
        ) : (
          <Dialog open={openModal} handler={() => setOpen(false)}>
            <DialogHeader>Shopping Bag</DialogHeader>
            <DialogBody divider>
              <h2 className="pb-3 text-black text-3xl"> No Items Found</h2>
              <p className="text-gray-700">Please put Items To Card</p>
            </DialogBody>
          </Dialog>
        )}
      </Fragment>
    </div>
  );
};

export default Cart;
