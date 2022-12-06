const API_SERVER = "https://dummyjson.com"

export const getProducts = (limit = 11) =>
    fetch(`${API_SERVER}/products?limit=${limit}`).then((res) => res.json());

// export const getProductById = ( id) =>
//     fetch(`${API_SERVER}/products/${id}`).then((res) => res.json());

export const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});