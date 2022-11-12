import axios from "axios";

export class getcardRepository {
    getcardbyid(id: string) {
        return axios.get(`https://api.pokemontcg.io/v2/cards/${id}`, {
            headers: {
              "X-Api-Key": "fdf2a080-0220-4b2f-975e-69391d7eda2a",
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            }
        })
    }
}


export default new getcardRepository()