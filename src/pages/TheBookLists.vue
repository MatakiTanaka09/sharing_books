<template>
<div class="">
    <b-tooltip label="tagで絞り込み！"
        type="is-success"
        position="is-top">
        <div class="selection is-centered">
            <div class="select is-success">
                <select
                    v-model="value"
                    
                >
                    <option
                        v-for="option in options"
                        :key="option.value"
                        :label="option.label"
                        :value="option.value"
                    >
                    </option>
                </select>
            </div>
        </div>
    </b-tooltip>
    <div class="columns is-multiline is-centered booklists">
        <div v-for="book in books" class="card column is-narrow booklist is-3">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content title-expand">
                        <p class="title is-6">{{ book.title }}</p>
                        <p class="subtitle is-6">{{ book.author }}</p>
                    </div>
                </div>
                <div class="content">
                    <p class="bookDesc has-text-left">
                        {{ book.description }}
                    </p>
                    <b-field grouped group-multiline>
                        <div v-for="tag in book.tag" class="control">
                            <b-tag type="is-success" attached>{{ tag }}</b-tag>
                        </div>
                    </b-field>
                    <a v-if="book.borrowable" class="button btn-expand is-info">Borrow</a>
                    <a v-else class="button btn-expand is-danger" title="Disabled button" disabled>Borrowing</a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Firestore from '@/api/firebase/firestore'


export default {
    data() {
        return {
            options: [
                { value: 0, label: 'All' },
                { value: 1, label: 'JavaScript' },
                { value: 2, label: 'PHP' },
                { value: 3, label: 'DB' },
                { value: 4, label: 'Python' },
                { value: 5, label: 'HTML/CSS' },
                { value: 6, label: 'Web Design' },
                { value: 7, label: 'Algorithm' },
                { value: 8, label: 'Borrowable' },
                { value: 9, label: 'Borrowing' },
                { value: 10, label: 'Others' },
                { value: 11, label: 'Server' },
                { value: 12, label: 'Front' },
                { value: 13, label: 'UI' },
            ],
            value: null
        }
    },
    // props: {
    //     activeItemKey: {
    //         type: [String, Number],
    //         required: false
    //     },
    //     action: {
    //         type: Function,
    //         required: true
    //     }
    // },
    mounted: function() {
        Firestore.getFetchAllBooks()
        // Firestore.getFetchBooks("js")
        //data type で条件分岐
    },
    computed: {
        books() {
            return this.$store.getters.books
        }
    },
    methods: {
        // changeValue (val) {
        //     this.action(val)
        // }
    }
}
</script>

<style scoped>
.booklists, .selection {
    margin: 16px 8px;
}
.booklist {
    max-height: 500px;
    margin: 8px 4px;
}
.title-expand, .subtitle-expand {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.bookDesc {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: 10px;
}
.card-expand {
    width: 320px;
}
.select-right {
    margin: 0 16px;
}
.btn-expand {
    margin: 10px;
    width: 80%;
}
</style>
