import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { filteredOneProduct } from "../../features/slices/productSlice";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ProductCard = ({ name, text, id, img, price, colors }) => {
  const { type } = useParams();
  const dispatch = useDispatch();
  return (
    <Link to={`/filteredProducts/${type}/${id}`}>
      <Card onClick={() => dispatch(filteredOneProduct(id))}>
        <CardHeader floated={false} className="h-80">
          <img src={img} alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" className="mb-2">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <span className="font-bold">{price}$</span>
          <Typography variant="small" color="gray" className="flex gap-1">
            {colors.map((color, index) => {
              return (
                <span
                  className="rounded-full p-2"
                  style={{ backgroundColor: color, color: "white" }}
                  key={index}
                ></span>
              );
            })}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
