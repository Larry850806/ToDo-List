import {Dispatcher} from 'flux';
import Store from '../store/Store';

let appDispatcher = new Dispatcher();

appDispatcher.register(function(payload){
    switch(payload.actionName){
        case 'new-item':
            Store.addItem(payload.newItem);
            break;
        case 'remove-item':
            Store.removeItem(payload.index);
            break;
        case 'change-mode':
            Store.changeMode(payload.newMode);
            break;
        default:
            console.log('no this action');
    }
});

export default appDispatcher;
