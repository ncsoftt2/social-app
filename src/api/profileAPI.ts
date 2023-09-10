import {instance} from "./api";

export const profileAPI = {
    async getProfile(userId:number){
        return await instance.get(`profile/${userId}`)
            .then(res => res.data)
    },
    async getStatusApi(userId: number){
        return await instance.get(`profile/status/${userId}`)
            .then(res => res.data)
    },
    async updateStatusApi(status: string){
        return await instance.put(`/profile/status`, {status})
    },
    async savePhoto(photo: File) {
        const formData = new FormData()
        formData.append('image',photo)
        return await instance.put(`/profile/photo`,formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
    }
}