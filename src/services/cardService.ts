import cardRepository from "@/repositories/cardRepository"


export class cardService {
    getCards(pagesize?: number, page?: string) {
        return cardRepository.getCards(pagesize, page)
    }
}

export default new cardService()