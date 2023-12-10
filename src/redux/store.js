import {legacy_createStore as createStore} from "redux";
import {cartReducer} from "./cartReducer.js";

export const store = createStore(cartReducer)