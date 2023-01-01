import { configureStore } from "@reduxjs/toolkit";
import Counterslice from "./Reduxtoolkit/Counterslice";

export default configureStore({
    reducer:{
      counter: Counterslice
    }
  })