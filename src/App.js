import React from "react";
import "./App.css";
import Main from "./component/Main/Main";
import { Route, Routes } from "react-router-dom";
import FilteredProducts from "./component/FilteredProducts/FilteredProducts";
import SingleProduct from "./component/FilteredProducts/SingleProduct";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main></Main>} path="/"></Route>

        <Route
          element={<FilteredProducts />}
          path={"/filteredProducts/:type"}
        ></Route>
        
        <Route
          element={<SingleProduct />}
          path={"/filteredProducts/:type/:id"}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
