import {axiosServices} from "./axios.services";
import {urls} from "../constants";


const weatherServices = {
    getAll: () => axiosServices(urls.weather)
}
export {weatherServices}