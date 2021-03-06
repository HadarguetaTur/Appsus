export default {
    template: `
        <header class="app-header flex space-between">
            <div class="logo">
                <h3><i class="fa fa-horse"></i></h3>
            </div>
            <nav class="nav-bar">
                <router-link to="/">Home</router-link>|
                <router-link to="/mail/:mailType">mail</router-link>|
                <router-link to="/Keep">Keep</router-link>|
                <router-link to="/books">books</router-link>|
            </nav>
        </header>
    
    `
}