import { useEffect } from "react";
import { getTourItems } from "../components/reducers/tourReducer";
import { useDispatch, useSelector } from "react-redux";

export const useTourItems = () => {
    const dispatch = useDispatch();

    const { items = [], isLoading } = useSelector(({ tour }) => tour);

    useEffect(() => {
        !items.length && dispatch(getTourItems());
    }, [items, dispatch]);

    return { items, isLoading };
};
