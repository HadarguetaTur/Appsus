import keepMain from "./apps/keep/keep-main.cmp.js";
// import mainMail from "./apps/mail/main-mail.js";
import appHomeCmp from "./cmps/app-home.cmp.js";



const routes = [
    {
        path: '/',
        component: appHomeCmp,
    },

    {
        path: '/Keep',
        component: keepMain,
    },
    // {
    //     path: '/mail',
    //     component: mainMail
    // },



]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})
