import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
{
  /* i import createProduct because is it a basic  important import requirement  */
}
import {
  getAllProducts,
  createProduct,
  deleteProduct,
  getProductById,
  getMyProducts,
} from "../lib/api";

export const useProducts = () => {
  const result = useQuery({ queryKey: ["products"], queryFn: getAllProducts });
  return result;
};

export const useCreateProduct = () => {
  return useMutation({ mutationFn: createProduct });
};

export const useProduct = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    enabled: !!id,
    // double bang operator
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myProduct"] });
    },
  });
};

export const useMyProducts = () => {
  return useQuery({ queryKey: ["myProduct"], queryFn: getMyProducts });
};
