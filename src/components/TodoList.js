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