import {instance} from "./api";

export const usersAPI = {
    getUsersAPI (currentPage = 1, pageSize = 8) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    followAPI(userId: number) {
        return instance.post(`follow/${userId}`, {})
            .then(res => res.data)
    },
    unfollowAPI(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(res => res.data)
    },
}
