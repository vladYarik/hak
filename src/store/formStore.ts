import { defineStore } from "pinia";

export interface ISkill{
    title:string
    rate:number
    id:number
}
export interface IForm {
  title: string;
  skills: ISkill[];
}

interface IState {
    myForm:IForm | null
}

const state: IState = {
    myForm:null
};

const useFormStore = defineStore('questStore',{
    state:() => state,
    actions:{
        addForm(data:{title:string,skills:{title:string,rate:number,id:number}[]}){
            this.myForm = data
            console.log(this.myForm.skills[1])
        }
    }
})

export default useFormStore;