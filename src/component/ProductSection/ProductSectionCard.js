import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import React from "react";
import { addToCart } from "../../features/slices/cartSlice";
import { useDispatch } from "react-redux";
const ProductSectionCard = ({
  img,
  text,
  color,
  size,
  id,
  price,
  name,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <CardHeader floated={false} className="h-80">
        <img src={img} alt="" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {name}
        </Typography>
        <Typography>{text}</Typography>
        <Typography className="flex items-center justify-between py-3">
          <div className="">Size left : {size}</div>
          <div className="flex items-center justify-center">
            <div>color: </div>
            <div
              className="w-[15px] h-[15px] block ml-1 rounded-full "
              style={{ backgroundColor: color }}
            ></div>
          </div>
        </Typography>
      </CardBody>
      <CardFooter divider className="flex justify-center items-center">
        <Tooltip content="add to card" placement="bottom">
          <Button
            onClick={() =>
              dispatch(
                addToCart({
                  id,
                  name,
                  price,
                  size,
                  img,
                  text,
                  color,
                  totalPrice: price,
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
      </CardFooter>
    </Card>
  );
};

export default ProductSectionCard;
