import axios from "axios"

const instance = axios.create({
    baseURL: 'https://api.pokemontcg.io',
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-Api-Key": "fdf2a080-0220-4b2f-975e-69391d7eda2a",
        "Access-Control-Allow-Origin": "*",
    }
  });



  export class cardRepository {
      getCards(pagesize?: string , page: string) {
          console.log(pagesize, pagesize)
          return instance.get(`/v2/cards?&pageSize=${pagesize}&page=${page}`)
      }
  }


  export default new cardRepository()