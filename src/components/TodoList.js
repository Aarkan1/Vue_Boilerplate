/* eslint-disable */
import {db} from "@/main";

export default {
    name: 'TodoList',
    // data() is where varables that the template need access to is stored
    data() {
        return {
            item: '',
            // load array from local storage on startup
            items: [],
            validate: false,
            error: 'Type atleast 2 characters'
        }
    },
    // watch will look for changes, and execute function when change happens
    watch: {
        // the property to watch
        item: {
            // check input length for validation
            handler: function () {
                this.validate = this.item.length < 2 && this.item.length > 0 ? true : false;
            }
        }
    },
    // functions to manipulate the template goes into methods
    methods: {
        addItem() {
            if (!this.validate && this.item.trim()) {
                // add item to database
                db.push({
                    item: this.item
                });
                this.item = '';
            } else {
                console.log('Not valid');
            }
        },
        removeItem(key) {
            // remove item from database at key recieved
            db.child(key).remove();
            console.log('delete item from db');
            
        }
    },
    mounted() {

        let self = this;

        // on changes to database list
        db.on('value', gotData, errData);

        let list = [];
        
        // callback when getting data
        function gotData(data) { 
            list = [];

            // convert stored hashmap to normal array
            let dbList = data.val();
            let keys = Object.keys(dbList);
            
            for(let key of keys){
                list.push({
                    item: dbList[key].item,
                    // import hash for index to remove
                    key: key
                });
            }
            self.items = list;

            console.log('loaded items from db');
            
         }
        function errData(err) { 
            console.log(err);
         }
    }
}