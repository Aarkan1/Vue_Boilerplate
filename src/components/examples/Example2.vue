<template>
<div id="example2">
    <button type="button" class="btn btn-secondary mt-5 mb-2" v-on:click="toggleShow">{{show ? 'Hide' : 'Show'}} content</button>

    <div class="jumbotron jumbotron-fluid col-8 col-lg-6 p-5 m-auto shadow rounded" v-show="show">
        <div class="container">
            <h1 class="display-4">What a nice jumbotron!</h1>
            <p class="lead">Now, hide it!</p>
        </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Example2',
    data() {
        return {
            show: false
        }
    },
    methods: {
        toggleShow() {
            this.show = !this.show;
        }
    }
}
</script>
