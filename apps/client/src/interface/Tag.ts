import IDiscount from "./Discount";
import IProduct from "./Product";


export default interface ITag {
  id: number;
  name: string;
  discount?: IDiscount;
  discountID?: number;
  Product: IProduct[];
}