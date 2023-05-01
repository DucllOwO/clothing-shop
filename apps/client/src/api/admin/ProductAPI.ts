import { publicRequest, userRequest } from "../api";
import { IProduct } from "../../interface/Product";

export function fetchAllProducts(){
  return userRequest.get(`/product`);
};

export function fetchAllTag(){
  return userRequest.get(`/tag`);
}

export function fetchTag(id: number){
  return userRequest.get(`/tag/${id}`);
}