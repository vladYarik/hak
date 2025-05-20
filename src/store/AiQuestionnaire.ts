import { defineStore } from "pinia";
import axiosInstance from "./axios.instance";

interface IQuestion{
    id:number
    text:string
    choices:{
        id:number
        text:string
    }[]
}

interface IState {  
    questions:IQuestion[]
    isLoading:boolean
    answers:{question_id:number,answer_choice_id:number | null}[]
    myJob:string | null
}

const state: IState = {
  questions:[],
  isLoading:false,
  answers:[],
  myJob:null
};

const useAiQStore = defineStore("vacanciesStore", {
  state: () => state,
  actions: {
    chooseAnswer(qId:number,aId:number){
     
        this.answers[qId].answer_choice_id = aId
        console.log(this.answers)
    },
    async sendAnswers(){
        try{
            this.isLoading = true
            const res = await axiosInstance.post("questionnaire/submit",{answers:this.answers});
            const data = res.data
             this.myJob = data
            return data
        }catch(e){
            this.myJob = 'Программирование'
            return 'successs'
        }finally{
            this.isLoading = false
        }
    },
    async getQuestionnaire(){
        try{
            this.isLoading = true
            const res = await axiosInstance.get('questionnaire')
            const data = res.data
            if(data){   
                this.questions = data
                this.answers = this.questions.map((elem, id) => {
                  return { question_id: elem.id,answer_choice_id:null };
                });
            }
        }catch(e){
            this.questions = [
              {
                id: 0,
                text: "string",
                choices: [
                  {
                    id: 0,
                    text: "string",
                  },
                  {
                    id: 1,
                    text: "string",
                  },
                  {
                    id: 2,
                    text: "string",
                  },
                ],
              },
              {
                id: 1,
                text: "string",
                choices: [
                  {
                    id: 0,
                    text: "string",
                  },
                  {
                    id: 1,
                    text: "string",
                  },
                ],
              },
            ];
           
            const a = this.questions.map((elem, id) => {
              return { question_id: elem.id, answer_choice_id: null };
            });
            if(a){
                this.answers = a
            }
        }finally{
            this.isLoading = false;
        }
    }
  },
});

export default useAiQStore;
