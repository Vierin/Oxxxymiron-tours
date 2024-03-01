import { MAIN_URL } from "./constants";

export const request = async (query) => {
    try {
        const result = await fetch(MAIN_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({ query }),
        });

        const { data } = await result.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};

export const sortByDate = (arr) => {
    return arr.sort((a, b) => new Date(a.date) - new Date(b.date));
};

export const getLocaleDateString = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
    });
};
