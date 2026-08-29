import { useMutation, useQuery } from "@tanstack/react-query";
{
  /* i import createProduct because is it a basic  important import requirement  */
}
import { getAllProducts, createProduct } from "../lib/api";

export const useProducts = () => {
  const result = useQuery({ queryKey: ["products"], queryFn: getAllProducts });
  return result;
};

export const useCreateProduct = () => {
  return useMutation({ mutationFn: createProduct });
};
