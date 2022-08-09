import axios from "axios";
import baseURL from "../constants/urls";

const axiosServices = axios.create({baseURL});

export {axiosServices}