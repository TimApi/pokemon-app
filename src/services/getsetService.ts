import getsetRepository from "@/repositories/getsetRepository"


export class getsetService {
    getSet() { 
    return getsetRepository.getSet()
    }
    getType() {
        return getsetRepository.getType()
    }
}

export default new getsetService()