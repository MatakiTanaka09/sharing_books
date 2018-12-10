import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import BookLists from '@/pages/TheBookLists'
import MyLists from '@/pages/TheMyLists'
import Management from '@/pages/TheManagement'

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/booklists',
            name: 'BookLists',
            component: BookLists
        },
        {
            path: '/mylists',
            name: 'MyLists',
            component: MyLists
        },
        {
            path: '/management',
            name: 'Management',
            component: Management
        }
    ]
})
