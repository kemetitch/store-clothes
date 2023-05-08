import React from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { useDispatch } from "react-redux";
import { logout } from "../../features/slices/loginSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Navbar = () => {
  const param = useParams();

  let showLogout = Object.keys(param).length;
  console.log(showLogout);

  if (showLogout === 0) {
    showLogout = true;
  } else {
    showLogout = false;
  }
  const [open, setOpen] = useState(false);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const emailName = useSelector((state) => state.login.user.name);
  const handleOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  return (
    <div className="bg-black text-white">
      <div className="flex py-5  container mx-auto flex-col md:flex-row justify-between items-center">
        <div className="font-inter">Kemetitch Store</div>
        <div className="flex py-3 md:py-0 flex-row  justify-cetner items-center">
          {showLogout && (
            <button
              onClick={() => dispatch(logout())}
              className="font-inter text-base font-medium  tracking-normal leading-none text-center mr-4"
            >
              logout
            </button>
          )}

          <div
            className="flex flex-row items-center cursor-pointer"
            onClick={handleOpen}
          >
            {totalAmount > 0 ? (
              <span className="rounded-full bg-white text-black font-inter px-2 text-small mr-1">
                {totalAmount}
              </span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            )}

            <p className="font-inter text-base font-medium tracking-normal leading-none text-center mr-2">
              Shopping bag
            </p>
            <div>
              {open && <Cart openModal={open} setOpen={setOpen}></Cart>}
            </div>
          </div>
          <div className="font-bold">hi ({emailName})</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
