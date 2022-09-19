import axios from "axios";
import { TOKEN_CYBERSOFT, BASE_URL } from "../constants/common";

export const request = axios.create({
    baseURL: BASE_URL,
    headers:{
        tokenCyberSoft: TOKEN_CYBERSOFT,
    },
});