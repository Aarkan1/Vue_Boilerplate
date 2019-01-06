<template>
<div id="example1">
    <h3>Vue examples</h3>
    <br>
    <div class="card col-7 col-lg-5 m-auto shadow">
        <div class="card-body pb-1">
            <p v-if="!message">Enter some text</p>
            <p v-else>Text is: {{ message }}</p>
        </div>
    </div>
    <input class="mt-4" v-model="message" placeholder="edit me">
</div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Example1',
    data() {
        return {
            message: ''
        }
    }
}
</script>
