import {instance} from "./api";

export const profileAPI = {
    async getProfile(userId:number){
        return await instance.get(`profile/${userId}`)
            .then(res => res.data)
    }
}