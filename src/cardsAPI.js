import { http } from "./config";

export default {
    listar: () => {
        return http.get("https://pokeapi.co/api/v2/pokemon/1/");
    }
};
