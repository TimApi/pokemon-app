import searchRepository from "@/repositories/searchRepository";

export class SearchService {
    getCard(value: string, pagesize?:string, pages:string) {
        return searchRepository.getCard(value, pagesize, pages)
     }

     getsetcard(id: string, pagesize?: string, pages?: string) {
        console.log(id, pagesize, pages)
        return searchRepository.getCardSet(id, pagesize, pages)
     }
}


export default new SearchService()