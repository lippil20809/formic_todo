import { Product } from "containers/Products/Products.types";

export interface FormValues extends Product {}

export interface FormProps {
  initial?: FormValues | null;
}
