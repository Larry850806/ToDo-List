var EventEmitter = require('events').EventEmitter;

class Store extends EventEmitter {
    constructor(){
        super();
        this.mode = 0;
        this.todoItems = [];
        this.doingItems = [];
        this.finishItems = [];
    }

    getMode(){
        return this.mode;
    }

    getTodoItems(){
        return this.todoItems;
    }

    getDoingItems(){
        return this.doingItems;
    }

    getFinishItems(){
        return this.finishItems;
    }

    addItem(newItem){
        this.todoItems.push(newItem);
        this.emit('change');
    }

    removeItem(index){
        var nowItems = [];
        var nextItems = [];
        switch(this.mode){
            case 0:
                nowItems = this.todoItems;
                nextItems = this.doingItems;
                break;
            case 1:
                nowItems = this.doingItems;
                nextItems = this.finishItems;
                break;
            case 2:
                nowItems = this.finishItems;
                break;
            default:
                nowItems = nextItems =  ['error'];
        }
        var item = nowItems[index];
        nowItems.splice(index, 1);
        nextItems.push(item);
        this.emit('change');
    }

    changeMode(newMode){
        this.mode = newMode;
        this.emit('change');
    }
};

let store = new Store();

export default store;