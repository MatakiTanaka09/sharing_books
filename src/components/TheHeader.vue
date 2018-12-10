<template>
<nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
            <strong>sharebnb</strong>
        </router-link>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
            <router-link to="/booklists" class="navbar-item">
                BookLists
            </router-link>
            <router-link to="/mylists" class="navbar-item">
                MyList
            </router-link>
            <router-link to="/management" class="navbar-item">
                Magement
            </router-link>
        </div>

        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-info">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">
                        Log in
                    </a>
                </div>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: 'TheHeader'
}

</script>

<style scoped></style>
