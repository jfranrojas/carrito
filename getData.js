const API = "/products.json";

export const getData = async () => {
    const response = await fetch(API);
    const data = await response.json();

    return data;
};