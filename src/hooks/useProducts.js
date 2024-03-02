import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsItems } from "../components/reducers/productsReducer";

export const useProducts = () => {
    const dispatch = useDispatch();

    const { items = [], isLoading } = useSelector(({ products }) => products);
    useEffect(() => {
        !items.length && dispatch(getProductsItems());
    }, [items, dispatch]);

    return { items, isLoading };
};
