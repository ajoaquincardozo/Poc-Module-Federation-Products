const API_SERVER = "https://dummyjson.com"

export const getProducts = (limit = 11) =>
    fetch(`${API_SERVER}/products?limit=${limit}`).then((res) => res.json());

export const getProductById = (id) =>
    fetch(`${API_SERVER}/products/${id}`)
    .then((res) => (res.json()))
    .then(response => {
        const {id, images, title, price, description} = response;

        return {
            id,
            image: images[0],
            title,
            price,
            description,
            longDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
    }).catch(err => console.log(err));

export const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});