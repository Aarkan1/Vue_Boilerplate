<template>
<div class="holder shadow">
    <!-- the @submit calls the method addItem on enter 
        .prevent blocks render, so animations can be played-->
    <form @submit.prevent="addItem">
        <input type="text" autocomplete="off" placeholder="Enter an item to add.." v-model="item" v-validate="'min:2'" name="item">

        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
            <p class="alert" v-if="errors.has('item')">{{ errors.first('item') }}</p>
        </transition>
    </form>

    <ul>
        <transition-group name="list" enter-active-class="animated bounceIn" leave-active-class="animated bounceOut">
            <!-- for some reason transition-group won't work 
                unless key index is + 1, this is a known issue -->
            <li v-for="(list, index) in items" :key='index + 1'>
                {{index + 1}}: {{ list.item }}
                <i class="fa fa-minus-circle" v-on:click="removeItem(index)"></i>
            </li>
        </transition-group>
    </ul>
</div>
</template>

<!-- You can split the .vue file into seperate files
    but you have to link the files into the template -->

<script src="./TodoList.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style src="./TodoList.css" scoped></style>
