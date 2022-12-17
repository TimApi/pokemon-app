import axios from "axios"


export interface searchParams {
    name: string
}

  export class searchRepository {
      getCard(value: string, pagesize?:string, pages?:string) {
        console.log(value, pagesize, pages)
          return axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${value}&pageSize=${pagesize}&page=${pages}`, {
              headers: {
                "X-Api-Key": "fdf2a080-0220-4b2f-975e-69391d7eda2a",
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              }
          })
      }
      getCardSet(id: string, pagesize?: string, pages?: string) {
        console.log(id, pagesize, pages)
        return axios.get(`https://api.pokemontcg.io/v2/cards?q=set.id:${id}&pageSize=${pagesize}&page=${pages}`, {
            headers: {
              "X-Api-Key": "fdf2a080-0220-4b2f-975e-69391d7eda2a",
              "Accept": "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            }
        })
    }
  }

  export default new searchRepository()