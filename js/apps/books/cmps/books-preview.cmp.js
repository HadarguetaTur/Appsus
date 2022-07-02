export default {
  props: ["book"],
  template:
    `
    <div class="book-preview"> 
     <img :src="book.thumbnail" alt="book-img" class="book-card-img">
      <p>{{book.title}}</p>
      <span>{{priceToDisplay}}</span>
  </div>
  `,
  data() {
    return {};
  },
  methods: {},
  computed: {
    priceToDisplay() {
      return new Intl.NumberFormat('en-EN', { style: 'currency', currency: this.book.listPrice.currencyCode }).format(this.book.listPrice.amount)
    },
  },
};