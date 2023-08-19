import { fetcher } from "@/utils/api_config";

export const useCartProduct = () => {
  const { data, isLoading, error } = useSWR("/", fetcher);

  return {
    product: data,
    isLoading,
    error,
  };
};
