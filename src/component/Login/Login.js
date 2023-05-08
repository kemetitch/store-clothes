import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import { login } from "../../features/slices/loginSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const intialState = {
    name: "",
    password: "",
  };
  const [values, setValues] = useState(intialState);
  const handler = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-96">
        <CardHeader color="blue" className="mb-4 grid h-28 place-items-center">
          <Typography variant="h3" color="white">
            Login
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <Input
            label="Name"
            size="lg"
            name="name"
            onChange={handler}
            value={values.name}
          />
          <Input
            label="Password"
            size="lg"
            type="password"
            name="password"
            onChange={handler}
            value={values.password}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            color="blue"
            variant="outlined"
            onClick={() => dispatch(login(values))}
            fullWidth
          >
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
