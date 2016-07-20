import {Dispatcher} from 'flux';
import Store from '../store/Store';

let appDispatcher = new Dispatcher();

appDispatcher.register(function(payload){
    switch(payload.actionName){
        case 'new-item':
            Store.addItem(payload.newItem);
            break;
        default:
            console.log('no this action');
    }
});

export default appDispatcher;
