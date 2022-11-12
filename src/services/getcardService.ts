import getcardRepository from "@/repositories/getcardRepository"


export class getcardService {
    getcardbyid(id: string,) {
        return getcardRepository.getcardbyid(id)
    }
}

export default new getcardService()