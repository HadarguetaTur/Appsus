import booksPreview from "./books-preview.cmp.js";

export default {
    props: ["books"],
    template: `
   <section class="books-list">
              <div class="books-main">
              <div v-for="book in books" :key="book.id" class="books-preview-container">
              <router-link :to="'/book/'+book.id">Details</router-link>
                  <book-preview :book="book"/>
              </div>  
              </div>
      </section>

      
  `,
    components: {
      booksPreview,
    },
  
    data() {
      return {};
    },
    methods: {
      remove(bookId) {
        this.$emit("removed", bookId);
      },
      select(book) {
        this.$emit("selected", book);
      },
    },
    computed: {},
  };
  