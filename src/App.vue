<template>
<div id="app">
    <!-- HEADER -->
    <NavBar />
    <!-- MAIN VIEW -->
    <router-view />
    <!-- FOOTER -->
    <Footer />
</div>
</template>

<script>
/* eslint-disable */
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
    name: "app",
    components: {
        NavBar,
        Footer
    }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
@import 'https://fonts.googleapis.com/css?family=Montserrat:400,700';

* {
    box-sizing: border-box;
}

body{
    margin: 0;
    font-family: 'Montserrat', sans-serif;
}

#app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#app>div {
    flex: 1;
}
</style>
