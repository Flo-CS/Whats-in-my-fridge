import axios from "axios";
import {SERVER_API_ENDPOINT} from "./config";

class Api {
    init() {
        const headers = {
            Accept: "application/json",
        };
        return axios.create({
            baseURL: SERVER_API_ENDPOINT,
            headers: headers,
            withCredentials: true
        });
    }

    login(data) {
        return this.init().post("/auth/login", data);
    }

    register(data) {
        return this.init().post("/auth/register", data);
    }

    checkToken() {
        return this.init().post("/auth/checkToken");
    }

    logout() {
        return this.init().post("/auth/logout");
    }

    getProducts() {
        return this.init().get("/products");
    }

    getProduct(barcode) {
        return this.init().get(`/products/${barcode}`);
    }

    addProduct(barcode) {
        return this.init().post(`/products/${barcode}`);
    }

    updateProduct(barcode, data) {
        return this.init().put(`/products/${barcode}`, data);
    }

    deleteProduct(barcode) {
        return this.init().delete(`/products/${barcode}`);
    }
}

const api = new Api();


export default api;
