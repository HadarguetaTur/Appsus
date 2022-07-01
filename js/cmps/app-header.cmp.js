export default {
    template: `
        <header class="app-header flex space-between">
            <div class="logo">
                <h3>Appsus</h3>
            </div>
            <nav class="nav-bar">
                <router-link to="/">Home</router-link>|
                <router-link to="/mail/:mailType">mail</router-link>|
                <router-link to="/Keep">Keep</router-link>|
     
            </nav>
        </header>
    
    `
}