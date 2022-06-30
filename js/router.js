import keepMain from "./apps/keep/keep-main.cmp.js";
import mainMail from "./apps/mail/main-mail.js";
import appHomeCmp from "./cmps/app-home.cmp.js";
import mailDetails from "./apps/mail/cmps/mail-details.cmp.js";
import mainBook from "./apps/books/main-book.js";



const routes = [
    {
        path: '/',
        component: appHomeCmp,
    },

    {
        path: '/Keep',
        component: keepMain,
    },
    {
        path: '/mail',
        component: mainMail
    },
    {
        path: '/mail/:mailId',
        component: mailDetails
    },
    {
        path: '/books',
        component: mainBook
    },



]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})
