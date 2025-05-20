import { defineStore } from "pinia";
import axiosInstance from "./axios.instance";
import axios from "axios";

export type UserRoles = 'admin' | 'employee' | 'employer'
export interface IUser{
    username:string
    email:string
    role:'employee' | 'employer'
}
interface IState{
    isAuth:boolean
    isInitialLoading:boolean
    isLoading:boolean
    currentUser:null | IUser
}

const state:IState = {
    isAuth:false,
    isInitialLoading:true,
    isLoading:false,
    currentUser:{username:'fdv',email:'df',role:"employer"}
}

const useAuthStore = defineStore('authStore',{
    state:() => state,
    actions:{
        async login(payload:{login:string,password:string}){
            try{
                const res = await axiosInstance.post("auth/login", {
                  email: payload.login,
                  password: payload.password,
                });
                const data = res.data
                if(data?.access_token){
                    localStorage.setItem('token',data.access_token)
                    this.isAuth = true
                    this.currentUser = {username:data.username,email:data.email}
                }
                
            }catch(e){
                this.isAuth = false
            }finally{

            }
        },
        async register({}:{login:string,password:string,name:string,role:string}){

        },
        async getRole(){
            try{
                const res = await axiosInstance.get('profile/role')
                const data = res.data
                return data
            }catch(e){
                return null
            }finally{

            }
        },
        async initialFetchUser(){
            try{
                this.isAuth = true
                // const res = await axiosInstance.get('auth/me')
                // const data = res.data
                // if(data){
                //     const role = await this.getRole()
                //     const user = { username: data.username, email: data.email,role:role };
                //     this.currentUser = user
                //     this.isAuth = true
                    
                // }
            }catch(e){
                this.isAuth = false
                this.currentUser = null
            }finally{
                this.isInitialLoading = false
            }
        },
        async fetchUser(){
            try{
                const res = await axiosInstance.get('user')
                const data = res.data
                if(data){
                    this.currentUser = data
                    this.isAuth = true
                }
            }catch(e){
                this.isAuth = false
                this.currentUser = null
            }finally{
                
            }
        }
    }
})

export default useAuthStore