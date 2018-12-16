import firebase from '@firebase/app'
import '@firebase/firestore'
import firebaseConfig from '@/api/firebase/firebaseConfig'
import type from '@/store/mutations-type'
import store from '@/store/'

export default {
    init() {
        this.firestore = firebase.firestore()
        this.firestore.settings({ timestampsInSnapshots: true })
    },
    getBooksCollection() {
        return firebase.firestore().collection("books")
    },
    getFetchBooks(data) {
        this.getBooksCollection().where('tag', 'array-contains', data)
            .get().then(querySnapshot => {
                const bookData = []
                querySnapshot.forEach(doc => {
                    let targetData = {
                        id: doc.id,
                        title: doc.data().title,
                        author: doc.data().author,
                        description: doc.data().description,
                        tag: doc.data().tag,
                        borrowable: doc.data().borrowable
                    }
                    bookData.push(targetData)
                })
            store.commit(type.FETCH_ALL_BOOKDATA, bookData)
        })
    },
    getFetchAllBooks() {
        this.getBooksCollection().get().then(querySnapshot => {
            const bookData = []
            querySnapshot.forEach(doc => {
                let data = {
                    id: doc.id,
                    title: doc.data().title,
                    author: doc.data().author,
                    description: doc.data().description,
                    tag: doc.data().tag,
                    borrowable: doc.data().borrowable
                }
                bookData.push(data)
            })
            store.commit(type.FETCH_ALL_BOOKDATA, bookData)
        })
    }
}
