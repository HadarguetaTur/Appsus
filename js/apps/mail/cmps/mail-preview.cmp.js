export default {
    props: ['mail'],
    template: `
     <section v-if="mail" class="mail-preview flex">
     
        <div class="mail-preview-checks-container flex column" @click.stop>
            <input type="checkbox" class="read-check" id="read" hidden />
            <label for="read"><i class="fa fa-envelope" :class="{ read : isRead }"></i></label>
            <input type="checkbox" class="star-check" id="star" hidden/>
            <label for="star"><i class="fa fa-star"></i></label>
        </div>
        <div class="mail-preview-extension">
            <input  @click.stop type="checkbox"  id="extended-preview" hidden>
            <span >
                <label @click.stop for="extended-preview" class="extended-preview">
                <h4 class="mail-body-preview"> {{mail.body}} </h4> <h4 class="mail-subject-preview">{{mail.subject}}</h4>
                <span class="mail-time-preview">{{mail.sentAt}}</span>
                </label>
            </span>
            <p>{{mail.subject}}</p>
            <p>{{mail.body}}</p>
        </div>
        </section>
`,
    data() {
        return {
            isExtended: false,
            activeEl: 0
        };
    },
    created() { console.log("hey") },
    methods: {
        isRead() {
        },
    },
    computed: {},
    unmounted() { },
};