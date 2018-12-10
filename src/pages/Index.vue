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
    <div class="hero is-medium is-bold is-large">
        <div class="hero-body">
            <div class="container is-large">
                <p class="mb">
                    {{ loginDescription }}
                </p>
                <a class="button is-rounded">Login</a>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'Index',
    data () {
        return {
            title: 'Welcome to sharebnb!',
            subtitle: 'Share Books and Borrow',
            serviceDesc: '気軽に本が借りられて、安全に本を貸す事ができるサービス',
            loginDescription: 'さあ、さっそく始めてみよう！',
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
