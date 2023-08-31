import {instance} from "./api";

export const authAPI = {
    async authMe(){
        return await instance.get(`auth/me`)
            .then(res => res.data)
    },
    async login(email:string,password:string,rememberMe:boolean = false) {
        return await instance.post(`auth/login`,{email,password,rememberMe})
            .then(res => res.data)
    },
    async logout() {
        return await instance.delete(`auth/login`)
    }
}