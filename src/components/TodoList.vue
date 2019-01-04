
<template>
    
      <div class="holder">
        <form @submit.prevent="addItem">
          <input type="text" placeholder="Enter an item to add.." v-model="item" v-validate="'min:2'" name="item">

          <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
            <p class="alert" v-if="errors.has('item')">{{ errors.first('item') }}</p>
          </transition>
        </form>

        <ul>
            <li v-for="(list, index) in items" v-bind:key="index">
             {{ index + 1 }}: {{ list.item }}
              <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
            </li>
        </ul>
    
      </div>
</template>

<script>
let items = [
    { item: "Wake up"},
    { item: "Learn Vue"}
];
export default {
  name: 'TodoList',
  data() {
    return {
      item: '',
      items: items
    }
  },
  methods: {
    addItem() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.items.push({item: this.item})
          this.item = '';
        } else {
          console.log('Not valid');
        }
      })
    },
    remove(id) {
      this.items.splice(id, 1);
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
    box-shadow: 0 0 10px;
  }
  .holder form{
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
    background-color: rgb(232, 234, 235);
    border-left: 5px solid rgb(30, 94, 131);
    margin-bottom: 2px;
    color: #3E5252;
  }
  p {
    text-align:center;
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
  float:right;
  cursor:pointer;
}
</style>