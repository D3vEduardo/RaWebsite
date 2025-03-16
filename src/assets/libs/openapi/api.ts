import { paths } from "./schema";
import createClient from "openapi-fetch";

export const api = createClient<paths>({
    baseUrl: "https://rainstalacoeseletricas-api.onrender.com/",
});