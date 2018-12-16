import Vue from 'vue'
import Vuex from 'vuex'
import { cloneDeep } from 'lodash-es'
import Firebase from '@/api/firebase/firebase'
import Firestore from '@/api/firebase/firestore'
import type from '@/store/mutations-type'

Vue.use(Vuex)

const namespaced = true
const state = {
    user: {},
    status: false,
    books: [],
    queryParams: {
        query: null
    },
    isLoading: false,
}
const getters = {
    user: state => {
        return state.user
    },
    isSignedIn: state => {
        return state.status
    },
    books: state => {
        return state.books
    },
}
const mutations = {
    [type.ON_AUTH_STATE_CHANGED](state, user) {
        state.user = user
    },
    [type.ON_USER_STATUS_CHANGED](state, status) {
        state.status = status
    },
    [type.FETCH_ALL_BOOKDATA](state, books) {
        state.books = books
    },
    [type.SEND_BOOK_LIST_REQUEST](state) {
        state.isLoading = true
    },
}
const actions = {
    execFetchBooks ({commit, state}, queryParams) {
        commit(types.SEND_BOOK_LIST_REQUEST)

        return Firestore.getFetchBooks(queryParams)
    },
}

const store = new Vuex.Store({
    namespaced,
    state,
    getters,
    mutations,
    actions
})

export default store
