import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"
import Home from "../views/Home.vue"
import Login from "../views/Login.vue"
import useAuthStore from "../store/authStore"
import { watch } from "vue"
import Registration from "../views/Registration.vue"
import Jobs from "../views/Jobs.vue"
import Queistionnair from "../views/Queistionnair.vue"
import Job from "../views/Job.vue"
import CreateJob from '../views/CreateJob.vue'
import AiQuestionnair from "../views/AiQuestionnair.vue"



const routes:RouteRecordRaw[] = [
    {
        path:'/',
        name:'Home',
        component:Home,
        meta:{requiresAuth:true,roles:['employee','employer']}
    },
    {
        path:'/login',
        name:'Login',
        component:Login,
        meta:{requiresAuth:false}
    },
    {
        path:'/registration',
        name:'Register',
        component:Registration
    },
    {
        path:'/jobs',
        name:'Jobs',
        component:Jobs,
        meta:{requiresAuth:true}
    },
    {
        path:'/aiquestionnaire',
        name:'AI',
        component:AiQuestionnair,
        meta:{requiresAuth:true}
    },
    {
        path:'/jobs/create',
        name:'CreateJob',
        component:CreateJob,
        meta:{requiresAuth:true}
    },
    {
        path:'/jobs/:id',
        name:'Job',
        component:Job,
        meta:{requiresAuth:true}
    },
    {
        path:'/questionnaire',
        name:'Questionnaire',
        component:Queistionnair,
        meta:{requiresAuth:true}
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes
})

router.beforeEach((to,from,next) => {
    const authStore = useAuthStore()
    
    if(authStore.isInitialLoading){
        const unwatch = watch(() => authStore.isInitialLoading, (loading) => {
            if(!loading){
                unwatch()
                if(to.meta.requiresAuth){
                    if(authStore.isAuth){
                        next()
                    }else{
                        next({name:"Login"})
                    }
                }else if(!to.meta.requiresAuth){
                    if(authStore.isAuth){
                        next({name:"Home"})
                    }else{
                        next()
                    }
                }
            }
        })
    }else{
        if(to.meta.requiresAuth){
            if(authStore.isAuth){
                next()
            }else{
                next({name:"Login"})
            }
        }else if(!to.meta.requiresAuth){
            if(authStore.isAuth){
                next({name:"Home"})
            }else{
                next()
            }
        }
    }

})

export default router