<template>
<section class="index">
    <div class="hero is-medium is-bold is-large">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    {{ title }}
                </h1>
                <h2 class="subtitle mb">
                    {{ subtitle }}
                </h2>
                <p class="">
                    {{ serviceDesc }}
                </p>
            </div>
        </div>
    </div>
    <div v-if="!userStatus" class="hero is-medium is-bold is-large">
        <div class="hero-body">
            <div class="container is-large">
                <p class="mb">
                    {{ loginDescription }}
                </p>
                <Auth />
            </div>
        </div>
    </div>
</section>
</template>

<script>
import Auth from '@/components/TheAuth'
import Firebase from '@/api/firebase/firebase'

export default {
    name: 'Index',
    components: {
        Auth
    },
    data () {
        return {
            title: 'Welcome to sharebnb!',
            subtitle: 'Share Books and Borrow',
            serviceDesc: '気軽に本が借りられて、安全に本を貸す事ができるサービス',
            loginDescription: 'さあ、さっそく始めてみよう！',
        }
    },
    created: function() {
        Firebase.onAuth()
    },
    computed: {
        user() {
            return this.$store.getters.user
        },
        userStatus() {
            return this.$store.getters.isSignedIn
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.mb {
    margin-bottom: 20px;
}
</style>
