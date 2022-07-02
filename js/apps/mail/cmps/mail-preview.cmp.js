import { eventBus } from "../services/event-bus.service.js";
export default {
    props: ['mail'],
    template: `
        <section v-if="mail" class="mail-preview flex">
            <div class="mail-preview-checks-container flex column"  @click.stop >
                <div class="star" @click="setStar" ><i :class="isStar"></i></div>
                <div class="star" @click="setRead" ><i :class="isRead"></i></div>
            </div>                  
            <div class="preview-layout flex" @click="read">
                <div class="mail-from-preview":class="isMailRead">{{mail.name}}</div> 
                <div class="mail-subject-preview" :class="isMailRead">{{mail.subject}} {{mail.body}}</div> 
                <div class="mail-time-preview">{{mail.sentAt}}</div>
                <div class="mail-trash-preview" @click.stop @click="onRemove">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </div>
            </div>
        </section>
`,
    data() {
        return {
            isExtended: false,
        };
    },
    created() { },
    methods: {
        onRemove() {
            eventBus.emit('removeAtPreview', this.mail)
        },
        setStar() {
            this.$emit('stared', this.mail)
        },
        setRead() {
            this.$emit('read', this.mail)
        },
        read() {
            this.$emit('readed', this.mail)
        }
    },
    computed: {
        isStar() {
            if (this.mail.isStared) {
                return "fas fa-star yellow"
            } else return "far fa-star"
        },
        isRead() {
            if (this.mail.isRead) {
                return "fa fa-envelope-open"
            } else return "fa fa-envelope"
        },
        isMailRead() {
            if (this.mail.isRead) {
                return "low-opacity"
            }
        }
    },
    unmounted() { this.mail.isExtended = false },
};
