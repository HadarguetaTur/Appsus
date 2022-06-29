import appFooter from './cmps/app-footer.cmp.js'
import appHeader from './cmps/app-header.cmp.js'
import appHome from './cmps/app-home.cmp.js'


const options = {
    template: `
        <section>
            <app-header />
            <app-home />
            <app-footer />
        </section>

    `,
    components: {
        appHeader,
        appFooter,
        appHome
        
   
    }
};


const app = Vue.createApp(options)
// app.use(router)
app.mount('#app')

