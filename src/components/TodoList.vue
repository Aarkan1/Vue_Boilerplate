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

<script>
/* eslint-disable */
let items = [{
        "item": "Wake up"
    },
    {
        "item": "Learn Vue"
    },
    {
        "item": "Be awesome"
    }
];
// uses local storage to store todo list
const STORAGE_KEY = 'vue-todolist-1.0';
let storeOptions = {
    load: function () {
        let list = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        if (list.length === 0) list = items;
        return list;
    },
    save: function (list) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    }
}
export default {
    name: 'TodoList',
    data() {
        return {
            item: '',
            items: storeOptions.load()
        }
    },
    // watch will look for changes, and execute function when change happens
    watch: {
        items: {
            handler: function (items) {
                storeOptions.save(items);
            },
            deep: true
        }
    },
    methods: {
        addItem() {
            this.$validator.validateAll().then((result) => {
                if (result && this.item.trim()) {
                    this.items.push({
                        item: this.item
                    });
                    this.item = '';
                } else {
                    console.log('Not valid');
                }
            })
        },
        removeItem(item) {
            this.items.splice(item, 1);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.holder {
    margin: 0 auto;
    background: #fff;
    width: 80%;
}

.holder form {
    position: relative;
}

ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

ul li {
    padding: 20px;
    font-size: 1.3em;
    width: 100%;
    background-color: rgb(232, 234, 235);
    border-left: 5px solid rgb(30, 94, 131);
    margin-bottom: 2px;
    color: #3E5252;
}

p {
    text-align: center;
    padding: 30px 0;
    color: gray;
}

.container {
    box-shadow: 0px 0px 40px lightgray;
}

input {
    width: 100%;
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
}

.alert {
    background: #fdf2ce;
    font-weight: bold;
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: -30px;
    padding: 5px;
    margin-top: -20px;
}

.alert-in-enter-active {
    animation: bounce-in .5s;
}

.alert-in-leave-active {
    animation: bounce-in .5s reverse;
}
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.5);
    }

    100% {
        transform: scale(1);
    }
}

i {
    float: right;
    cursor: pointer;
}
</style>
