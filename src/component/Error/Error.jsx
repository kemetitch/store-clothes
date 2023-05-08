import { Alert } from "@material-tailwind/react";
import React from "react";

const Error = () => {
  return (
    <div className="h-[80vh] w-[100%] flex justify-center items-center ">
      <Alert style={{ textAlign: "center" }}>
        A simple alert for showing message.
      </Alert>
      ;
    </div>
  );
};

export default Error;
