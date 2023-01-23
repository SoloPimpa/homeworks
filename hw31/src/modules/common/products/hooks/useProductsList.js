import useProducts from "./useProduct";

export default function useProductsList() {
    const { list } = useProducts();

    return list;
}