import axios from "axios"


  export class searchsetRepository {
      getSearchSet(setid: string) {
          return axios.get(`https://api.pokemontcg.io/v2/sets/${setid}`, {
              headers: {
                "X-Api-Key": "fdf2a080-0220-4b2f-975e-69391d7eda2a",
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              }
          })
      }
      GetRaritySearch(rarityid: string, pagesize?: string, pages?: string) {
        console.log(rarityid, pagesize, pages)
        return axios.get(`https://api.pokemontcg.io/v2/cards?q=types:${rarityid}&pageSize=${pagesize}&page=${pages}`, {
          headers: {
            "X-Api-Key": "fdf2a080-0220-4b2f-975e-69391d7eda2a",
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          }
        })
    }
    getvmaxCards(vmax?: string, pagesize?: string, pages?:string ) {
        return axios.get(`https://api.pokemontcg.io/v2/cards?q=subtypes:${vmax}&pageSize=${pagesize}&page=${pages}`, {
          headers: {
            "X-Api-Key": "fdf2a080-0220-4b2f-975e-69391d7eda2a",
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          }
      })
  }
  }

  export default new searchsetRepository()