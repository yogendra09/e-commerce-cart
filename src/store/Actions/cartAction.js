
import axios from "axios";
import {
  allProduct,
  removeError,
  productById,
  productByCategories,
} from "../Reducers/productReducers";

export const asyncAllProduct = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch(allProduct(data.products));
  } catch (error) {
    console.log(error)
  }
};

export const asyncProductById = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get('https://dummyjson.com/products/'+id);
    dispatch(productById(data));
  } catch (error) {
   console.log(error)
  }
};

export const asyncProductByCategory = (category) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      "https://dummyjson.com/products/category/" + category
    );
    dispatch(productByCategories(data.products));
  } catch (error) {
    console.log(error)
  }
};