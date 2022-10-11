
import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./rootReducer";

const Store = configureStore(
    {
       reducer:RootReducer,
      
    }
);


export default Store;