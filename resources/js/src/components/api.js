const axios = window.axios;

const BASE_API_URL = 'http://localhost:8000/api'

export default {
    registerUser: (post) =>
        axios.post(`${BASE_API_URL}/register`, post),
    login: (post) =>
        axios.post(`${BASE_API_URL}/login`, post),
    getAllProducts: () =>
        axios.get(`${BASE_API_URL}/products`),
    getOneProduct: (id) =>
        axios.get(`${BASE_API_URL}/products/${id}/edit`),
    addProduct: (post) =>
        axios.post(`${BASE_API_URL}/products`, post),
    updateProduct: (post, id) =>
        axios.put(`${BASE_API_URL}/products/${id}`, post),
    deleteProduct: (id) =>
        axios.delete(`${BASE_API_URL}/products/${id}`),
    getUser: (id) =>
        axios.get(`${BASE_API_URL}/getdetails/${id}`),
}