import { defineStore } from "pinia";
import axiosInstance from "./axios.instance";


interface IState {
  vacancies: ICreateVacancy[];
  isLoading:boolean
  isCreationLoading:boolean
}
interface ICreateVacancy{
    profession_id:number
    title:string
    description:string
    location:string
    requirements:string
    salary:string
}
const state: IState = {
    vacancies:[],
    isLoading:false,
    isCreationLoading:false
};

const useVacanciesStore = defineStore('vacanciesStore',{
    state:() => state,
    actions:{
        async getVacancies(){
            try{
                this.isLoading = true
                const res = await axiosInstance.get('')
            }catch(e){

            }finally{   
                this.isLoading = false
            }
        },
        async createVacancy(body:ICreateVacancy){
            try{
                this.isCreationLoading = true
                const res = await axiosInstance.post('vacancies',{body})
                const data = res.data
                console.log(data)
                return data
            }
            catch(e){

            }finally{
                this.isCreationLoading = false;
            }
        }
    }
})

export default useVacanciesStore;