var EventEmitter = require('events').EventEmitter;

class Store extends EventEmitter {
    constructor(){
        super();
        this.todoItems = [];
        this.pendingItems = [];
        this.finishItems = [];
    }

    getTodoItems(){
        return this.todoItems;
    }

    getPendingItems(){
        return this.pendingItems;
    }

    getFinishItems(){
        return this.finishItems;
    }

    addItem(newItem){
        this.todoItems.push(newItem);
        this.emit('change');
    }
};

let store = new Store();

export default store;