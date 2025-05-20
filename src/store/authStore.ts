import { defineStore } from "pinia";
import axiosInstance from "./axios.instance";

export type UserRoles = 'admin' | 'employee' | 'employer'

interface IState{
    isAuth:boolean
    isInitialLoading:boolean
    isLoading:boolean
    currentUser:null
}

const state:IState = {
    isAuth:false,
    isInitialLoading:true,
    isLoading:false,
    currentUser:null
}

const useAuthStore = defineStore('authStore',{
    state:() => state,
    actions:{
        async login(data:{login:string,password:string}){
            
        },
        async register({}:{login:string,password:string,name:string,role:string}){

        },
        async initialFetchUser(){
            try{
                this.isAuth = true
                // const res = await axiosInstance.get('/auth/me')
                // const data = res.data
                // console.log(data)
                // if(data){
                //     this.currentUser = data
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