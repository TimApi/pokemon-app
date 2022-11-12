import axios from "axios";


const setinstance = axios.create({
    baseURL: "https://api.pokemontcg.io",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-Api-Key": "fdf2a080-0220-4b2f-975e-69391d7eda2a",
        "Access-Control-Allow-Origin": "*",
    }
});

export class getsetRepository {
    getSet() {
        return setinstance.get("/v2/sets")
    }
    getType() {
        return setinstance.get("/v2/types")
    }
}


export default new getsetRepository()