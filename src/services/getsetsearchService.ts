import searchsetRepository from "@/repositories/searchsetRepository";

export class searchsetService {
    getSearchSet (searchid: string) {
        return searchsetRepository.getSearchSet(searchid)
    }
    GetRaritySearch (getrarity?: string, pagesize?:string, page?: string) {
        console.log(getrarity)
        return searchsetRepository.GetRaritySearch(getrarity, pagesize, page)
    }
    getvmaxCards(vmax?: string, pagesize?:string, pages?:string ) {
        return searchsetRepository.getvmaxCards(vmax, pagesize, pages)
    }
}


export default new searchsetService()