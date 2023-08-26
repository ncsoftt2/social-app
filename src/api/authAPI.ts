import {instance} from "./api";

export const authAPI = {
    async authMe(){
        return await instance.get(`auth/me`)
            .then(res => res.data)
    }
}