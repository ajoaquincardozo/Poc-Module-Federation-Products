const API_SERVER = "https://poc-module-federation-app-server.vercel.app" //http://localhost:8081"

const getCookie = (name) => {
    const cookieByName = document
        .cookie
        .split(";")
        .reduce((result, cookieRaw) => {
            const [key, value] = cookieRaw.split("=");
            return { ...result, [key]: value }
        }, {});

    return cookieByName[name];
}

export const getProducts = (limit = 11) =>
    fetch(`${API_SERVER}/products?limit=${limit}`).then((res) => res.json());

export const getProductById = (id) =>
    fetch(`${API_SERVER}/products/${id}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("auth-login")}`,
        }
    })
    .then((res) => (res.json()));

export const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});