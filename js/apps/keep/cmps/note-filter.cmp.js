export default{
    template: `
    <section class="notes-filter">
        <div class="filter-by-title">
            <input @input="filter" v-model="filterBy.txt" type="text" placeholder="search">
        </div>
        <div class="filter-by type" >
            <select v-model="filterBy.type" @input="filter">
            <option value='note-todo'>todo</option>
            <option value='note-txt'>text</option>
            <option value='note-img'>image</option>
            <option value='note-video'>video</option>
            </select>    
        </div>
    </section>
    `,
    data() {
        return {
            filterBy: {
                txt: '',
                type: '',
             
            }
        }
    },
    methods: {
        filter(){
            this.$emit('filtered', this.filterBy)
            

        }
    },
}