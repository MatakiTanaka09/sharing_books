import firebase from '@firebase/app'
import '@firebase/auth'
import firebaseConfig from '@/api/firebase/firebaseConfig'
import type from '@/store/mutations-type'
import store from '@/store/'

export default {
    init() {
        firebase.initializeApp(firebaseConfig)
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    },
    onAuth() {
        firebase.auth().onAuthStateChanged(user => {
            user = user ? user : {}
            store.commit(type.ON_AUTH_STATE_CHANGED, user)
            store.commit(type.ON_USER_STATUS_CHANGED, user.uid ? true : false)
        })
    },
    signIn() {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithPopup(provider).then(user => {
            alert('success')
        })
    },
    signOut() {
        firebase.auth().signOut()
    },
    isUserSignIn() {
        return !!firebase.auth().currentUser || false
    },
    // getUserPicUrl(user) {
    //     return user.user.photoURL // || '../../static/images/profile_placeholder.png'
    // },
    // getUserName(user) {
    //     return user.user.displayName
    // },
    // getUserUid(user) {
    //     return user.user.uid
    // },
    // getUserEmail(user) {
    //     return user.user.email
    // }
}
